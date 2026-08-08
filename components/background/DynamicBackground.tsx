'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionBackground } from '@/data/weddingData';

interface DynamicBackgroundProps {
  activeSection: string;
  backgrounds: Record<string, SectionBackground>;
}

export const DynamicBackground: React.FC<DynamicBackgroundProps> = ({
  activeSection,
  backgrounds,
}) => {
  const currentBg = backgrounds[activeSection] || backgrounds['hero'];

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#121110]">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentBg.sectionId}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${currentBg.imageUrl}')` }}
        />
      </AnimatePresence>

      {/* Royal Dark Gradient & Vignette Overlays for Maximum Text Legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#121110]/85 via-[#121110]/75 to-[#121110]/90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#121110_80%)] opacity-80" />
    </div>
  );
};