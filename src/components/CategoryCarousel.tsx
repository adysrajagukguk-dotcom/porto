import React, { useState, useEffect, useRef } from 'react';
import { motion, PanInfo } from 'motion/react';
import { Category, Project, ProfileInfo } from '../types/portfolio';
import { CategoryCard } from './CategoryCard';
import { ProfileIntroCard } from './ProfileIntroCard';
import { ChevronLeft, ChevronRight, Info, Hand, Sliders } from 'lucide-react';
import { getCategoryProjectCount } from '../data/portfolioData';

interface CategoryCarouselProps {
  categories: Category[];
  projects: Project[];
  profile: ProfileInfo;
  isAdmin?: boolean;
  onOpenCategory: (categoryId: string) => void;
  onOpenAbout: () => void;
  onOpenStudio?: () => void;
  onRequestAdmin?: () => void;
}

export const CategoryCarousel: React.FC<CategoryCarouselProps> = ({
  categories,
  projects,
  profile,
  isAdmin = false,
  onOpenCategory,
  onOpenAbout,
  onOpenStudio,
  onRequestAdmin,
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const carouselSectionRef = useRef<HTMLDivElement>(null);
  const logoTapsRef = useRef<number>(0);
  const logoTapTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleLogoTap = () => {
    logoTapsRef.current += 1;
    if (logoTapTimerRef.current) clearTimeout(logoTapTimerRef.current);

    if (logoTapsRef.current >= 4) {
      logoTapsRef.current = 0;
      if (onRequestAdmin) onRequestAdmin();
    } else {
      logoTapTimerRef.current = setTimeout(() => {
        logoTapsRef.current = 0;
      }, 1500);
    }
  };

  const handleScrollToCarousel = () => {
    carouselSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  // Keep active index in bounds if categories count changes
  useEffect(() => {
    if (activeIndex >= categories.length) {
      setActiveIndex(Math.max(0, categories.length - 1));
    }
  }, [categories.length, activeIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setActiveIndex((prev) => Math.max(0, prev - 1));
      } else if (e.key === 'ArrowRight') {
        setActiveIndex((prev) => Math.min(categories.length - 1, prev + 1));
      } else if (e.key === 'Enter' || e.key === ' ') {
        if (categories[activeIndex]) {
          onOpenCategory(categories[activeIndex].id);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, categories, onOpenCategory]);

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setIsDragging(false);
    const threshold = 40;
    const velocityThreshold = 250;

    if (info.offset.x < -threshold || info.velocity.x < -velocityThreshold) {
      // Swiped left -> advance
      setActiveIndex((prev) => Math.min(categories.length - 1, prev + 1));
    } else if (info.offset.x > threshold || info.velocity.x > velocityThreshold) {
      // Swiped right -> retreat
      setActiveIndex((prev) => Math.max(0, prev - 1));
    }
  };

  const handleCardClick = (index: number) => {
    if (isDragging) return;
    if (index === activeIndex) {
      onOpenCategory(categories[index].id);
    } else {
      setActiveIndex(index);
    }
  };

  const activeCategory = categories[activeIndex] || categories[0];

  return (
    <div className="relative w-full min-h-[100dvh] bg-[#0B1630] text-slate-100 flex flex-col justify-start overflow-y-auto pb-12 select-none">
      {/* Background Ambient Glows & Stars */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full blur-[100px] transition-colors duration-700 opacity-20"
          style={{ backgroundColor: activeCategory?.accentColor || '#38BDF8' }}
        />
        <div className="absolute -bottom-16 -left-16 w-72 h-72 bg-sky-900/20 rounded-full blur-[80px]" />
        <div className="absolute top-6 right-0 w-60 h-60 bg-indigo-900/20 rounded-full blur-[70px]" />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      {/* TOP HEADER */}
      <header className="relative z-30 pt-3.5 sm:pt-5 px-5 sm:px-7 flex items-center justify-between flex-shrink-0">
        <div className="flex items-center gap-2">
          {/* Logo with secret owner unlock trigger */}
          <div
            onClick={handleLogoTap}
            className="flex items-center gap-1.5 cursor-pointer select-none active:scale-95 transition-transform"
            title="through.adys"
          >
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
            <h1 className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-white font-mono">
              through.adys
            </h1>
          </div>
        </div>

        {/* Header Actions */}
        <div className="flex items-center gap-2">
          {/* Studio button only visible to verified owner */}
          {isAdmin && onOpenStudio && (
            <button
              onClick={onOpenStudio}
              className="p-1.5 rounded-full bg-sky-500/20 hover:bg-sky-500/30 border border-sky-400/40 text-sky-300 transition-all flex items-center gap-1.5 text-xs px-2.5 shadow-sm"
              aria-label="Manage Content"
              title="Content Studio (Owner Mode)"
            >
              <Sliders className="w-3.5 h-3.5 text-sky-400" />
              <span className="font-mono text-[10px] tracking-wider uppercase hidden xs:inline">
                Studio
              </span>
            </button>
          )}

          {/* About / Creator Info Trigger */}
          <button
            onClick={onOpenAbout}
            className="p-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-slate-300 hover:text-white transition-all flex items-center gap-1.5 text-xs px-2.5"
            aria-label="About Creator"
          >
            <Info className="w-3.5 h-3.5 text-sky-400" />
            <span className="font-mono text-[10px] tracking-wider uppercase hidden xs:inline">
              About
            </span>
          </button>
        </div>
      </header>

      {/* SECTION 1: CREATOR INTRODUCTION & BACKGROUND CARD */}
      <ProfileIntroCard
        profile={profile}
        onScrollToExplore={handleScrollToCarousel}
        onAvatarTap={handleLogoTap}
      />

      {/* SECTION 2: MAIN CAROUSEL STACK CONTAINER */}
      <div
        ref={carouselSectionRef}
        className="relative z-20 flex items-center justify-center w-full px-3 overflow-visible my-4 py-1 scroll-mt-6"
      >
        {/* Desktop / Manual Navigation Chevrons */}
        <div className="absolute inset-y-0 left-1.5 sm:left-4 z-40 flex items-center">
          <button
            onClick={() => setActiveIndex((prev) => Math.max(0, prev - 1))}
            disabled={activeIndex === 0}
            className={`w-9 h-9 rounded-full bg-[#0E1B38]/90 border border-white/10 flex items-center justify-center text-white shadow-xl backdrop-blur-md transition-all ${
              activeIndex === 0
                ? 'opacity-20 cursor-not-allowed'
                : 'opacity-80 hover:opacity-100 hover:scale-110 active:scale-95'
            }`}
            aria-label="Previous Category"
          >
            <ChevronLeft className="w-4 h-4 text-sky-300" />
          </button>
        </div>

        <div className="absolute inset-y-0 right-1.5 sm:right-4 z-40 flex items-center">
          <button
            onClick={() => setActiveIndex((prev) => Math.min(categories.length - 1, prev + 1))}
            disabled={activeIndex === categories.length - 1}
            className={`w-9 h-9 rounded-full bg-[#0E1B38]/90 border border-white/10 flex items-center justify-center text-white shadow-xl backdrop-blur-md transition-all ${
              activeIndex === categories.length - 1
                ? 'opacity-20 cursor-not-allowed'
                : 'opacity-80 hover:opacity-100 hover:scale-110 active:scale-95'
            }`}
            aria-label="Next Category"
          >
            <ChevronRight className="w-4 h-4 text-sky-300" />
          </button>
        </div>

        {/* CARDS STACK */}
        <div className="relative w-full max-w-[285px] sm:max-w-[315px] h-[375px] sm:h-[405px] flex items-center justify-center">
          {categories.map((category, index) => {
            const diff = index - activeIndex;
            const isVisible = Math.abs(diff) <= 2;

            if (!isVisible) return null;

            const projectCount = getCategoryProjectCount(projects, category.id);

            return (
              <CategoryCard
                key={category.id}
                category={category}
                index={index}
                totalCategories={categories.length}
                projectCount={projectCount}
                isActive={diff === 0}
                isPrev={diff === -1}
                isNext={diff === 1}
                diff={diff}
                onSelect={() => handleCardClick(index)}
                onOpen={() => onOpenCategory(category.id)}
                onDragStart={() => setIsDragging(true)}
                onDragEnd={handleDragEnd}
              />
            );
          })}
        </div>
      </div>

      {/* BOTTOM CONTROLS & PAGINATION */}
      <footer className="relative z-30 pt-1 pb-4 px-4 flex flex-col items-center gap-2 flex-shrink-0">
        {/* Dynamic Pagination Indicators */}
        <div className="flex items-center gap-1.5 max-w-[280px] overflow-x-auto py-1 scrollbar-none">
          {categories.map((cat, idx) => (
            <button
              key={cat.id}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Jump to category ${cat.title}`}
              className={`h-1.5 rounded-full transition-all duration-300 flex-shrink-0 ${
                idx === activeIndex
                  ? 'w-6 bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.7)]'
                  : 'w-1.5 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>

        {/* Short Instruction */}
        <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-medium tracking-wide">
          <motion.div
            animate={{ x: [-3, 3, -3] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          >
            <Hand className="w-3.5 h-3.5 text-sky-400/80" />
          </motion.div>
          <span>Swipe to explore</span>
        </div>
      </footer>
    </div>
  );
};
