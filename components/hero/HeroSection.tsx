'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { WeddingData } from '@/data/weddingData';

export const HeroSection: React.FC<{ config: WeddingData }> = ({ config }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date(config.targetDate).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [config.targetDate]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-between py-20 px-6 bg-[#121110] text-[#FDFBF7] overflow-hidden text-center">
      {/* Background Vector Graphic (Mountains Silhouette) */}
      <div className="absolute inset-0 pointer-events-none opacity-20 flex items-end">
        <svg viewBox="0 0 1440 320" className="w-full h-auto fill-[#C5A059]">
          <path d="M0,224L120,202.7C240,181,480,139,720,160C960,181,1200,267,1320,309.3L1440,352L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
        </svg>
      </div>

      {/* Header Monogram */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-12 h-12 rounded-full border border-[#C5A059]/40 flex items-center justify-center bg-[#3B1C23]/20"
      >
        <span className="font-serif text-sm tracking-widest text-[#C5A059]">{config.monogram}</span>
      </motion.div>

      {/* Main Title Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="space-y-4 max-w-xl my-auto"
      >
        <span className="font-serif text-xs tracking-[0.3em] uppercase text-[#C5A059]">
          Together With Their Families
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl tracking-tight text-[#FDFBF7] font-normal">
          {config.coupleNames}
        </h1>
        <p className="font-serif text-sm tracking-[0.2em] uppercase text-[#FDFBF7]/80">
          {config.dateString} • {config.location}
        </p>
      </motion.div>

      {/* Countdown Timer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="grid grid-cols-4 gap-4 max-w-xs w-full pt-8 border-t border-[#C5A059]/20"
      >
        {[
          { label: 'Days', val: timeLeft.days },
          { label: 'Hours', val: timeLeft.hours },
          { label: 'Mins', val: timeLeft.minutes },
          { label: 'Secs', val: timeLeft.seconds },
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center">
            <span className="font-serif text-xl sm:text-2xl text-[#C5A059] font-normal">
              {item.val < 10 ? `0${item.val}` : item.val}
            </span>
            <span className="text-[10px] tracking-widest uppercase text-[#FDFBF7]/50 font-serif">
              {item.label}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
};