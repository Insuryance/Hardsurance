'use client';

export function HoverVideo({ src, label }: { src: string; label: string }) {
  return <video muted loop playsInline preload="metadata" aria-label={label} onMouseEnter={(event) => event.currentTarget.play()} onMouseLeave={(event) => { event.currentTarget.pause(); event.currentTarget.currentTime = 0; }} onFocus={(event) => event.currentTarget.play()} onBlur={(event) => event.currentTarget.pause()}><source src={src} type="video/mp4" /></video>;
}
