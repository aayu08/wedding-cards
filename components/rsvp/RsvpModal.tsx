'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface RsvpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RsvpModal: React.FC<RsvpModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    guests: '1',
    attendance: 'attending',
    dietary: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-xs"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-[#1A1817] text-[#FDFBF7] p-8 rounded-2xl border border-[#C5A059]/30 shadow-2xl z-10 overflow-hidden"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-[#FDFBF7]/50 hover:text-[#C5A059] transition-colors"
            >
              <X size={20} />
            </button>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="text-center">
                  <span className="font-serif text-xs tracking-[0.3em] uppercase text-[#C5A059]">
                    RSVP
                  </span>
                  <h3 className="font-serif text-2xl font-normal mt-1">Confirm Attendance</h3>
                  <div className="w-8 h-[1px] bg-[#C5A059]/40 mx-auto mt-2" />
                </div>

                <div className="space-y-4 text-left">
                  <div>
                    <label className="block text-xs font-serif tracking-widest uppercase text-[#C5A059] mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rajesh Sharma"
                      className="w-full px-4 py-3 rounded-lg bg-[#121110] border border-[#C5A059]/20 text-xs text-[#FDFBF7] focus:outline-hidden focus:border-[#C5A059]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-serif tracking-widest uppercase text-[#C5A059] mb-2">
                        Number of Guests
                      </label>
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-[#121110] border border-[#C5A059]/20 text-xs text-[#FDFBF7] focus:outline-hidden focus:border-[#C5A059]"
                      >
                        {[1, 2, 3, 4, 5].map((n) => (
                          <option key={n} value={n}>
                            {n} {n === 1 ? 'Guest' : 'Guests'}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-serif tracking-widest uppercase text-[#C5A059] mb-2">
                        Attendance
                      </label>
                      <select
                        value={formData.attendance}
                        onChange={(e) => setFormData({ ...formData, attendance: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-[#121110] border border-[#C5A059]/20 text-xs text-[#FDFBF7] focus:outline-hidden focus:border-[#C5A059]"
                      >
                        <option value="attending">Joyfully Accept</option>
                        <option value="declining">Regretfully Decline</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-serif tracking-widest uppercase text-[#C5A059] mb-2">
                      Dietary Restrictions / Notes
                    </label>
                    <input
                      type="text"
                      value={formData.dietary}
                      onChange={(e) => setFormData({ ...formData, dietary: e.target.value })}
                      placeholder="e.g. Vegetarian, Jain, etc."
                      className="w-full px-4 py-3 rounded-lg bg-[#121110] border border-[#C5A059]/20 text-xs text-[#FDFBF7] focus:outline-hidden focus:border-[#C5A059]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-[#3B1C23] text-[#FDFBF7] font-serif text-xs tracking-[0.25em] uppercase hover:bg-[#250E13] border border-[#C5A059]/40 transition-colors cursor-pointer"
                >
                  Send Confirmation
                </button>
              </form>
            ) : (
              <div className="text-center py-8 space-y-4">
                <div className="w-12 h-12 rounded-full border border-[#C5A059] flex items-center justify-center mx-auto text-[#C5A059]">
                  ✓
                </div>
                <h3 className="font-serif text-2xl font-normal text-[#FDFBF7]">Thank You!</h3>
                <p className="text-xs text-[#FDFBF7]/70 font-sans">
                  Your response has been recorded. We can&apos;t wait to celebrate with you in Dharamshala!
                </p>
                <button
                  onClick={handleReset}
                  className="mt-4 px-6 py-2 rounded-full border border-[#C5A059]/40 text-xs font-serif uppercase text-[#C5A059]"
                >
                  Close
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};