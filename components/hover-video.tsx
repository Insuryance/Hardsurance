'use client';

export function HoverVideo({ src, label }: { src: string; label: string }) {
  return <video
  autoPlay
  muted
  loop
  playsInline
  preload="metadata"
  aria-label={label}
>
  <source src={src} type="video/mp4" />
</video>;
}
