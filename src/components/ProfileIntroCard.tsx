import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ProfileInfo } from '../types/portfolio';
import { ImageWithFallback } from './ImageWithFallback';
import {
  GraduationCap,
  MapPin,
  Mail,
  Check,
  Sparkles,
  ArrowDown,
  Layers,
} from 'lucide-react';

interface ProfileIntroCardProps {
  profile: ProfileInfo;
  onScrollToExplore?: () => void;
  onAvatarTap?: () => void;
}

export const ProfileIntroCard: React.FC<ProfileIntroCardProps> = ({
  profile,
  onScrollToExplore,
  onAvatarTap,
}) => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="relative z-20 px-4 sm:px-6 pt-2 pb-5 max-w-xl mx-auto w-full"
      aria-label="Creator Profile and Background"
    >
      <div className="relative rounded-[26px] bg-[#0E1B38]/90 border border-white/10 p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_30px_rgba(56,189,248,0.1)] backdrop-blur-md overflow-hidden">
        {/* Subtle ambient lighting */}
        <div className="absolute -top-16 -right-16 w-44 h-44 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-44 h-44 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* TOP PROFILE ROW */}
        <div className="flex items-start gap-4 mb-4 relative z-10">
          {/* Profile Photo with Polaroid ring */}
          <div
            onClick={onAvatarTap}
            className="relative flex-shrink-0 group cursor-pointer"
            title="through.adys"
          >
            <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl p-1 bg-[#FBFBFC] shadow-[0_8px_20px_rgba(0,0,0,0.4)] rotate-[-2deg] group-hover:rotate-0 transition-transform duration-300">
              <div className="w-full h-full rounded-xl overflow-hidden bg-slate-800">
                <ImageWithFallback
                  src={profile.avatarUrl}
                  alt={profile.name}
                  fallbackTitle={profile.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Online status indicator */}
            <div
              className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#0E1B38] flex items-center justify-center shadow"
              title="Available for projects"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            </div>
          </div>

          {/* Profile Info & Institution */}
          <div className="min-w-0 flex-1 pt-0.5">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-mono tracking-widest uppercase text-sky-400 bg-sky-950/70 border border-sky-500/25 px-2 py-0.5 rounded-full">
                {profile.handle}
              </span>
            </div>

            <h1 className="text-lg sm:text-xl font-extrabold text-white tracking-tight leading-snug">
              {profile.name}
            </h1>

            {/* Institution & Major Badge */}
            <div className="flex items-center gap-1.5 text-xs text-sky-200/90 font-medium mt-1">
              <GraduationCap className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" />
              <span className="truncate">{profile.institution}</span>
            </div>

            {/* Location */}
            <div className="flex items-center gap-1.5 text-[11px] text-slate-400 mt-1">
              <MapPin className="w-3 h-3 text-slate-400 flex-shrink-0" />
              <span>{profile.location}</span>
            </div>
          </div>
        </div>

        {/* USER BACKGROUND & INTRODUCTION TEXT */}
        <div className="relative z-10 pt-1 pb-3 text-xs sm:text-[13px] text-slate-200 font-light leading-relaxed border-t border-white/5 mt-2">
          <p>{profile.bio}</p>
        </div>

        {/* CORE SKILLS & SPECIALIZATIONS */}
        {profile.skills && profile.skills.length > 0 && (
          <div className="relative z-10 pt-2 border-t border-white/5 flex flex-wrap items-center gap-1.5">
            {profile.skills.map((skill) => (
              <span
                key={skill}
                className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-[11px] text-slate-300 font-medium tracking-wide flex items-center gap-1"
              >
                <span className="w-1 h-1 rounded-full bg-sky-400" />
                <span>{skill}</span>
              </span>
            ))}
          </div>
        )}

        {/* ACTION BAR: CONTACT & QUICK SCROLL TO WORKS */}
        <div className="relative z-10 pt-3.5 mt-2 border-t border-white/5 flex items-center justify-between gap-2.5">
          {/* Quick Copy Email */}
          <button
            onClick={copyEmail}
            className="flex-1 py-2 px-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-xs font-semibold text-slate-200 hover:text-white transition-all flex items-center justify-center gap-1.5 active:scale-98 shadow-sm truncate"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span className="text-emerald-300 font-mono text-[11px]">Email Tersalin!</span>
              </>
            ) : (
              <>
                <Mail className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" />
                <span className="truncate font-mono text-[11px]">{profile.email}</span>
              </>
            )}
          </button>

          {/* Jump to Carousel */}
          {onScrollToExplore && (
            <button
              onClick={onScrollToExplore}
              className="py-2 px-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-[#0B1630] text-xs font-bold transition-all flex items-center gap-1.5 active:scale-98 shadow-md flex-shrink-0"
              title="Lihat Kategori Karya"
            >
              <span>Explore</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </motion.section>
  );
};
