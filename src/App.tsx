import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { AppScreen, Category, Project, ProfileInfo } from './types/portfolio';
import { loadCategories, loadProjects, loadProfile } from './data/portfolioData';
import { CategoryCarousel } from './components/CategoryCarousel';
import { CategoryScreen } from './components/CategoryScreen';
import { ProjectDetailScreen } from './components/ProjectDetailScreen';
import { AboutModal } from './components/AboutModal';
import { ContentStudioModal } from './components/ContentStudioModal';
import { OwnerAuthModal } from './components/OwnerAuthModal';
import { Smartphone, Monitor } from 'lucide-react';

export default function App() {
  const [categories, setCategories] = useState<Category[]>(loadCategories);
  const [projects, setProjects] = useState<Project[]>(loadProjects);
  const [profile, setProfile] = useState<ProfileInfo>(loadProfile);
  const [screen, setScreen] = useState<AppScreen>({ type: 'categories' });
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isStudioOpen, setIsStudioOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'mobile' | 'expanded'>('mobile');

  // Owner authentication state: false by default for public visitors
  const [isAdmin, setIsAdmin] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    try {
      const hasSessionAuth = sessionStorage.getItem('through_adys_owner_auth') === 'true';
      const searchParams = new URLSearchParams(window.location.search);
      const hasUrlParam = searchParams.get('admin') === 'true' || searchParams.has('admin');
      const hasHashParam = window.location.hash.includes('admin');
      return hasSessionAuth || hasUrlParam || hasHashParam;
    } catch {
      return false;
    }
  });

  // Support browser hash navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (!hash) {
        setScreen({ type: 'categories' });
        return;
      }

      const params = new URLSearchParams(hash);
      const categoryId = params.get('category');
      const projectId = params.get('project');

      if (params.get('admin') === 'true' || hash === 'admin') {
        setIsAdmin(true);
        sessionStorage.setItem('through_adys_owner_auth', 'true');
      }

      if (categoryId && projectId) {
        setScreen({ type: 'project', categoryId, projectId });
      } else if (categoryId) {
        setScreen({ type: 'category', categoryId });
      } else {
        setScreen({ type: 'categories' });
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Keyboard shortcut for Owner (Ctrl+Shift+A or Cmd+Shift+A)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
        e.preventDefault();
        if (isAdmin) {
          setIsStudioOpen((prev) => !prev);
        } else {
          setIsAuthModalOpen(true);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isAdmin]);

  const navigateToCategories = () => {
    window.location.hash = '';
    setScreen({ type: 'categories' });
  };

  const navigateToCategory = (categoryId: string) => {
    window.location.hash = `category=${categoryId}`;
    setScreen({ type: 'category', categoryId });
  };

  const navigateToProject = (categoryId: string, projectId: string) => {
    window.location.hash = `category=${categoryId}&project=${projectId}`;
    setScreen({ type: 'project', categoryId, projectId });
  };

  const handleUpdateData = (newCategories: Category[], newProjects: Project[]) => {
    setCategories(newCategories);
    setProjects(newProjects);
  };

  const handleRequestAdmin = () => {
    if (isAdmin) {
      setIsStudioOpen(true);
    } else {
      setIsAuthModalOpen(true);
    }
  };

  const handleAuthSuccess = () => {
    sessionStorage.setItem('through_adys_owner_auth', 'true');
    setIsAdmin(true);
    setIsAuthModalOpen(false);
    setIsStudioOpen(true);
  };

  const handleLockAdmin = () => {
    sessionStorage.removeItem('through_adys_owner_auth');
    setIsAdmin(false);
    setIsStudioOpen(false);
  };

  return (
    <div className="min-h-[100dvh] w-full bg-[#070E20] flex flex-col items-center justify-center font-sans antialiased text-slate-100 overflow-x-hidden selection:bg-sky-500/30 selection:text-sky-200">
      {/* Desktop view-mode switcher (visible on md screens and above) */}
      <div className="hidden md:flex fixed bottom-4 right-4 z-50 items-center gap-1.5 p-1 rounded-full bg-[#0E1B38]/90 border border-white/10 shadow-2xl backdrop-blur-md text-xs">
        <button
          onClick={() => setViewMode('mobile')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all ${
            viewMode === 'mobile'
              ? 'bg-sky-500 text-[#0B1630] font-semibold shadow-sm'
              : 'text-slate-300 hover:text-white'
          }`}
          title="Mobile Device Frame"
        >
          <Smartphone className="w-3.5 h-3.5" />
          <span>Mobile Device</span>
        </button>
        <button
          onClick={() => setViewMode('expanded')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all ${
            viewMode === 'expanded'
              ? 'bg-sky-500 text-[#0B1630] font-semibold shadow-sm'
              : 'text-slate-300 hover:text-white'
          }`}
          title="Fluid Viewport"
        >
          <Monitor className="w-3.5 h-3.5" />
          <span>Expanded</span>
        </button>
      </div>

      {/* Main Container: Mobile phone viewport framing on desktop, full-width on mobile */}
      <div
        className={`w-full transition-all duration-300 flex flex-col justify-center ${
          viewMode === 'mobile'
            ? 'max-w-[430px] h-[100dvh] md:my-6 md:h-[840px] md:max-h-[92vh] md:rounded-[42px] md:border-[8px] md:border-[#14234B] md:shadow-[0_25px_80px_rgba(0,0,0,0.85),0_0_0_2px_rgba(255,255,255,0.08)] overflow-hidden bg-[#0B1630] relative'
            : 'max-w-4xl min-h-[100dvh] bg-[#0B1630] relative'
        }`}
      >
        <AnimatePresence mode="wait">
          {screen.type === 'categories' && (
            <motion.div
              key="screen-categories"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="w-full h-full flex-1 flex flex-col overflow-y-auto scrollbar-none"
            >
              <CategoryCarousel
                categories={categories}
                projects={projects}
                profile={profile}
                isAdmin={isAdmin}
                onOpenCategory={navigateToCategory}
                onOpenAbout={() => setIsAboutOpen(true)}
                onOpenStudio={() => setIsStudioOpen(true)}
                onRequestAdmin={handleRequestAdmin}
              />
            </motion.div>
          )}

          {screen.type === 'category' && (
            <motion.div
              key={`screen-category-${screen.categoryId}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              className="w-full h-full flex-1 flex flex-col overflow-y-auto"
            >
              <CategoryScreen
                categoryId={screen.categoryId}
                categories={categories}
                projects={projects}
                onBack={navigateToCategories}
                onSelectProject={(projectId) => navigateToProject(screen.categoryId, projectId)}
              />
            </motion.div>
          )}

          {screen.type === 'project' && (
            <motion.div
              key={`screen-project-${screen.projectId}`}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              className="w-full h-full flex-1 flex flex-col overflow-y-auto"
            >
              <ProjectDetailScreen
                categoryId={screen.categoryId}
                projectId={screen.projectId}
                categories={categories}
                projects={projects}
                onBackToCategory={() => navigateToCategory(screen.categoryId)}
                onNavigateProject={(nextProjectId) =>
                  navigateToProject(screen.categoryId, nextProjectId)
                }
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* About / Creator Modal */}
      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
        isAdmin={isAdmin}
        onOpenStudio={() => setIsStudioOpen(true)}
        onRequestAdmin={handleRequestAdmin}
      />

      {/* Content Studio / Data Manager Modal (Accessible only to verified owner) */}
      <ContentStudioModal
        isOpen={isStudioOpen && isAdmin}
        onClose={() => setIsStudioOpen(false)}
        categories={categories}
        projects={projects}
        onUpdateData={handleUpdateData}
        onLockAdmin={handleLockAdmin}
      />

      {/* Owner Authentication Modal */}
      <OwnerAuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onSuccess={handleAuthSuccess}
      />
    </div>
  );
}
