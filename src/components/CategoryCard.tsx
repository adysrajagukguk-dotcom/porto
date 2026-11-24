import React from 'react';
import { motion, PanInfo } from 'motion/react';
import { Category } from '../types/portfolio';
import { ImageWithFallback } from './ImageWithFallback';
import { ArrowRight } from 'lucide-react';
import { formatIndex } from '../data/portfolioData';

interface CategoryCardProps {
  category: Category;
  index: number;
  totalCategories: number;
  projectCount: number;
  isActive: boolean;
  isPrev: boolean;
  isNext: boolean;
  diff: number;
  onSelect: () => void;
  onOpen: () => void;
  onDragEnd: (e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => void;
  onDragStart: () => void;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  category,
  index,
  totalCategories,
  projectCount,
  isActive,
  isPrev,
  isNext,
  diff,
  onSelect,
  onOpen,
  onDragEnd,
  onDragStart,
}) => {
  // Compute horizontal translation, rotation, scale, and opacity
  let xOffset = 0;
  let scale = 1;
  let rotate = 0;
  let opacity = 1;
  let zIndex = 10;

  if (isActive) {
    xOffset = 0;
    scale = 1;
    rotate = 0;
    opacity = 1;
    zIndex = 30;
  } else if (isPrev) {
    xOffset = -180;
    scale = 0.86;
    rotate = -5;
    opacity = 0.55;
    zIndex = 20;
  } else if (isNext) {
    xOffset = 180;
    scale = 0.86;
    rotate = 5;
    opacity = 0.55;
    zIndex = 20;
  } else if (diff < -1) {
    xOffset = -260;
    scale = 0.74;
    rotate = -9;
    opacity = 0;
    zIndex = 10;
  } else if (diff > 1) {
    xOffset = 260;
    scale = 0.74;
    rotate = 9;
    opacity = 0;
    zIndex = 10;
  }

  const formattedIndex = formatIndex(index);
  const formattedTotal = String(totalCategories).padStart(2, '0');

  return (
    <motion.div
      drag={isActive ? 'x' : false}
      dragConstraints={{ left: -100, right: 100 }}
      dragElastic={0.2}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onClick={onSelect}
      initial={false}
      animate={{
        x: xOffset,
        scale,
        rotate,
        opacity,
        zIndex,
      }}
      transition={{
        type: 'spring',
        stiffness: 280,
        damping: 26,
        mass: 0.8,
      }}
      className="absolute inset-0 cursor-pointer touch-pan-y"
      style={{
        transformOrigin: 'bottom center',
      }}
    >
      {/* POLAROID FRAME */}
      <div
        className={`w-full h-full bg-[#FBFBFC] rounded-[20px] p-2.5 sm:p-3 pb-3.5 flex flex-col justify-between transition-shadow duration-300 ${
          isActive
            ? 'shadow-[0_20px_48px_-10px_rgba(0,0,0,0.7),0_0_0_1.5px_rgba(255,255,255,0.85),0_0_24px_rgba(56,189,248,0.2)]'
            : 'shadow-[0_12px_28px_-6px_rgba(0,0,0,0.45),0_0_0_1px_rgba(255,255,255,0.4)]'
        }`}
      >
        {/* Polaroid Photo Container */}
        <div className="relative w-full h-[215px] sm:h-[235px] rounded-xl overflow-hidden bg-slate-900 shadow-inner flex-shrink-0">
          <ImageWithFallback
            src={category.coverImage}
            alt={category.title}
            fallbackTitle={category.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
          />

          {/* Photo film grain & glare sheen overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/15 pointer-events-none" />

          {/* Dynamic Series Badge in photo corner */}
          <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md border border-white/20 text-[9px] font-mono tracking-widest uppercase text-white font-medium">
            NO. {formattedIndex} / {formattedTotal}
          </div>

          {/* Subtle aesthetic camera mark in corner */}
          <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white/90">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: category.accentColor || '#38BDF8' }}
            />
          </div>
        </div>

        {/* Polaroid Bottom Margin / Chin */}
        <div className="pt-2 px-1 flex flex-col justify-between flex-1 min-h-0">
          <div>
            {/* Dynamic Category Series & Project Count Label */}
            <div className="flex items-center justify-between text-[9px] font-mono tracking-wider text-slate-500 uppercase">
              <span>CAT // {formattedIndex}</span>
              <span className="text-slate-400 font-sans text-[9px]">
                {projectCount} {projectCount === 1 ? 'Work' : 'Works'}
              </span>
            </div>

            {/* Polaroid Title */}
            <h3 className="text-base sm:text-lg font-bold tracking-tight text-slate-900 mt-0.5 leading-snug">
              {category.title}
            </h3>

            {/* Tagline */}
            <p className="text-[10px] sm:text-[11px] text-slate-600 line-clamp-1 mt-0.5 leading-tight">
              {category.tagline}
            </p>
          </div>

          {/* Open Category Action Button */}
          <div className="pt-2">
            {isActive ? (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onOpen();
                }}
                className="w-full py-2 px-3 rounded-xl bg-[#0B1630] hover:bg-[#152754] active:scale-[0.98] text-white text-xs font-semibold tracking-wide flex items-center justify-center gap-1.5 shadow-md transition-all group"
              >
                <span className="text-sky-300 font-medium">Open Category</span>
                <ArrowRight className="w-3.5 h-3.5 text-sky-400 transition-transform group-hover:translate-x-1" />
              </button>
            ) : (
              <div className="w-full py-1.5 px-2 rounded-lg bg-slate-100 text-slate-500 text-[10px] font-medium text-center">
                Tap to select
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
