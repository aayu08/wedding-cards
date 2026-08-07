'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { EventItem } from '@/data/weddingData';

export const Celebrations: React.FC<{ events: EventItem[] }> = ({ events }) => {
  return (
    <section className="py-24 px-6 bg-[#121110] text-[#FDFBF7]">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-serif text-xs tracking-[0.3em] uppercase text-[#C5A059]">
            Itinerary
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-2">
            The Celebrations
          </h2>
          <div className="w-10 h-[1px] bg-[#C5A059]/50 mx-auto mt-4" />
        </div>

        <div className="space-y-12">
          {events.map((evt, idx) => (
            <motion.div
              key={evt.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="p-8 rounded-2xl bg-[#1A1817] border border-[#C5A059]/20 relative"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="font-serif text-xs tracking-widest uppercase text-[#C5A059]">
                  0{idx + 1} • {evt.date}
                </span>
                <span className="text-xs font-serif text-[#FDFBF7]/60">{evt.time}</span>
              </div>

              <h3 className="font-serif text-2xl font-normal mb-2 text-[#FDFBF7]">{evt.title}</h3>
              <p className="text-xs text-[#FDFBF7]/70 font-sans mb-4">{evt.venue} — {evt.address}</p>

              <div className="pt-4 border-t border-[#C5A059]/10 flex items-center justify-between text-xs font-serif text-[#C5A059]">
                <span>Dress Code:</span>
                <span className="text-[#FDFBF7]/80">{evt.dressCode}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};