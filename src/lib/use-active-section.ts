import { useCallback, useEffect, useState } from "react";

export const HOME_SECTION_IDS = ["about", "services", "why", "contact"] as const;

function getHeaderHeight() {
  return document.querySelector("header")?.getBoundingClientRect().height ?? 80;
}

function detectActiveSection(): string | null {
  const headerHeight = getHeaderHeight();
  const scrollY = window.scrollY;

  if (scrollY < headerHeight * 0.75) {
    return null;
  }

  const marker = scrollY + headerHeight + 32;
  let current: string | null = null;

  for (const id of HOME_SECTION_IDS) {
    const el = document.getElementById(id);
    if (!el) continue;
    const sectionTop = el.getBoundingClientRect().top + scrollY;
    if (sectionTop <= marker) {
      current = id;
    }
  }

  const atBottom = window.innerHeight + scrollY >= document.documentElement.scrollHeight - 4;
  if (atBottom) {
    return HOME_SECTION_IDS[HOME_SECTION_IDS.length - 1];
  }

  return current;
}

/** Tracks which home-page section is in view. Returns null when hero/top is active. */
export function useActiveSection(enabled: boolean) {
  const [detected, setDetected] = useState<string | null>(null);
  const [manual, setManual] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled) {
      setDetected(null);
      setManual(null);
      return;
    }

    let frame = 0;
    const update = () => {
      setDetected(detectActiveSection());
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [enabled]);

  useEffect(() => {
    if (!manual) return;
    if (detected === manual) {
      setManual(null);
      return;
    }
    const timer = window.setTimeout(() => setManual(null), 1200);
    return () => window.clearTimeout(timer);
  }, [manual, detected]);

  const setActiveSection = useCallback((sectionId: string | null) => {
    setManual(sectionId);
  }, []);

  return {
    activeSection: manual ?? detected,
    setActiveSection,
  };
}
