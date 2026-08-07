'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ThankYouProps {
  monogram: string;
  hashtag: string;
  onOpenRsvp: () => void;
}

export const ThankYou: React.FC<ThankYouProps> = ({ monogram, hashtag, onOpenRsvp }) => {
  return (
    <section className="py-28 px-6 bg-[#FDFBF7] text-[#121110] relative text-center overflow-hidden">
      <div className="max-w-xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <button
            type="button"
            onClick={onOpenRsvp}
            className="px-8 py-4 rounded-full bg-[#3B1C23] text-[#FDFBF7] font-serif text-xs tracking-[0.25em] uppercase hover:bg-[#250E13] transition-colors duration-300 shadow-lg cursor-pointer active:scale-95 border border-[#C5A059]/40"
          >
            Confirm Your Attendance
          </button>
        </motion.div>

        <div className="w-16 h-16 rounded-full border border-[#C5A059]/40 flex items-center justify-center bg-[#3B1C23]/5 mx-auto mb-6 shadow-xs">
          <span className="font-serif text-base text-[#3B1C23] font-semibold tracking-widest">
            {monogram}
          </span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#121110] mb-3">
          We Look Forward To Celebrating With You
        </h2>

        <p className="font-serif text-xs tracking-[0.25em] uppercase text-[#3B1C23] mb-8">
          {hashtag}
        </p>

        <div className="w-12 h-[1px] bg-[#C5A059] mx-auto" />
      </div>
    </section>
  );
};