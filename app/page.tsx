'use client';

import React, { useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { weddingData } from '@/data/weddingData';
import { UnboxingExperience } from '@/components/unboxing/UnboxingExperience';
import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider';
import { HeroSection } from '@/components/hero/HeroSection';
import { OurStory } from '@/components/sections/OurStory';
import { Celebrations } from '@/components/sections/Celebrations';
import { DressCode } from '@/components/sections/DressCode';
import { Venue } from '@/components/sections/Venue';
import { Gallery } from '@/components/sections/Gallery';
import { ThankYou } from '@/components/sections/ThankYou';

const RsvpModal = dynamic(
  () => import('@/components/rsvp/RsvpModal').then((mod) => mod.RsvpModal),
  { ssr: false }
);

export default function WeddingInvitationPage() {
  const [isUnsealed, setIsUnsealed] = useState(false);
  const [isRsvpOpen, setIsRsvpOpen] = useState(false);

  const handleUnsealed = useCallback(() => {
    setIsUnsealed(true);
  }, []);

  const handleOpenRsvp = useCallback(() => {
    setIsRsvpOpen(true);
  }, []);

  const handleCloseRsvp = useCallback(() => {
    setIsRsvpOpen(false);
  }, []);

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      <UnboxingExperience monogram={weddingData.monogram} onUnsealed={handleUnsealed}>
        {isUnsealed && (
          <SmoothScrollProvider>
            <div className="relative w-full">
              <HeroSection config={weddingData} />
              <OurStory />
              <Celebrations events={weddingData.events} />
              <DressCode />
              <Venue mapUrl={weddingData.events[0].mapUrl} />
              <Gallery items={weddingData.galleryPlaceholders} />
              <ThankYou
                monogram={weddingData.monogram}
                hashtag={weddingData.hashtag}
                onOpenRsvp={handleOpenRsvp}
              />
            </div>
          </SmoothScrollProvider>
        )}
      </UnboxingExperience>

      <RsvpModal isOpen={isRsvpOpen} onClose={handleCloseRsvp} />
    </main>
  );
}