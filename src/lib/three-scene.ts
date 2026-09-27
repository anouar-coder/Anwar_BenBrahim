/**
 * three.js is only ever pulled in from the browser, through a dynamic import of
 * this module, so it stays out of the server bundle and out of the first paint.
 *
 * Everything three-related is confined here. The imports are named rather than a
 * namespace (`import * as THREE`) on purpose: a namespace import pins the whole
 * library into the chunk, whereas named imports let the bundler keep only the
 * handful of classes this field actually uses.
 */
import {
  AdditiveBlending,
  BufferAttribute,
  BufferGeometry,
  Clock,
  Color,
  Float32BufferAttribute,
  Group,
  LineBasicMaterial,
  LineSegments,
  PerspectiveCamera,
  Points,
  PointsMaterial,
  Scene,
  WebGLRenderer,
} from "three";

/** Matches --primary (amber) and --accent (cyan) from styles.css. */
const AMBER = 0xf5ab2e;
const CYAN = 0x5ad4dd;

/** Fraction of particles tinted with the cyan accent. */
const ACCENT_RATIO = 0.22;

/** How slowly the whole cloud rotates, in radians per second. */
const SPIN_Y = 0.035;

/** How far the camera slides against the pointer, in world units. */
const PARALLAX = 5.5;

/** Per-frame easing towards the pointer, so the field trails the cursor. */
const POINTER_EASE = 0.05;

/** Extra roll of the cloud itself, in radians, at full pointer deflection. */
const POINTER_TILT = 0.06;

const BOX = 55;
const LINK_DISTANCE = 10.5;
const MAX_LINKS = 2400;
/** A link is two endpoints of three floats each. */
const FLOATS_PER_LINK = 6;

export type ParticleField3D = {
  /** Re-targets the renderer at a new viewport, capped for retina screens. */
  resize: (width: number, height: number) => void;
  /** Advances the rotation to `elapsed` seconds and repaints. */
  draw: (elapsed: number) => void;
  /** Reads the clock, so pausing the tab does not make the field jump. */
  elapsed: () => number;
  /** Consumes the time that passed while paused, so the field does not jump. */
  skipGap: () => void;
  /**
   * Aims the parallax at a pointer position in -1..1 viewport space. The value
   * is clamped and eased inside `draw`, so callers may feed it raw events.
   */
  setPointer: (x: number, y: number) => void;
  dispose: () => void;
};

/** Scales the field with the viewport: dense on desktop, light on phones. */
export function particleCount(): number {
  const area = window.innerWidth * window.innerHeight;

  return Math.min(760, Math.max(260, Math.round(area / 2600)));
}

function buildGeometry(count: number) {
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);

  for (let i = 0; i < count; i += 1) {
    positions[i * 3] = (Math.random() - 0.5) * BOX;
    positions[i * 3 + 1] = (Math.random() - 0.5) * BOX;
    positions[i * 3 + 2] = (Math.random() - 0.5) * BOX;

    const color = new Color(Math.random() < ACCENT_RATIO ? CYAN : AMBER);
    colors[i * 3] = color.r;
    colors[i * 3 + 1] = color.g;
    colors[i * 3 + 2] = color.b;
  }

  const pointsGeometry = new BufferGeometry();
  pointsGeometry.setAttribute("position", new BufferAttribute(positions, 3));
  pointsGeometry.setAttribute("color", new BufferAttribute(colors, 3));

  // Connect every pair that sits within range of each other. The result is
  // capped so a dense cluster can never blow up the line buffer.
  const linkPositions: number[] = [];
  const linkColors: number[] = [];
  const maxDistanceSq = LINK_DISTANCE * LINK_DISTANCE;

  for (let i = 0; i < count; i += 1) {
    if (linkPositions.length >= MAX_LINKS * FLOATS_PER_LINK) break;

    for (let j = i + 1; j < count; j += 1) {
      const dx = positions[i * 3]! - positions[j * 3]!;
      const dy = positions[i * 3 + 1]! - positions[j * 3 + 1]!;
      const dz = positions[i * 3 + 2]! - positions[j * 3 + 2]!;
      const distanceSq = dx * dx + dy * dy + dz * dz;

      if (distanceSq > maxDistanceSq) continue;

      // Fade each link with distance so the mesh reads as depth, not a grid.
      const fade = 1 - Math.sqrt(distanceSq) / LINK_DISTANCE;

      linkPositions.push(
        positions[i * 3]!,
        positions[i * 3 + 1]!,
        positions[i * 3 + 2]!,
        positions[j * 3]!,
        positions[j * 3 + 1]!,
        positions[j * 3 + 2]!,
      );

      for (let end = 0; end < 2; end += 1) {
        const source = (end === 0 ? i : j) * 3;
        linkColors.push(
          colors[source]! * fade,
          colors[source + 1]! * fade,
          colors[source + 2]! * fade,
        );
      }
    }
  }

  const linkGeometry = new BufferGeometry();
  linkGeometry.setAttribute("position", new Float32BufferAttribute(linkPositions, 3));
  linkGeometry.setAttribute("color", new Float32BufferAttribute(linkColors, 3));

  return { pointsGeometry, linkGeometry };
}

