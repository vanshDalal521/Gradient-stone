"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const mainRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const visibleRef = useRef(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");
    if (!mediaQuery.matches) return;

    const mainEl = mainRef.current;
    const trailEl = trailRef.current;
    if (!mainEl || !trailEl) return;

    const handleMouseMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
      if (!visibleRef.current) {
        visibleRef.current = true;
        mainEl.style.opacity = "1";
        trailEl.style.opacity = "1";
      }
    };

    const handleMouseLeave = () => {
      visibleRef.current = false;
      mainEl.style.opacity = "0";
      trailEl.style.opacity = "0";
    };

    const animate = () => {
      const lerp = 0.08;
      currentRef.current.x += (targetRef.current.x - currentRef.current.x) * lerp;
      currentRef.current.y += (targetRef.current.y - currentRef.current.y) * lerp;

      mainEl.style.setProperty("--cx", `${targetRef.current.x}px`);
      mainEl.style.setProperty("--cy", `${targetRef.current.y}px`);
      trailEl.style.setProperty("--cx", `${currentRef.current.x}px`);
      trailEl.style.setProperty("--cy", `${currentRef.current.y}px`);

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      <div
        ref={mainRef}
        className="cursor-glow-overlay"
        style={{ opacity: 0, willChange: "transform" }}
      />
      <div
        ref={trailRef}
        className="cursor-glow-overlay cursor-glow-trail"
        style={{ opacity: 0, willChange: "transform" }}
      />
    </>
  );
}
