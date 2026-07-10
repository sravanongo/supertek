import { useEffect, useRef } from "react";

/** Floating particles canvas — soft sparkle, lightweight */
export function Particles({ className = "", count = 28 }: { className?: string; count?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf = 0;
    const dpr = window.devicePixelRatio || 1;
    const resize = () => {
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
    };
    resize();
    window.addEventListener("resize", resize);
    const parts = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.1 * dpr + 0.3 * dpr,
      vx: (Math.random() - 0.5) * 0.1 * dpr,
      vy: (Math.random() - 0.5) * 0.1 * dpr,
      a: Math.random() * 0.3 + 0.12,
    }));
    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of parts) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `oklch(0.85 0.17 70 / ${p.a})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [count]);
  return <canvas ref={ref} className={`pointer-events-none w-full h-full ${className}`} />;
}

export function Aurora() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-48 -left-24 w-[44rem] h-[44rem] rounded-full bg-accent/20 blur-[140px] animate-[aurora_20s_ease-in-out_infinite_alternate]" />
      <div className="absolute top-10 -right-48 w-[40rem] h-[40rem] rounded-full bg-[oklch(0.55_0.2_280/0.18)] blur-[140px] animate-[aurora_26s_ease-in-out_infinite_alternate_reverse]" />
      <div className="absolute -bottom-32 left-1/4 w-[32rem] h-[32rem] rounded-full bg-[oklch(0.6_0.18_200/0.12)] blur-[120px] animate-[aurora_30s_ease-in-out_infinite_alternate]" />
    </div>
  );
}

export function HeroVignette() {
  return <div className="pointer-events-none absolute inset-0 hero-vignette" />;
}
