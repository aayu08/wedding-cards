'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const OurStory: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-[#FDFBF7] text-[#121110] relative overflow-hidden">
      <div className="max-w-xl mx-auto text-center">
        <span className="font-serif text-xs tracking-[0.3em] uppercase text-[#3B1C23]/80">
          The Beginning
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#121110] font-normal mt-2 tracking-tight">
          Our Story
        </h2>
        <div className="w-10 h-[1px] bg-[#C5A059] mx-auto mt-4 mb-10" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-[#121110]/[0.015] p-8 sm:p-10 rounded-2xl border border-[#C5A059]/20 shadow-xs"
        >
          <p className="text-sm sm:text-base text-[#121110]/85 leading-relaxed font-sans text-left">
            <span className="float-left font-serif text-5xl leading-none text-[#3B1C23] pr-3 pt-1 font-normal">
              F
            </span>
            rom quiet walks among cedar-lined trails to shared dreams framed by the Dhauladhar peaks, our journey has been a gentle unfolding of companionship. We invite you to be part of the chapter where two traditions join in celebration.
          </p>

          <div className="mt-8 flex items-center justify-center space-x-3">
            <div className="w-12 h-[1px] bg-[#C5A059]/40" />
            <span className="font-serif text-xs text-[#C5A059] tracking-widest uppercase font-semibold">
              Aayush & Anjali
            </span>
            <div className="w-12 h-[1px] bg-[#C5A059]/40" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};