import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Category, Project } from '../types/portfolio';
import { ProjectGallery } from './ProjectGallery';
import { EmptyState } from './EmptyState';
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Calendar,
  User,
  Briefcase,
  Layers,
  ExternalLink,
} from 'lucide-react';
import { getProjectsByCategory, formatIndex } from '../data/portfolioData';

interface ProjectDetailScreenProps {
  categoryId: string;
  projectId: string;
  categories: Category[];
  projects: Project[];
  onBackToCategory: () => void;
  onNavigateProject: (nextProjectId: string) => void;
}

export const ProjectDetailScreen: React.FC<ProjectDetailScreenProps> = ({
  categoryId,
  projectId,
  categories,
  projects,
  onBackToCategory,
  onNavigateProject,
}) => {
  const category = categories.find((c) => c.id === categoryId) || categories[0];
  const categoryProjects = getProjectsByCategory(projects, categoryId);
  const currentProject = categoryProjects.find((p) => p.id === projectId) || categoryProjects[0];
  const currentIndex = categoryProjects.findIndex((p) => p.id === currentProject?.id);

  const prevProject = currentIndex > 0 ? categoryProjects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < categoryProjects.length - 1 ? categoryProjects[currentIndex + 1] : null;

  // Scroll to top on project switch
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [projectId]);

  if (!currentProject) {
    return (
      <div className="min-h-[100dvh] bg-[#0B1630] text-slate-100 flex flex-col justify-center items-center p-6">
        <EmptyState
          title="Proyek Tidak Ditemukan"
          description="Proyek yang Anda tuju belum terdaftar di dalam sistem data portofolio."
          onBack={onBackToCategory}
        />
      </div>
    );
  }

  const formattedProjIndex = formatIndex(currentIndex >= 0 ? currentIndex : 0);

  return (
    <div className="relative min-h-[100dvh] bg-[#0B1630] text-slate-100 flex flex-col overflow-x-hidden pb-20">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute top-0 right-1/3 w-[360px] h-[360px] rounded-full blur-[140px] opacity-15"
          style={{ backgroundColor: category?.accentColor || '#38BDF8' }}
        />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-indigo-900/15 rounded-full blur-[120px]" />
      </div>

      {/* TOP NAVIGATION BAR */}
      <header className="sticky top-0 z-40 bg-[#0B1630]/90 backdrop-blur-md border-b border-white/10 px-4 sm:px-6 py-3.5 flex items-center justify-between">
        <button
          onClick={onBackToCategory}
          className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white px-3 py-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] transition-colors border border-white/5 active:scale-95"
          aria-label={`Back to ${category?.title || 'Category'}`}
        >
          <ArrowLeft className="w-4 h-4 text-sky-400" />
          <span className="truncate max-w-[170px] sm:max-w-none">
            Back to {category?.title || 'Category'}
          </span>
        </button>

        <div className="text-[11px] font-mono tracking-wider text-slate-400">
          {currentIndex + 1} / {categoryProjects.length}
        </div>
      </header>

      {/* MAIN CONTENT CONTAINER */}
      <main className="relative z-10 px-4 sm:px-6 max-w-2xl mx-auto w-full pt-6 space-y-6">
        {/* REUSABLE POLAROID HERO & GALLERY SNAPSHOTS */}
        <ProjectGallery
          coverImage={currentProject.coverImage}
          projectTitle={currentProject.title}
          year={currentProject.year}
          galleryImages={currentProject.galleryImages}
        />

        {/* PROJECT TITLE & METADATA */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono text-sky-400 uppercase tracking-widest">
            <span>{category?.title || currentProject.category}</span>
            <span aria-hidden="true">·</span>
            <span>PROJ. {formattedProjIndex}</span>
          </div>

          <div className="flex items-start justify-between gap-4">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
              {currentProject.title}
            </h1>
            {currentProject.externalUrl && (
              <a
                href={currentProject.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.15] text-sky-300 text-xs font-semibold border border-white/10 transition-colors flex-shrink-0"
              >
                <span>Live Project</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            {currentProject.shortDesc}
          </p>
        </div>

        {/* METADATA GRID CARD */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 p-4 rounded-2xl bg-white/[0.04] border border-white/10 text-xs text-slate-300">
          <div>
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">
              <User className="w-3 h-3 text-sky-400" />
              <span>My Role</span>
            </div>
            <p className="font-semibold text-white leading-snug">{currentProject.role}</p>
          </div>

          <div>
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">
              <Calendar className="w-3 h-3 text-sky-400" />
              <span>Timeline</span>
            </div>
            <p className="font-semibold text-white">{currentProject.year}</p>
          </div>

          {currentProject.client && (
            <div className="col-span-2 sm:col-span-1">
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                <Briefcase className="w-3 h-3 text-sky-400" />
                <span>Client / Org</span>
              </div>
              <p className="font-semibold text-white truncate">{currentProject.client}</p>
            </div>
          )}
        </div>

        {/* FULL PROJECT DESCRIPTION */}
        <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 space-y-3">
          <h2 className="text-xs font-mono uppercase tracking-widest text-sky-400 flex items-center gap-2">
            <Layers className="w-3.5 h-3.5" />
            <span>Project Scope & Strategy</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
            {currentProject.fullDesc}
          </p>
        </div>

        {/* KEY DELIVERABLES */}
        {currentProject.deliverables && currentProject.deliverables.length > 0 && (
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-slate-300">
              Key Deliverables & Artifacts
            </h2>
            <div className="flex flex-wrap gap-2 pt-1">
              {currentProject.deliverables.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/10 text-xs text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* HIGHLIGHTS / OUTCOMES */}
        {currentProject.metricsOrHighlights && currentProject.metricsOrHighlights.length > 0 && (
          <div className="p-5 rounded-2xl bg-sky-950/30 border border-sky-500/20 space-y-2.5">
            <h2 className="text-xs font-mono uppercase tracking-widest text-sky-300">
              Outcomes & Key Highlights
            </h2>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-200">
              {currentProject.metricsOrHighlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                  <span className="leading-snug">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* NEXT / PREV PROJECT NAVIGATION FOOTER */}
        <div className="pt-6 border-t border-white/10 space-y-3">
          <div className="grid grid-cols-2 gap-3">
            {prevProject ? (
              <button
                onClick={() => onNavigateProject(prevProject.id)}
                className="p-3.5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/5 text-left transition-all group"
              >
                <div className="flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider text-slate-400 group-hover:text-sky-300">
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span>Previous</span>
                </div>
                <p className="text-xs font-semibold text-white truncate mt-1">
                  {prevProject.title}
                </p>
              </button>
            ) : (
              <div />
            )}

            {nextProject ? (
              <button
                onClick={() => onNavigateProject(nextProject.id)}
                className="p-3.5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/5 text-right transition-all group ml-auto w-full"
              >
                <div className="flex items-center justify-end gap-1 text-[10px] font-mono uppercase tracking-wider text-slate-400 group-hover:text-sky-300">
                  <span>Next</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
                <p className="text-xs font-semibold text-white truncate mt-1">
                  {nextProject.title}
                </p>
              </button>
            ) : (
              <div />
            )}
          </div>

          <button
            onClick={onBackToCategory}
            className="w-full py-3 px-5 rounded-2xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-xs font-semibold text-slate-300 hover:text-white transition-all flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4 text-sky-400" />
            <span>Return to {category?.title || 'Category'}</span>
          </button>
        </div>
      </main>
    </div>
  );
};