/**
 * Builds the renderer, scene and geometry. Throws if the browser cannot give us
 * a WebGL context, which the caller is expected to handle.
 */
export function createParticleField3D(canvas: HTMLCanvasElement, count: number): ParticleField3D {
  const { pointsGeometry, linkGeometry } = buildGeometry(count);

  const points = new Points(
    pointsGeometry,
    new PointsMaterial({
      size: 0.62,
      sizeAttenuation: true,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
      blending: AdditiveBlending,
    }),
  );

  const links = new LineSegments(
    linkGeometry,
    new LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.28,
      depthWrite: false,
      blending: AdditiveBlending,
    }),
  );

  const group = new Group();
  group.add(links, points);

  const scene = new Scene();
  scene.add(group);

  const camera = new PerspectiveCamera(58, 1, 0.1, 220);
  camera.position.set(0, 0, 62);

  const renderer = new WebGLRenderer({
    canvas,
    antialias: false,
    alpha: true,
    powerPreference: "low-power",
  });

  const clock = new Clock();

  const pointerTarget = { x: 0, y: 0 };
  const pointerNow = { x: 0, y: 0 };

  return {
    resize(width, height) {
      if (width < 1 || height < 1) return;

      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
      renderer.setSize(width, height, false);

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    },

    draw(elapsed) {
      group.rotation.y = elapsed * SPIN_Y;
      group.rotation.x = Math.sin(elapsed * 0.12) * 0.18;

      pointerNow.x += (pointerTarget.x - pointerNow.x) * POINTER_EASE;
      pointerNow.y += (pointerTarget.y - pointerNow.y) * POINTER_EASE;

      // The camera slides against the pointer while the cloud rolls with it, so
      // near particles travel further than far ones and the field reads as depth.
      camera.position.x = -pointerNow.x * PARALLAX;
      camera.position.y = -pointerNow.y * PARALLAX;
      group.rotation.z = -pointerNow.x * POINTER_TILT;

      renderer.render(scene, camera);
    },

    setPointer(x, y) {
      pointerTarget.x = Math.max(-1, Math.min(1, x));
      pointerTarget.y = Math.max(-1, Math.min(1, y));
    },

    elapsed() {
      return clock.getElapsedTime();
    },

    skipGap() {
      // getDelta() folds the elapsed time into the clock, so reading it here and
      // throwing the result away is what stops a backgrounded tab from resuming
      // with a visible jump.
      clock.getDelta();
    },

    dispose() {
      pointsGeometry.dispose();
      linkGeometry.dispose();
      points.material.dispose();
      links.material.dispose();
      renderer.dispose();
    },
  };
}
