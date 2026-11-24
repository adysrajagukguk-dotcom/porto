import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Category, Project, ProjectImage } from '../types/portfolio';
import {
  X,
  Plus,
  Trash2,
  Copy,
  Check,
  RotateCcw,
  Layers,
  Briefcase,
  ExternalLink,
  Info,
  ArrowUp,
  ArrowDown,
  Sparkles,
} from 'lucide-react';
import {
  STORAGE_KEY_CATEGORIES,
  STORAGE_KEY_PROJECTS,
  DEFAULT_CATEGORIES,
  DEFAULT_PROJECTS,
} from '../data/portfolioData';

interface ContentStudioModalProps {
  isOpen: boolean;
  onClose: () => void;
  categories: Category[];
  projects: Project[];
  onUpdateData: (categories: Category[], projects: Project[]) => void;
  onLockAdmin?: () => void;
}

export const ContentStudioModal: React.FC<ContentStudioModalProps> = ({
  isOpen,
  onClose,
  categories,
  projects,
  onUpdateData,
  onLockAdmin,
}) => {
  const [activeTab, setActiveTab] = useState<'categories' | 'projects' | 'export'>('categories');
  const [copied, setCopied] = useState(false);

  // New Category Form State
  const [newCatId, setNewCatId] = useState('');
  const [newCatTitle, setNewCatTitle] = useState('');
  const [newCatTagline, setNewCatTagline] = useState('');
  const [newCatDesc, setNewCatDesc] = useState('');
  const [newCatCover, setNewCatCover] = useState('');
  const [newCatColor, setNewCatColor] = useState('#38BDF8');

  // New Project Form State
  const [newProjId, setNewProjId] = useState('');
  const [newProjTitle, setNewProjTitle] = useState('');
  const [newProjCat, setNewProjCat] = useState(categories[0]?.id || 'brand-strategy');
  const [newProjYear, setNewProjYear] = useState('2024');
  const [newProjRole, setNewProjRole] = useState('');
  const [newProjClient, setNewProjClient] = useState('');
  const [newProjShortDesc, setNewProjShortDesc] = useState('');
  const [newProjFullDesc, setNewProjFullDesc] = useState('');
  const [newProjCover, setNewProjCover] = useState('');
  const [newProjDeliverables, setNewProjDeliverables] = useState('');
  const [newProjGalleryUrl, setNewProjGalleryUrl] = useState('');
  const [newProjGalleryCaption, setNewProjGalleryCaption] = useState('');

  // Category filter for projects tab
  const [filterCat, setFilterCat] = useState<string>('all');

  if (!isOpen) return null;

  // Add Category Handler
  const handleAddCategory = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCatTitle.trim()) return;

    const id = (newCatId || newCatTitle.toLowerCase().replace(/[^a-z0-9]/g, '-')).trim();
    if (categories.some((c) => c.id === id)) {
      alert(`Kategori dengan ID "${id}" sudah ada. Gunakan ID unik lain.`);
      return;
    }

    const newCategory: Category = {
      id,
      title: newCatTitle.trim().toUpperCase(),
      tagline: newCatTagline.trim() || 'Visual design and strategic work.',
      description: newCatDesc.trim() || newCatTagline.trim(),
      coverImage:
        newCatCover.trim() ||
        'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1000&auto=format&fit=crop',
      accentColor: newCatColor,
      accentBg: `${newCatColor}20`,
    };

    const updated = [...categories, newCategory];
    onUpdateData(updated, projects);
    localStorage.setItem(STORAGE_KEY_CATEGORIES, JSON.stringify(updated));

    // Reset Form
    setNewCatId('');
    setNewCatTitle('');
    setNewCatTagline('');
    setNewCatDesc('');
    setNewCatCover('');
  };

  // Delete Category Handler
  const handleDeleteCategory = (catId: string) => {
    if (categories.length <= 1) {
      alert('Minimal harus ada satu kategori dalam portofolio.');
      return;
    }
    if (confirm(`Hapus kategori "${catId}"? Proyek di dalamnya akan tetap tersimpan.`)) {
      const updated = categories.filter((c) => c.id !== catId);
      onUpdateData(updated, projects);
      localStorage.setItem(STORAGE_KEY_CATEGORIES, JSON.stringify(updated));
    }
  };

  // Add Project Handler
  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProjTitle.trim()) return;

    const id = (newProjId || newProjTitle.toLowerCase().replace(/[^a-z0-9]/g, '-')).trim();
    if (projects.some((p) => p.id === id)) {
      alert(`Proyek dengan ID "${id}" sudah ada. Gunakan ID unik lain.`);
      return;
    }

    const deliverablesArray = newProjDeliverables
      ? newProjDeliverables.split(',').map((s) => s.trim()).filter(Boolean)
      : ['Brand System', 'Digital Assets'];

    const gallery: ProjectImage[] = newProjGalleryUrl
      ? [{ url: newProjGalleryUrl.trim(), caption: newProjGalleryCaption.trim() || 'Project Showcase Detail' }]
      : [];

    const newProject: Project = {
      id,
      title: newProjTitle.trim(),
      category: newProjCat,
      year: newProjYear.trim() || '2024',
      role: newProjRole.trim() || 'Lead Designer',
      client: newProjClient.trim() || undefined,
      shortDesc: newProjShortDesc.trim() || 'Curated portfolio piece and creative exploration.',
      fullDesc: newProjFullDesc.trim() || newProjShortDesc.trim(),
      coverImage:
        newProjCover.trim() ||
        'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop',
      deliverables: deliverablesArray,
      galleryImages: gallery,
    };

    const updated = [newProject, ...projects];
    onUpdateData(categories, updated);
    localStorage.setItem(STORAGE_KEY_PROJECTS, JSON.stringify(updated));

    // Reset Form
    setNewProjId('');
    setNewProjTitle('');
    setNewProjRole('');
    setNewProjClient('');
    setNewProjShortDesc('');
    setNewProjFullDesc('');
    setNewProjCover('');
    setNewProjDeliverables('');
    setNewProjGalleryUrl('');
    setNewProjGalleryCaption('');
    alert(`Proyek "${newProject.title}" berhasil ditambahkan ke kategori ${newProject.category}!`);
  };

  // Delete Project Handler
  const handleDeleteProject = (projId: string) => {
    if (confirm(`Hapus proyek "${projId}"?`)) {
      const updated = projects.filter((p) => p.id !== projId);
      onUpdateData(categories, updated);
      localStorage.setItem(STORAGE_KEY_PROJECTS, JSON.stringify(updated));
    }
  };

  // Move Project Order
  const handleMoveProject = (index: number, direction: 'up' | 'down') => {
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= projects.length) return;

    const copy = [...projects];
    const temp = copy[index];
    copy[index] = copy[targetIndex];
    copy[targetIndex] = temp;

    onUpdateData(categories, copy);
    localStorage.setItem(STORAGE_KEY_PROJECTS, JSON.stringify(copy));
  };

  // Reset to default code
  const handleResetDefaults = () => {
    if (confirm('Kembalikan semua data kategori dan proyek ke data bawaan asli?')) {
      localStorage.removeItem(STORAGE_KEY_CATEGORIES);
      localStorage.removeItem(STORAGE_KEY_PROJECTS);
      onUpdateData(DEFAULT_CATEGORIES, DEFAULT_PROJECTS);
      alert('Data portofolio telah di-reset ke versi awal.');
    }
  };

  // Generate exported TypeScript code
  const generateExportCode = () => {
    return `import { Category, Project } from '../types/portfolio';

export const DEFAULT_CATEGORIES: Category[] = ${JSON.stringify(categories, null, 2)};

export const DEFAULT_PROJECTS: Project[] = ${JSON.stringify(projects, null, 2)};

export function getProjectsByCategory(projects: Project[], categoryId: string): Project[] {
  return projects.filter((p) => p.category === categoryId);
}

export function getCategoryProjectCount(projects: Project[], categoryId: string): number {
  return projects.filter((p) => p.category === categoryId).length;
}

export function formatIndex(index: number): string {
  return String(index + 1).padStart(2, '0');
}

export const STORAGE_KEY_CATEGORIES = 'through_adys_categories_v2';
export const STORAGE_KEY_PROJECTS = 'through_adys_projects_v2';

export function loadCategories(): Category[] {
  if (typeof window === 'undefined') return DEFAULT_CATEGORIES;
  try {
    const saved = localStorage.getItem(STORAGE_KEY_CATEGORIES);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch (e) {
    console.warn('Failed to parse saved categories, using defaults', e);
  }
  return DEFAULT_CATEGORIES;
}

export function loadProjects(): Project[] {
  if (typeof window === 'undefined') return DEFAULT_PROJECTS;
  try {
    const saved = localStorage.getItem(STORAGE_KEY_PROJECTS);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch (e) {
    console.warn('Failed to parse saved projects, using defaults', e);
  }
  return DEFAULT_PROJECTS;
}
`;
  };

  const copyExportCode = () => {
    navigator.clipboard.writeText(generateExportCode());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const filteredProjects =
    filterCat === 'all' ? projects : projects.filter((p) => p.category === filterCat);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-[#050B18]/85 backdrop-blur-md"
      />

      {/* Main Studio Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="relative w-full max-w-2xl max-h-[92vh] bg-[#0E1B38] border border-white/10 rounded-3xl shadow-2xl flex flex-col text-white overflow-hidden z-10"
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-400" />
            <div>
              <h2 className="text-base font-bold text-white tracking-tight">
                Content Studio & Data Manager
              </h2>
              <p className="text-[11px] text-slate-400 font-mono">
                Kelola Kategori, Proyek, dan Ekspor portfolioData.ts
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {onLockAdmin && (
              <button
                onClick={() => {
                  onLockAdmin();
                  onClose();
                }}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-amber-500/20 text-slate-400 hover:text-amber-300 transition-colors text-xs flex items-center gap-1"
                title="Kunci & Keluar Mode Owner (Tampilan Pelihat)"
              >
                <span className="text-[10px]">Kunci Akses</span>
              </button>
            )}
            <button
              onClick={handleResetDefaults}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-rose-500/20 text-slate-400 hover:text-rose-300 transition-colors text-xs flex items-center gap-1"
              title="Reset ke Data Asli"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="text-[10px] hidden sm:inline">Reset</span>
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center text-slate-300 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Disclaimer Notice Banner */}
        <div className="px-4 sm:px-5 py-2.5 bg-sky-950/40 border-b border-sky-500/20 text-[11px] text-sky-200/90 flex items-start gap-2 flex-shrink-0">
          <Info className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
          <p className="leading-snug">
            <strong>Catatan Pengelolaan:</strong> Penambahan data di studio ini langsung aktif di browser Anda.
            Untuk menyimpannya secara permanen ke file proyek, buka tab <strong>"Export Code"</strong> dan
            salin ke <code className="bg-black/30 px-1 py-0.5 rounded text-sky-300">src/data/portfolioData.ts</code>.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-white/10 px-4 sm:px-5 bg-white/[0.02] flex-shrink-0">
          <button
            onClick={() => setActiveTab('categories')}
            className={`py-3 px-3 sm:px-4 text-xs font-semibold border-b-2 flex items-center gap-1.5 transition-colors ${
              activeTab === 'categories'
                ? 'border-sky-400 text-sky-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Kategori ({categories.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('projects')}
            className={`py-3 px-3 sm:px-4 text-xs font-semibold border-b-2 flex items-center gap-1.5 transition-colors ${
              activeTab === 'projects'
                ? 'border-sky-400 text-sky-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Proyek ({projects.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('export')}
            className={`py-3 px-3 sm:px-4 text-xs font-semibold border-b-2 flex items-center gap-1.5 transition-colors ${
              activeTab === 'export'
                ? 'border-sky-400 text-sky-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Copy className="w-3.5 h-3.5" />
            <span>Export Code</span>
          </button>
        </div>

        {/* TAB CONTENTS */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-6">
          {/* TAB 1: KATEGORI */}
          {activeTab === 'categories' && (
            <div className="space-y-6">
              {/* Form Tambah Kategori */}
              <form onSubmit={handleAddCategory} className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-sky-400 font-bold flex items-center gap-1.5">
                    <Plus className="w-3.5 h-3.5" />
                    <span>Tambah Kategori Baru</span>
                  </h3>
                  <span className="text-[10px] text-slate-400 font-mono">Muncul otomatis di carousel</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] text-slate-300 font-mono uppercase">Nama Kategori *</label>
                    <input
                      type="text"
                      placeholder="e.g. FILMMAKING"
                      value={newCatTitle}
                      onChange={(e) => setNewCatTitle(e.target.value)}
                      required
                      className="w-full mt-1 px-3 py-2 rounded-xl bg-black/40 border border-white/15 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-400"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] text-slate-300 font-mono uppercase">ID Kategori (Kecil tanpa spasi)</label>
                    <input
                      type="text"
                      placeholder="e.g. filmmaking"
                      value={newCatId}
                      onChange={(e) => setNewCatId(e.target.value)}
                      className="w-full mt-1 px-3 py-2 rounded-xl bg-black/40 border border-white/15 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] text-slate-300 font-mono uppercase">Tagline Singkat</label>
                  <input
                    type="text"
                    placeholder="e.g. Cinematography, commercial video & music clips"
                    value={newCatTagline}
                    onChange={(e) => setNewCatTagline(e.target.value)}
                    className="w-full mt-1 px-3 py-2 rounded-xl bg-black/40 border border-white/15 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-400"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="sm:col-span-2">
                    <label className="text-[10px] text-slate-300 font-mono uppercase">URL / Path Gambar Cover</label>
                    <input
                      type="text"
                      placeholder="e.g. /images/categories/film.jpg atau URL online"
                      value={newCatCover}
                      onChange={(e) => setNewCatCover(e.target.value)}
                      className="w-full mt-1 px-3 py-2 rounded-xl bg-black/40 border border-white/15 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-400"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] text-slate-300 font-mono uppercase">Warna Aksen</label>
                    <div className="flex items-center gap-2 mt-1">
                      <input
                        type="color"
                        value={newCatColor}
                        onChange={(e) => setNewCatColor(e.target.value)}
                        className="w-9 h-9 rounded-lg bg-transparent cursor-pointer border border-white/20 p-0.5"
                      />
                      <span className="text-xs font-mono text-slate-300">{newCatColor}</span>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-[#0B1630] font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md active:scale-98"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Tambahkan Kategori Ini</span>
                </button>
              </form>

              {/* Daftar Kategori Saat Ini */}
              <div className="space-y-3">
                <h3 className="text-xs font-mono uppercase tracking-wider text-slate-300">
                  Daftar Kategori Terpasang ({categories.length})
                </h3>
                <div className="space-y-2">
                  {categories.map((cat, idx) => {
                    const count = projects.filter((p) => p.category === cat.id).length;
                    return (
                      <div
                        key={cat.id}
                        className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between gap-3"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <img
                            src={cat.coverImage}
                            alt={cat.title}
                            className="w-10 h-10 rounded-lg object-cover bg-slate-800 flex-shrink-0"
                          />
                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-bold text-white truncate">{cat.title}</span>
                              <span className="text-[10px] font-mono text-sky-400 bg-sky-950/60 px-1.5 py-0.5 rounded border border-sky-500/20">
                                {count} karya
                              </span>
                            </div>
                            <p className="text-[10px] text-slate-400 truncate max-w-sm">{cat.tagline}</p>
                          </div>
                        </div>

                        <button
                          onClick={() => handleDeleteCategory(cat.id)}
                          className="p-2 rounded-lg bg-white/5 hover:bg-rose-500/20 text-slate-400 hover:text-rose-300 transition-colors"
                          title="Hapus Kategori"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: PROYEK */}
          {activeTab === 'projects' && (
            <div className="space-y-6">
              {/* Form Tambah Proyek */}
              <form onSubmit={handleAddProject} className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-sky-400 font-bold flex items-center gap-1.5">
                    <Plus className="w-3.5 h-3.5" />
                    <span>Tambah Proyek Baru</span>
                  </h3>
                  <span className="text-[10px] text-slate-400 font-mono">Masuk ke kategori terpilih</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] text-slate-300 font-mono uppercase">Judul Proyek *</label>
                    <input
                      type="text"
                      placeholder="e.g. Modern Architecture Bali"
                      value={newProjTitle}
                      onChange={(e) => setNewProjTitle(e.target.value)}
                      required
                      className="w-full mt-1 px-3 py-2 rounded-xl bg-black/40 border border-white/15 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-400"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] text-slate-300 font-mono uppercase">Kategori Induk *</label>
                    <select
                      value={newProjCat}
                      onChange={(e) => setNewProjCat(e.target.value)}
                      className="w-full mt-1 px-3 py-2 rounded-xl bg-[#091224] border border-white/15 text-xs text-white focus:outline-none focus:border-sky-400"
                    >
                      {categories.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.title} ({c.id})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="text-[10px] text-slate-300 font-mono uppercase">Peran / Posisi</label>
                    <input
                      type="text"
                      placeholder="e.g. Creative Director"
                      value={newProjRole}
                      onChange={(e) => setNewProjRole(e.target.value)}
                      className="w-full mt-1 px-3 py-2 rounded-xl bg-black/40 border border-white/15 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-400"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] text-slate-300 font-mono uppercase">Tahun Proyek</label>
                    <input
                      type="text"
                      placeholder="e.g. 2024"
                      value={newProjYear}
                      onChange={(e) => setNewProjYear(e.target.value)}
                      className="w-full mt-1 px-3 py-2 rounded-xl bg-black/40 border border-white/15 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-400"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] text-slate-300 font-mono uppercase">Klien / Institusi (Opsional)</label>
                    <input
                      type="text"
                      placeholder="e.g. Studio Agency"
                      value={newProjClient}
                      onChange={(e) => setNewProjClient(e.target.value)}
                      className="w-full mt-1 px-3 py-2 rounded-xl bg-black/40 border border-white/15 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] text-slate-300 font-mono uppercase">Deskripsi Singkat</label>
                  <input
                    type="text"
                    placeholder="e.g. Dokumentasi fotografi monokrom dan editorial visual arsitektur..."
                    value={newProjShortDesc}
                    onChange={(e) => setNewProjShortDesc(e.target.value)}
                    className="w-full mt-1 px-3 py-2 rounded-xl bg-black/40 border border-white/15 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-400"
                  />
                </div>

                <div>
                  <label className="text-[10px] text-slate-300 font-mono uppercase">Cover Image (URL atau /images/...)</label>
                  <input
                    type="text"
                    placeholder="e.g. /images/projects/proyek-01/cover.jpg atau https://..."
                    value={newProjCover}
                    onChange={(e) => setNewProjCover(e.target.value)}
                    className="w-full mt-1 px-3 py-2 rounded-xl bg-black/40 border border-white/15 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-400"
                  />
                </div>

                <div>
                  <label className="text-[10px] text-slate-300 font-mono uppercase">Deliverables (Pisahkan dengan koma)</label>
                  <input
                    type="text"
                    placeholder="e.g. Visual Identity, Packaging, Art Direction"
                    value={newProjDeliverables}
                    onChange={(e) => setNewProjDeliverables(e.target.value)}
                    className="w-full mt-1 px-3 py-2 rounded-xl bg-black/40 border border-white/15 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-400"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div>
                    <label className="text-[10px] text-slate-300 font-mono uppercase">Gambar Tambahan Galeri (Opsional)</label>
                    <input
                      type="text"
                      placeholder="URL gambar dokumentasi"
                      value={newProjGalleryUrl}
                      onChange={(e) => setNewProjGalleryUrl(e.target.value)}
                      className="w-full mt-1 px-3 py-2 rounded-xl bg-black/40 border border-white/15 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-400"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] text-slate-300 font-mono uppercase">Keterangan Gambar Galeri</label>
                    <input
                      type="text"
                      placeholder="e.g. Detail Typography & Packaging"
                      value={newProjGalleryCaption}
                      onChange={(e) => setNewProjGalleryCaption(e.target.value)}
                      className="w-full mt-1 px-3 py-2 rounded-xl bg-black/40 border border-white/15 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-400"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-[#0B1630] font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md active:scale-98"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Tambahkan Proyek Ini</span>
                </button>
              </form>

              {/* Filter & Daftar Proyek */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-slate-300">
                    Daftar Proyek ({filteredProjects.length})
                  </h3>
                  <select
                    value={filterCat}
                    onChange={(e) => setFilterCat(e.target.value)}
                    className="px-2 py-1 rounded-lg bg-[#091224] border border-white/15 text-[11px] text-slate-200"
                  >
                    <option value="all">Semua Kategori</option>
                    {categories.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2 max-h-[340px] overflow-y-auto pr-1">
                  {filteredProjects.map((proj, idx) => (
                    <div
                      key={proj.id}
                      className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <img
                          src={proj.coverImage}
                          alt={proj.title}
                          className="w-11 h-11 rounded-lg object-cover bg-slate-800 flex-shrink-0"
                        />
                        <div className="min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs font-bold text-white truncate">{proj.title}</span>
                            <span className="text-[10px] text-sky-400 font-mono">({proj.category})</span>
                          </div>
                          <p className="text-[10px] text-slate-400 font-mono">
                            {proj.year} · {proj.role}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => handleMoveProject(idx, 'up')}
                          disabled={idx === 0}
                          className="p-1.5 rounded bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white disabled:opacity-20"
                          title="Naikkan Urutan"
                        >
                          <ArrowUp className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleMoveProject(idx, 'down')}
                          disabled={idx === filteredProjects.length - 1}
                          className="p-1.5 rounded bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white disabled:opacity-20"
                          title="Turunkan Urutan"
                        >
                          <ArrowDown className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleDeleteProject(proj.id)}
                          className="p-1.5 rounded bg-white/5 hover:bg-rose-500/20 text-slate-400 hover:text-rose-300 transition-colors ml-1"
                          title="Hapus Proyek"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: EXPORT CODE */}
          {activeTab === 'export' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-sky-950/30 border border-sky-500/20 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-mono uppercase tracking-widest text-sky-300 font-bold">
                    Salin Kode TypeScript untuk Penyimpanan Permanen
                  </h3>
                  <button
                    onClick={copyExportCode}
                    className="px-3 py-1.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-[#0B1630] font-bold text-xs flex items-center gap-1.5 transition-colors shadow"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Tersalin!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Salin Seluruh Kode</span>
                      </>
                    )}
                  </button>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Jika Anda telah menambah atau mengedit kategori/proyek di studio ini dan ingin menyimpannya
                  selamanya di dalam repositori website, cukup klik <strong>"Salin Seluruh Kode"</strong> di atas,
                  lalu timpa isi file <code className="text-sky-300 font-mono">src/data/portfolioData.ts</code>.
                </p>
              </div>

              <div className="relative">
                <pre className="p-4 rounded-xl bg-black/60 border border-white/10 text-[11px] font-mono text-slate-300 max-h-[380px] overflow-auto select-all">
                  {generateExportCode()}
                </pre>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};
