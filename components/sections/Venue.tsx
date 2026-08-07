'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const Venue: React.FC<{ mapUrl: string }> = ({ mapUrl }) => {
  return (
    <section className="py-24 px-6 bg-[#121110] text-[#FDFBF7]">
      <div className="max-w-xl mx-auto text-center">
        <span className="font-serif text-xs tracking-[0.3em] uppercase text-[#C5A059]">
          Destination
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-2">
          The Venue
        </h2>
        <div className="w-10 h-[1px] bg-[#C5A059]/50 mx-auto mt-4 mb-10" />

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl bg-[#1A1817] border border-[#C5A059]/20 space-y-6"
        >
          <h3 className="font-serif text-2xl font-normal text-[#FDFBF7]">
            Palampur, Himachal Pradesh
          </h3>
          <p className="text-xs text-[#FDFBF7]/70 leading-relaxed max-w-md mx-auto">
            Nestled in the shadows of the majestic Dhauladhar ranges, offering breathtaking mountain views and serene cedar air.
          </p>

          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-full border border-[#C5A059] text-[#C5A059] font-serif text-xs tracking-widest uppercase hover:bg-[#C5A059] hover:text-[#121110] transition-all duration-300"
          >
            Open in Google Maps
          </a>
        </motion.div>
      </div>
    </section>
  );
};