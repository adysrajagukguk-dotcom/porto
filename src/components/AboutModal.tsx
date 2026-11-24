import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, Check, Sparkles, MapPin, ExternalLink } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  isAdmin?: boolean;
  onOpenStudio?: () => void;
  onRequestAdmin?: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({
  isOpen,
  onClose,
  isAdmin = false,
  onOpenStudio,
  onRequestAdmin,
}) => {
  const [copied, setCopied] = useState(false);
  const email = 'gladysbrajagukguk@gmail.com';
  const [avatarTaps, setAvatarTaps] = useState(0);

  const handleAvatarTap = () => {
    const next = avatarTaps + 1;
    if (next >= 4) {
      setAvatarTaps(0);
      if (onRequestAdmin) onRequestAdmin();
    } else {
      setAvatarTaps(next);
      setTimeout(() => setAvatarTaps(0), 1500);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#060D1E]/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md bg-[#0E1B38] border border-white/10 rounded-3xl p-6 sm:p-7 shadow-2xl text-white overflow-hidden"
          >
            {/* Ambient subtle glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

            {/* Header */}
            <div className="flex items-center justify-between mb-5 relative z-10">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-sky-400 tracking-widest uppercase">
                  Creator Profile
                </span>
              </div>
              <button
                onClick={onClose}
                aria-label="Close dialog"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-5">
                <div
                  onClick={handleAvatarTap}
                  className="relative w-16 h-16 rounded-2xl overflow-hidden ring-2 ring-white/10 flex-shrink-0 bg-slate-800 cursor-pointer active:scale-95 transition-transform"
                  title="through.adys"
                >
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop"
                    alt="Gladys / through.adys"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-white">Gladys Brajagukguk</h3>
                  <p className="text-xs text-sky-300/80 font-medium mt-0.5">
                    Digital Business · Politeknik International Bali
                  </p>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-1.5">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    <span>Bali & Jakarta, Indonesia</span>
                  </div>
                </div>
              </div>

              <p className="text-xs leading-relaxed text-slate-300 mb-5 font-light">
                A student of Digital Business at Politeknik International Bali with a strong passion
                for visual design, content creation, and digital media. Experienced in creating
                engaging content and developing creative concepts through various projects. Currently
                expanding skills in UI/UX design and digital product development, with an interest in
                building meaningful and user-centered digital experiences.
              </p>

              {/* Disciplines */}
              <div className="mb-6">
                <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Specializations
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-200">
                  <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/5 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                    <span>Brand Strategy</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/5 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <span>UI/UX Architecture</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/5 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                    <span>Digital Systems</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/5 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                    <span>Editorial Media</span>
                  </div>
                </div>
              </div>

              {/* Email Contact CTA */}
              <div className="p-3 rounded-2xl bg-white/[0.06] border border-white/10 flex items-center justify-between gap-3">
                <div className="min-w-0 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] text-slate-400 uppercase font-mono tracking-wide">
                      Get In Touch
                    </p>
                    <p className="text-xs text-white font-medium truncate">{email}</p>
                  </div>
                </div>
                <button
                  onClick={copyEmail}
                  className="flex-shrink-0 px-3 py-1.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-[#0B1630] font-semibold text-xs flex items-center gap-1.5 transition-colors shadow-sm"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <span>Copy</span>
                  )}
                </button>
              </div>

              {/* Studio Launcher (Owner Only) */}
              {isAdmin && onOpenStudio && (
                <div className="mt-4 pt-3 border-t border-white/5 flex justify-center">
                  <button
                    onClick={() => {
                      onClose();
                      onOpenStudio();
                    }}
                    className="text-[11px] font-mono text-sky-400 hover:text-sky-300 transition-colors flex items-center gap-1.5"
                  >
                    <span>Buka Content Studio (Owner Mode) →</span>
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

