'use client';
import {useEffect, useRef, useState} from 'react';

export function CareVideo({src, label, className = '', featured = false, autoPlay = false}: {src: string; label: string; className?: string; featured?: boolean; autoPlay?: boolean}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    const video = ref.current;
    if (!video || (featured && !autoPlay) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) video.play().catch(() => {});
      else video.pause();
    }, {threshold: 0.25});
    observer.observe(video);
    return () => observer.disconnect();
  }, [featured, autoPlay]);
  return <div className={`care-video ${featured ? 'featured-film' : ''} ${className}`}>
    <video ref={ref} poster={src.replace('/films/', '/posters/').replace('.mp4', '.jpg')}
      muted={autoPlay || !featured} loop={autoPlay || !featured} controls={featured} playsInline preload="metadata"
      aria-label={label} onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onEnded={() => setPlaying(false)}>
      <source src={src} type="video/mp4"/>
    </video>
    {(!featured || (!playing && !autoPlay)) && <button className={featured ? 'film-play' : 'video-control'} onClick={() => {
      const video = ref.current;
      if (video) {if (video.paused) video.play().catch(() => {}); else video.pause();}
    }} aria-label={`${playing ? 'Pause' : 'Play'} ${label}`}>
      {featured ? <><span aria-hidden="true">▷</span> Watch the hardware story</> : playing ? 'Ⅱ' : '▷'}
    </button>}
  </div>;
}
