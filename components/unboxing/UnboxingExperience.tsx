'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BackgroundProps {
  img?: string;
  gFrom?: string;
  gVia?: string;
  gTo?: string;
}

interface UnboxingProps {
  monogram: string;
  onUnsealed: () => void;
  children: React.ReactNode;
  background?: BackgroundProps;
}

export const UnboxingExperience: React.FC<UnboxingProps> = ({ monogram, onUnsealed, children }) => {
  const [opened, setOpened] = useState(false);

  const handleOpen = () => {
    setOpened(true);
    setTimeout(() => {
      onUnsealed();
    }, 800);
  };

  return (
    <div className="relative w-full min-h-screen">
      <AnimatePresence>
        {!opened && (
          <motion.div
            key="envelope"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="bg-section fixed inset-0 z-50 flex flex-col items-center justify-center px-6 text-center"
            data-bg-img={background?.img ?? undefined}
            data-g-from={background?.gFrom ?? undefined}
            data-g-via={background?.gVia ?? undefined}
            data-g-to={background?.gTo ?? undefined}
          >
            {/* Elegant Background Glow */}
            <div className="absolute w-[300px] h-[300px] bg-[#3B1C23]/40 rounded-full blur-3xl pointer-events-none" />

            {/* Envelope Frame */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-sm p-8 rounded-2xl bg-[#1A1817] border border-[#C5A059]/30 shadow-2xl flex flex-col items-center justify-center space-y-6"
            >
              <div className="text-[#C5A059] text-xs font-serif tracking-[0.3em] uppercase">
                Royal Invitation
              </div>

              {/* Interactive Wax Seal */}
              <motion.button
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleOpen}
                className="w-24 h-24 rounded-full border-2 border-[#C5A059] flex items-center justify-center shadow-xl cursor-pointer group relative overflow-hidden dynamic-bg"
                style={{ ['--g-from' as any]: '#3B1C23', ['--g-via' as any]: '#522530', ['--g-to' as any]: '#250E13', ['--paper-dot' as any]: '#C5A059', ['--paper-bg' as any]: '#1A1817' }}
              >
                <div className="absolute inset-0 bg-[#C5A059]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="font-serif text-2xl font-bold tracking-widest text-[#C5A059]">
                  {monogram}
                </span>
              </motion.button>

              <p className="text-xs font-serif tracking-widest uppercase text-[#FDFBF7]/60">
                Tap Seal To Open
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {children}
    </div>
  );
};