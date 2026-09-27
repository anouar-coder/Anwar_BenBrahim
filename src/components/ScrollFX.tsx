import { useEffect, useRef } from "react";

/**
 * Two page-level scroll behaviours, kept together because they share a single
 * scroll listener and a single animation frame:
 *
 * - a progress bar driven by the scroll offset;
 * - a reveal for every `[data-reveal]` element as it enters the viewport.
 *
 * The reveal is progressive enhancement. The hiding rules are scoped to
 * `html[data-reveal="on"]`, which is only set once this component has mounted, so
 * a visitor without JS — or with reduced motion — still reads the whole page.
 */
export function ScrollFX() {
  const barRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const bar = barRef.current;
    const pending = new Set<HTMLElement>();
    let frame = 0;

    // Created unconditionally so the early return for reduced motion never hands
    // a half-initialised observer to the teardown.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) reveal(entry.target as HTMLElement);
        }
      },
      // Reveal slightly before the element is fully on screen, and only once a
      // sliver of it is visible, so a short block never pops in mid-scroll.
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
    );

    const reveal = (element: HTMLElement) => {
      element.dataset["revealed"] = "true";
      pending.delete(element);
      observer.unobserve(element);
    };

    const paint = () => {
      frame = 0;

      if (bar) {
        const scrollable = root.scrollHeight - window.innerHeight;
        const ratio = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;

        bar.style.setProperty("--progress", ratio.toFixed(4));
      }

      // An element that was never in view and is now above the viewport produces
      // no intersection callback at all — its ratio is 0 before and after a jump —
      // so skipped sections are swept up here instead of waiting to be observed.
      for (const element of pending) {
        if (element.getBoundingClientRect().bottom < 0) reveal(element);
      }
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(paint);
    };

    const stop = () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    if (reduceMotion) {
      root.dataset["reveal"] = "off";
      paint();

      return stop;
    }

    root.dataset["reveal"] = "on";

    for (const target of document.querySelectorAll<HTMLElement>("[data-reveal]")) {
      if (target === root) continue;
      pending.add(target);
      observer.observe(target);
    }

    // A restored scroll position can leave sections above the viewport before
    // the observer has reported anything.
    paint();

    return () => {
      stop();
      delete root.dataset["reveal"];
    };
  }, []);

  return <div ref={barRef} aria-hidden className="scroll-progress" />;
}
