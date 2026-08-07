'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface GalleryProps {
  items: Array<{ id: string; aspect: 'portrait' | 'landscape' | 'square' }>;
}

export const Gallery: React.FC<GalleryProps> = ({ items }) => {
  return (
    <section className="py-24 px-6 bg-[#121110] text-[#FDFBF7] relative overflow-hidden">
      <div className="max-w-xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="font-serif text-xs tracking-[0.3em] uppercase text-[#C5A059]">
            Moments
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#FDFBF7] font-normal mt-2 tracking-tight">
            Memories
          </h2>
          <div className="w-10 h-[1px] bg-[#C5A059]/50 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          {items.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className={`relative rounded-xl bg-[#1A1817] border border-[#C5A059]/20 overflow-hidden group ${
                item.aspect === 'landscape' ? 'col-span-2 aspect-[16/9]' : 'aspect-[4/5]'
              }`}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center border border-[#C5A059]/10 rounded-xl transition-all duration-500 group-hover:border-[#C5A059]/40">
                <div className="w-8 h-8 rounded-full border border-[#C5A059]/30 flex items-center justify-center mb-2 bg-[#3B1C23]/20">
                  <span className="font-serif text-[10px] text-[#C5A059]">0{idx + 1}</span>
                </div>
                <span className="font-serif text-[10px] tracking-widest uppercase text-[#FDFBF7]/40">
                  Placeholder Image
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};