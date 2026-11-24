import React, { useEffect } from 'react';
import { Category, Project } from '../types/portfolio';
import { ProjectCard } from './ProjectCard';
import { EmptyState } from './EmptyState';
import { ArrowLeft, Folder } from 'lucide-react';
import { formatIndex, getProjectsByCategory } from '../data/portfolioData';

interface CategoryScreenProps {
  categoryId: string;
  categories: Category[];
  projects: Project[];
  onBack: () => void;
  onSelectProject: (projectId: string) => void;
}

export const CategoryScreen: React.FC<CategoryScreenProps> = ({
  categoryId,
  categories,
  projects,
  onBack,
  onSelectProject,
}) => {
  const categoryIndex = categories.findIndex((c) => c.id === categoryId);
  const category = categories[categoryIndex] || categories[0];
  const categoryProjects = getProjectsByCategory(projects, categoryId);

  // Scroll to top when opening category
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [categoryId]);

  if (!category) {
    return (
      <div className="min-h-[100dvh] bg-[#0B1630] text-slate-100 flex flex-col justify-center items-center p-6">
        <EmptyState
          title="Kategori Tidak Ditemukan"
          description="Kategori yang Anda tuju belum terdaftar di dalam sistem data portofolio."
          onBack={onBack}
        />
      </div>
    );
  }

  const formattedCatIndex = formatIndex(categoryIndex >= 0 ? categoryIndex : 0);
  const formattedTotalCats = String(categories.length).padStart(2, '0');

  return (
    <div className="relative min-h-[100dvh] bg-[#0B1630] text-slate-100 flex flex-col overflow-x-hidden pb-16">
      {/* Background glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div
          className="absolute top-0 right-1/4 w-[380px] h-[380px] rounded-full blur-[130px] opacity-20"
          style={{ backgroundColor: category.accentColor || '#38BDF8' }}
        />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-sky-900/15 rounded-full blur-[100px]" />
      </div>

      {/* STICKY TOP NAVIGATION BAR */}
      <header className="sticky top-0 z-40 bg-[#0B1630]/90 backdrop-blur-md border-b border-white/10 px-4 sm:px-6 py-3.5 flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white px-3 py-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] transition-colors border border-white/5 active:scale-95"
          aria-label="Back to Categories"
        >
          <ArrowLeft className="w-4 h-4 text-sky-400" />
          <span>Back to Categories</span>
        </button>

        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono tracking-widest text-slate-400 uppercase">
            {formattedCatIndex} / {formattedTotalCats}
          </span>
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: category.accentColor || '#38BDF8' }}
          />
        </div>
      </header>

      {/* CATEGORY HERO HEADER */}
      <div className="relative z-10 px-5 sm:px-8 pt-6 pb-6 max-w-2xl mx-auto w-full">
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-sky-400 uppercase mb-1">
          <Folder className="w-3.5 h-3.5" />
          <span>Category Archive</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2">
          {category.title}
        </h1>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
          {category.description}
        </p>

        <div className="mt-4 flex items-center gap-3 text-xs text-slate-400 font-mono">
          <span>{categoryProjects.length} curated {categoryProjects.length === 1 ? 'project' : 'projects'}</span>
          <span aria-hidden="true">·</span>
          <span>Tap any card to view details</span>
        </div>
      </div>

      {/* VERTICAL LIST OF POLAROID PROJECT CARDS */}
      <main className="relative z-10 px-4 sm:px-6 max-w-2xl mx-auto w-full space-y-5 flex-1">
        {categoryProjects.length > 0 ? (
          categoryProjects.map((project: Project, index: number) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onSelect={() => onSelectProject(project.id)}
            />
          ))
        ) : (
          <EmptyState
            title={`Belum ada proyek di kategori ${category.title}`}
            description="Tambahkan objek proyek ke array DEFAULT_PROJECTS di file src/data/portfolioData.ts dengan kategori ini."
            onBack={onBack}
          />
        )}
      </main>

      {/* BOTTOM FOOTER RETURN CTA */}
      <div className="relative z-10 px-5 pt-8 text-center max-w-sm mx-auto">
        <button
          onClick={onBack}
          className="w-full py-3 px-5 rounded-2xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-xs font-semibold text-slate-300 hover:text-white transition-all flex items-center justify-center gap-2"
        >
          <ArrowLeft className="w-4 h-4 text-sky-400" />
          <span>Return to Category Carousel</span>
        </button>
      </div>
    </div>
  );
};
