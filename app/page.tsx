'use client';

import React, { useState, useEffect, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { weddingData } from '@/data/weddingData';
import { UnboxingExperience } from '@/components/unboxing/UnboxingExperience';
import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider';
import { DynamicBackground } from '@/components/background/Dynamicbackground';
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
  const [activeSection, setActiveSection] = useState('hero');

  const handleUnsealed = useCallback(() => {
    setIsUnsealed(true);
  }, []);

  const handleOpenRsvp = useCallback(() => {
    setIsRsvpOpen(true);
  }, []);

  const handleCloseRsvp = useCallback(() => {
    setIsRsvpOpen(false);
  }, []);

  // IntersectionObserver to detect which section is currently in view
  useEffect(() => {
    if (!isUnsealed) return;

    const sections = document.querySelectorAll<HTMLElement>('[data-section-id]');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute('data-section-id');
            if (sectionId) {
              setActiveSection(sectionId);
            }
          }
        });
      },
      {
        threshold: 0.35, // Trigger background change when 35% of section is visible
      }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, [isUnsealed]);

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#121110]">
      <UnboxingExperience monogram={weddingData.monogram} onUnsealed={handleUnsealed}>
        {isUnsealed && (
          <SmoothScrollProvider>
            {/* Fixed Crossfading Background Layer */}
            <DynamicBackground
              activeSection={activeSection}
              backgrounds={weddingData.sectionBackgrounds}
            />

            {/* Foreground Scrollable Content */}
            <div className="relative z-10 w-full">
              <div data-section-id="hero">
                <HeroSection config={weddingData} />
              </div>

              <div data-section-id="story">
                <OurStory />
              </div>

              <div data-section-id="celebrations">
                <Celebrations events={weddingData.events} />
              </div>

              <div data-section-id="dresscode">
                <DressCode />
              </div>

              <div data-section-id="venue">
                <Venue mapUrl={weddingData.events[0].mapUrl} />
              </div>

              <div data-section-id="gallery">
                <Gallery items={weddingData.galleryPlaceholders} />
              </div>

              <div data-section-id="thankyou">
                <ThankYou
                  monogram={weddingData.monogram}
                  hashtag={weddingData.hashtag}
                  onOpenRsvp={handleOpenRsvp}
                />
              </div>
            </div>
          </SmoothScrollProvider>
        )}
      </UnboxingExperience>

      <RsvpModal isOpen={isRsvpOpen} onClose={handleCloseRsvp} />
    </main>
  );
}