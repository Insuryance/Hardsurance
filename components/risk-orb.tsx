'use client';

import dynamic from 'next/dynamic';

const PrismBackground = dynamic(
  () =>
    import('./vgpu-prims/prism-background').then(
      (module) => module.PrismBackground
    ),
  { ssr: false }
);

export function RiskOrb() {
  return <PrismBackground />;
}
