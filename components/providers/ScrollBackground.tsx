'use client';

import React, { useEffect, useRef, useState } from 'react';

interface BgConfig {
  id: string;
  img?: string | null;
  gFrom?: string;
  gVia?: string;
  gTo?: string;
}

export const ScrollBackground: React.FC = () => {
  const layerARef = useRef<HTMLDivElement | null>(null);
  const layerBRef = useRef<HTMLDivElement | null>(null);
  const activeIndex = useRef<number>(0);
  const [initialized, setInitialized] = useState(false);

  // helper to build CSS background string from config
  const buildBg = (cfg: BgConfig) => {
    const from = cfg.gFrom || 'transparent';
    const via = cfg.gVia ? `, ${cfg.gVia}` : '';
    const to = cfg.gTo || 'transparent';
    const gradient = `linear-gradient(135deg, ${from}${via}, ${to})`;
    const imgPart = cfg.img ? `, url(${cfg.img})` : '';
    return { backgroundImage: `${gradient}${imgPart}`, backgroundSize: cfg.img ? 'cover, cover' : 'cover', backgroundPosition: 'center, center' } as React.CSSProperties;
  };

  useEffect(() => {
    const layers = [layerARef.current, layerBRef.current];
    // initialize layers hidden
    layers.forEach((l) => {
      if (l) {
        l.style.opacity = '0';
      }
    });

    const sections = Array.from(document.querySelectorAll<HTMLElement>('.bg-section'));
    if (!sections.length) {
      // nothing to observe
      return;
    }

    const setLayer = (el: HTMLElement | null) => {
      if (!el) return;
      const cfg: BgConfig = {
        id: el.dataset.bgId || el.id || 'section',
        img: el.dataset.bgImg || null,
        gFrom: el.dataset.gFrom || undefined,
        gVia: el.dataset.gVia || undefined,
        gTo: el.dataset.gTo || undefined,
      };

      const nextIndex = 1 - activeIndex.current;
      const nextLayer = layers[nextIndex];
      const prevLayer = layers[activeIndex.current];
      if (!nextLayer || !prevLayer) return;

      // apply styles to next layer
      const bgStyle = buildBg(cfg);
      Object.assign(nextLayer.style, bgStyle as any);

      // bring next layer to visible
      nextLayer.style.transition = 'opacity 800ms ease-in-out';
      prevLayer.style.transition = 'opacity 800ms ease-in-out';
      nextLayer.style.opacity = '1';
      prevLayer.style.opacity = '0';

      activeIndex.current = nextIndex;
    };

    // IntersectionObserver to pick most visible section
    let lastVisible: HTMLElement | null = null;
    const observer = new IntersectionObserver(
      (entries) => {
        // pick the entry with largest intersectionRatio that's intersecting
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          const el = visible.target as HTMLElement;
          if (el !== lastVisible) {
            lastVisible = el;
            setLayer(el);
          }
        }
      },
      { threshold: [0.25, 0.5, 0.75] }
    );

    sections.forEach((s) => observer.observe(s));

    // set initial bg to the first visible (or first section)
    const first = sections[0];
    setTimeout(() => {
      setLayer(first);
      setInitialized(true);
    }, 50);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <div ref={layerARef} className="scroll-bg-layer absolute inset-0" style={{ opacity: 0 }} />
      <div ref={layerBRef} className="scroll-bg-layer absolute inset-0" style={{ opacity: 0 }} />

      <style jsx>{`
        .scroll-bg-layer {
          transition: opacity 800ms ease-in-out;
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          will-change: opacity, background-image;
          filter: saturate(1) brightness(0.95);
        }
      `}</style>
    </div>
  );
};

export default ScrollBackground;
