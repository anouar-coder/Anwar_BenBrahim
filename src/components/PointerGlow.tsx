import { useEffect, useRef } from "react";

/**
 * Soft spotlight that trails the cursor, painted on a fixed layer behind the
 * content. It is decorative only, so it stays out of the way on touch devices
 * (there is no cursor to follow) and under reduced motion.
 *
 * Pointer events are coalesced into a single animation frame and the layer is
 * only painted when the position actually moved, which keeps a mouse sweep from
 * turning into a write per event.
 */
export function PointerGlow() {
  const layerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return;

    const hasCursor = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!hasCursor.matches || reduceMotion.matches) {
      layer.hidden = true;
      return;
    }

    let x = 0;
    let y = 0;
    let frame = 0;
    let revealed = false;

    const paint = () => {
      frame = 0;

      layer.style.setProperty("--glow-x", `${x}px`);
      layer.style.setProperty("--glow-y", `${y}px`);

      if (!revealed) {
        revealed = true;
        layer.dataset["ready"] = "true";
      }
    };

    const onPointerMove = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;

      if (!frame) frame = requestAnimationFrame(paint);
    };

    const onPointerLeave = () => {
      delete layer.dataset["ready"];
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("pointerleave", onPointerLeave);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return <div ref={layerRef} aria-hidden className="pointer-glow" />;
}
