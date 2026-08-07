'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const DressCode: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-[#FDFBF7] text-[#121110]">
      <div className="max-w-xl mx-auto text-center">
        <span className="font-serif text-xs tracking-[0.3em] uppercase text-[#3B1C23]">
          Attire Guidelines
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-2">
          Dress Code
        </h2>
        <div className="w-10 h-[1px] bg-[#C5A059] mx-auto mt-4 mb-10" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-6"
        >
          <div className="p-6 rounded-xl bg-[#121110]/[0.02] border border-[#C5A059]/20">
            <h3 className="font-serif text-lg font-normal mb-2 text-[#3B1C23]">Day 1 — Sangeet</h3>
            <p className="text-xs text-[#121110]/70 leading-relaxed font-sans">
              Royal Velvets, Rich Emeralds & Deep Wine hues. Modern Indo-Western silhouette.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#121110]/[0.02] border border-[#C5A059]/20">
            <h3 className="font-serif text-lg font-normal mb-2 text-[#3B1C23]">Day 2 — Wedding</h3>
            <p className="text-xs text-[#121110]/70 leading-relaxed font-sans">
              Traditional Himachali attire, Pashmina accents, and Soft Gold & Maroon traditional ethnic wear.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};