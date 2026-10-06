"use client";

import { useEffect, useRef } from "react";

const INTERACTIVE = "a, button, label, select, summary, [role='button']";
const TEXT_FIELD = "input, textarea";

export default function Effects() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const glow = useRef<HTMLDivElement>(null);
  const progress = useRef<HTMLDivElement>(null);

  // Scroll progress + reveal on scroll (works on every device)
  useEffect(() => {
    const bar = progress.current;
    const onScroll = () => {
      if (!bar) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.transform = `scaleX(${max > 0 ? Math.min(window.scrollY / max, 1) : 0})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  // Custom cursor, pointer glow, card spotlight, magnetic buttons (mouse only)
  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine) return;

    const root = document.documentElement;
    if (!calm) root.classList.add("has-cursor");

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let rx = x;
    let ry = y;
    let gx = x;
    let gy = y;
    let raf = 0;
    let magnet: HTMLElement | null = null;
    let seen = false;

    const release = () => {
      if (magnet) {
        magnet.style.transform = "";
        magnet = null;
      }
    };

    const onMove = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (!seen) {
        seen = true;
        rx = x;
        ry = y;
        gx = x;
        gy = y;
        dot.current?.classList.add("on");
        ring.current?.classList.add("on");
        glow.current?.classList.add("on");
      }

      const target = e.target as Element | null;
      const r = ring.current;
      if (r && target) {
        const text = !!target.closest(TEXT_FIELD);
        const hot = !text && !!target.closest(INTERACTIVE);
        r.classList.toggle("hot", hot);
        r.classList.toggle("text", text);
        dot.current?.classList.toggle("hot", hot || text);
      }

      const spot = target?.closest<HTMLElement>(".spot");
      if (spot) {
        const b = spot.getBoundingClientRect();
        spot.style.setProperty("--mx", `${e.clientX - b.left}px`);
        spot.style.setProperty("--my", `${e.clientY - b.top}px`);
      }

      if (calm) return;
      const m = target?.closest<HTMLElement>("[data-magnetic]") ?? null;
      if (m !== magnet) {
        release();
        magnet = m;
      }
      if (m) {
        const b = m.getBoundingClientRect();
        const dx = (e.clientX - (b.left + b.width / 2)) * 0.3;
        const dy = (e.clientY - (b.top + b.height / 2)) * 0.4;
        m.style.transform = `translate(${dx}px, ${dy}px)`;
      }
    };

    const onDown = () => ring.current?.classList.add("down");
    const onUp = () => ring.current?.classList.remove("down");
    const onLeave = () => {
      dot.current?.classList.remove("on");
      ring.current?.classList.remove("on");
      glow.current?.classList.remove("on");
      seen = false;
      release();
    };

    const tick = () => {
      rx += (x - rx) * 0.16;
      ry += (y - ry) * 0.16;
      gx += (x - gx) * 0.06;
      gy += (y - gy) * 0.06;
      if (dot.current) dot.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      if (ring.current) ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      if (glow.current) glow.current.style.transform = `translate3d(${gx}px, ${gy}px, 0)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    document.documentElement.addEventListener("mouseleave", onLeave);
    if (!calm) raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      root.classList.remove("has-cursor");
      release();
    };
  }, []);

  return (
    <>
      <div ref={progress} className="progress" aria-hidden />
      <div ref={glow} className="pointer-glow" aria-hidden />
      <div ref={ring} className="cursor-ring" aria-hidden />
      <div ref={dot} className="cursor-dot" aria-hidden />
    </>
  );
}
