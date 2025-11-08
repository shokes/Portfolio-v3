import Lenis from '@studio-freight/lenis';
import { useAnimationFrame } from 'framer-motion';
import React, { useContext, createContext, useState, useEffect } from 'react';

const LenisContext = createContext<Lenis | null>(null);

export const LenisProvider = ({ children }: { children: React.ReactNode }) => {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      touchMultiplier: 1.3,
    });

    setLenis(lenis);

    return () => {
      lenis.destroy();
    };
  }, []);

  useAnimationFrame((time) => {
    lenis?.raf(time);
  });

  return <LenisContext.Provider value={lenis}> {children} </LenisContext.Provider>;
};

export const useLenis = () => {
  const lenis = useContext(LenisContext);

  if (lenis === undefined) {
    throw new Error('useLenis must be used within a LenisProvider');
  }

  return lenis;
};
