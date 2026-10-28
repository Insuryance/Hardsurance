'use client';

import { useEffect } from 'react';

export function AmbientCursor() {
  useEffect(() => {
    const root = document.documentElement;
    let frame = 0;

    const move = (event: PointerEvent) => {
      cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        root.style.setProperty('--cursor-x', `${event.clientX}px`);
        root.style.setProperty('--cursor-y', `${event.clientY}px`);
      });
    };

    window.addEventListener('pointermove', move, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', move);
    };
  }, []);

  return <div className="ambient-cursor" aria-hidden="true" />;
}
