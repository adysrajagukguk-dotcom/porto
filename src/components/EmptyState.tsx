import React from 'react';
import { FolderPlus, ArrowLeft } from 'lucide-react';

interface EmptyStateProps {
  title?: string;
  description?: string;
  onBack?: () => void;
  actionText?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title = 'Belum Ada Proyek di Kategori Ini',
  description = 'Kategori ini sudah siap! Anda dapat menambahkan proyek baru dengan memasukkan data ke file src/data/portfolioData.ts.',
  onBack,
  actionText = 'Kembali ke Kategori',
}) => {
  return (
    <div className="py-16 px-6 text-center max-w-sm mx-auto flex flex-col items-center justify-center">
      <div className="w-16 h-16 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-sky-400 mb-4 shadow-xl">
        <FolderPlus className="w-8 h-8 stroke-[1.5]" />
      </div>

      <h3 className="text-base sm:text-lg font-bold text-white mb-2 tracking-tight">
        {title}
      </h3>

      <p className="text-xs text-slate-400 leading-relaxed mb-6 font-light">
        {description}
      </p>

      {onBack && (
        <button
          onClick={onBack}
          className="py-2.5 px-4 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] border border-white/10 text-xs font-semibold text-slate-200 hover:text-white transition-all flex items-center gap-2 active:scale-95 shadow-md"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-sky-400" />
          <span>{actionText}</span>
        </button>
      )}
    </div>
  );
};
