import React from 'react';
import { motion } from 'motion/react';
import { Project } from '../types/portfolio';
import { ImageWithFallback } from './ImageWithFallback';
import { ArrowUpRight } from 'lucide-react';
import { formatIndex } from '../data/portfolioData';

interface ProjectCardProps {
  project: Project;
  index: number;
  onSelect: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onSelect }) => {
  const formattedIndex = formatIndex(index);

  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: Math.min(index * 0.06, 0.4),
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      onClick={onSelect}
      className="group cursor-pointer bg-[#FBFBFC] rounded-2xl p-3 sm:p-4 pb-4.5 shadow-[0_12px_32px_-8px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.6)] hover:shadow-[0_20px_45px_-10px_rgba(0,0,0,0.65),0_0_20px_rgba(56,189,248,0.2)] transition-all duration-300 transform hover:-translate-y-1 active:scale-[0.99]"
    >
      {/* Polaroid Photo */}
      <div className="relative w-full h-52 sm:h-64 rounded-xl overflow-hidden bg-slate-900 shadow-inner">
        <ImageWithFallback
          src={project.coverImage}
          alt={project.title}
          fallbackTitle={project.title}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {/* Photo grain & vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/20 pointer-events-none" />

        {/* Year & Index Tag */}
        <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/20 text-[10px] font-mono tracking-widest uppercase text-white font-medium">
          {project.year} · PROJ. {formattedIndex}
        </div>

        {/* Corner Open Indicator */}
        <div className="absolute bottom-2.5 right-2.5 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md text-[#0B1630] flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
          <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
        </div>
      </div>

      {/* Polaroid Bottom Caption Chin */}
      <div className="pt-3 px-1">
        <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 mb-1">
          <span className="uppercase text-sky-700 font-semibold">{project.role}</span>
          {project.client && <span className="truncate max-w-[150px]">{project.client}</span>}
        </div>

        <h2 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 group-hover:text-sky-900 transition-colors">
          {project.title}
        </h2>

        <p className="text-xs text-slate-600 line-clamp-2 mt-1 leading-relaxed">
          {project.shortDesc}
        </p>

        {/* Deliverables tags */}
        {project.deliverables && project.deliverables.length > 0 && (
          <div className="mt-2.5 pt-2 border-t border-slate-200/80 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-slate-500">
            {project.deliverables.slice(0, 3).map((d, i) => (
              <span key={d} className="flex items-center gap-1.5">
                {i > 0 && <span className="text-slate-300">·</span>}
                <span>{d}</span>
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
};
