"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import type Lenis from "lenis";

const SmoothScrollContext = createContext<Lenis | null>(null);

export default function LenisScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);
  const rafRef = useRef<number | null>(null);
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    let mounted = true;

    async function init() {
      const { default: LenisClass } = await import("lenis");
      if (!mounted) return;

      lenisRef.current = new LenisClass({
        duration: 1.1,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        syncTouch: false,
        touchMultiplier: 1.5,
        anchors: true,
      });

      setLenis(lenisRef.current);

      const loop = (time: number) => {
        lenisRef.current?.raf(time);
        rafRef.current = requestAnimationFrame(loop);
      };

      rafRef.current = requestAnimationFrame(loop);
    }

    init();

    return () => {
      mounted = false;
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      try {
        lenisRef.current?.destroy();
      } catch {
        // ignore
      }
      lenisRef.current = null;
      setLenis(null);
    };
  }, []);

  return (
    <SmoothScrollContext.Provider value={lenis}>
      {children}
    </SmoothScrollContext.Provider>
  );
}

export function useLenis() {
  return useContext(SmoothScrollContext);
}
