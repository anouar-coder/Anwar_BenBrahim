import { useEffect, useRef } from "react";

import type { ParticleField3D } from "@/lib/three-scene";

/**
 * Decorative particle network painted on a canvas behind the whole page.
 *
 * This component owns nothing but the lifecycle — resize, tab visibility, the
 * reduced-motion preference and the animation frame. Everything that touches
 * three.js lives in `~/lib/three-scene`, loaded dynamically so the renderer never
 * runs on the server and never blocks the first paint.
 */
export function ParticleField({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let disposed = false;
    let teardown: (() => void) | undefined;

    void (async () => {
      let field: ParticleField3D;

      try {
        const { createParticleField3D, particleCount } = await import("@/lib/three-scene");

        // The effect was already torn down while the chunk was in flight.
        if (disposed) return;

        field = createParticleField3D(canvas, particleCount());
      } catch {
        // No WebGL, a blocked context, or a chunk that failed to load. The page
        // is fully usable without the field, so drop it quietly instead of
        // surfacing an unhandled rejection.
        canvas.hidden = true;
        return;
      }

      const resize = () => {
        field.resize(
          canvas.clientWidth || window.innerWidth,
          canvas.clientHeight || window.innerHeight,
        );

        // With motion reduced there is no animation loop, so the resize has to
        // repaint by hand — otherwise the frame is left stretched to the
        // previous viewport.
        if (reduceMotion) field.draw(field.elapsed());
      };

      resize();
      window.addEventListener("resize", resize);

      // Following the pointer is motion in its own right, so it is wired only
      // when the visitor has not asked for reduced motion.
      const onPointerMove = (event: PointerEvent) => {
        field.setPointer(
          (event.clientX / window.innerWidth) * 2 - 1,
          -((event.clientY / window.innerHeight) * 2 - 1),
        );
      };

      if (!reduceMotion) {
        window.addEventListener("pointermove", onPointerMove, { passive: true });
      }

      let frame = 0;
      let visible = !document.hidden;

      const loop = () => {
        frame = requestAnimationFrame(loop);
        if (!visible) return;

        field.draw(field.elapsed());
      };

      const onVisibilityChange = () => {
        visible = !document.hidden;

        if (visible) {
          // Drop the accumulated gap so the field does not jump on return.
          field.skipGap();
          field.draw(field.elapsed());
        }
      };

      document.addEventListener("visibilitychange", onVisibilityChange);

      if (reduceMotion) {
        // One static frame: the depth is still there, nothing moves.
        field.draw(field.elapsed());
      } else {
        loop();
      }

      teardown = () => {
        cancelAnimationFrame(frame);
        window.removeEventListener("resize", resize);
        window.removeEventListener("pointermove", onPointerMove);
        document.removeEventListener("visibilitychange", onVisibilityChange);
        field.dispose();
      };
    })();

    return () => {
      disposed = true;
      teardown?.();
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden className={className} />;
}
