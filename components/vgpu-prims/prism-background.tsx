'use client';

import { useEffect, useRef, useState } from 'react';
import { createRenderer, type PrismRenderer } from './renderer';
import { DEFAULT_PRISM_CONTROLS } from './types';

/**
 * The production vGPU prism renderer, reduced to the single dark-mode path
 * used by Hardsurance. The underlying optical simulation and shaders are from
 * the MIT-licensed vercel-labs/vgpu prism example.
 */
export function PrismBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rendererRef = useRef<PrismRenderer | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const hero = canvas.closest<HTMLElement>('[data-hero-theme]');
    const framingElement = hero?.querySelector<HTMLElement>(
      '[data-triangle-container]'
    );

    const renderer = createRenderer({
      canvas,
      framingElement: framingElement ?? undefined,
      initialMode: 'dark',
      initialQuality: 'auto',
      initialControls: {
        ...DEFAULT_PRISM_CONTROLS,
        wallColor: '#050606',
      },
      debugPreviews: false,
      performanceSampling: false,
      onError(error) {
        console.error('The interactive prism could not initialize.', error);
        setFailed(true);
      },
    });

    rendererRef.current = renderer;

    return () => {
      rendererRef.current = null;
      renderer.dispose();
    };
  }, []);

  return (
    <div className={`hero-prism-canvas${failed ? ' is-fallback' : ''}`}>
      <canvas ref={canvasRef} aria-hidden="true" />
      {failed ? (
        <div className="prism-unsupported" role="img" aria-label="Glass risk prism">
          <span />
        </div>
      ) : null}
    </div>
  );
}
