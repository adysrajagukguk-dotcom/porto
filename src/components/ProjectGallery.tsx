import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ProjectImage } from '../types/portfolio';
import { ImageWithFallback } from './ImageWithFallback';
import { Maximize2, X } from 'lucide-react';

interface ProjectGalleryProps {
  coverImage: string;
  projectTitle: string;
  year: string;
  galleryImages: ProjectImage[];
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({
  coverImage,
  projectTitle,
  year,
  galleryImages,
}) => {
  const [enlargedImage, setEnlargedImage] = useState<ProjectImage | null>(null);

  const getAspectClass = (aspect?: string) => {
    switch (aspect) {
      case 'square':
        return 'aspect-square h-auto';
      case 'portrait':
        return 'aspect-[3/4] h-auto';
      case 'wide':
        return 'aspect-[21/9] h-auto';
      case 'landscape':
      default:
        return 'h-52 sm:h-64';
    }
  };

  return (
    <div className="space-y-6">
      {/* HERO POLAROID SHOWCASE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35 }}
        className="bg-[#FBFBFC] rounded-2xl p-3 sm:p-4 pb-4 shadow-[0_16px_40px_-10px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.7)]"
      >
        <div
          onClick={() =>
            setEnlargedImage({
              url: coverImage,
              caption: `${projectTitle} — Main Showcase`,
            })
          }
          className="group relative w-full h-64 sm:h-80 rounded-xl overflow-hidden bg-slate-900 shadow-inner cursor-pointer"
        >
          <ImageWithFallback
            src={coverImage}
            alt={projectTitle}
            fallbackTitle={projectTitle}
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 pointer-events-none" />

          <div className="absolute bottom-3 right-3 px-2.5 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
            <Maximize2 className="w-3.5 h-3.5" />
            <span className="text-[10px] font-mono uppercase tracking-wider">Tap to Enlarge</span>
          </div>
        </div>

        <div className="pt-3 px-1 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <span>FIGURE 01 // HERO SHOWCASE</span>
          <span>{year}</span>
        </div>
      </motion.div>

      {/* ADDITIONAL GALLERY SNAPSHOTS */}
      {galleryImages && galleryImages.length > 0 && (
        <div className="space-y-4 pt-2">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-mono uppercase tracking-widest text-slate-300">
              Additional Design Images & Process
            </h2>
            <span className="text-[11px] font-mono text-slate-500">
              {galleryImages.length} Snapshots
            </span>
          </div>

          <div className="space-y-4">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                onClick={() => setEnlargedImage(img)}
                className="group cursor-pointer bg-[#FBFBFC] rounded-2xl p-3 pb-3.5 shadow-md hover:shadow-xl transition-all"
              >
                <div
                  className={`relative w-full ${getAspectClass(img.aspectRatio)} rounded-xl overflow-hidden bg-slate-900 shadow-inner`}
                >
                  <ImageWithFallback
                    src={img.url}
                    alt={img.caption || `Image ${i + 1}`}
                    fallbackTitle={img.caption}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute bottom-2.5 right-2.5 p-1.5 rounded-md bg-black/60 backdrop-blur-md border border-white/20 text-white opacity-80 group-hover:opacity-100">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                {img.caption && (
                  <p className="pt-2 px-1 text-xs text-slate-700 font-medium leading-snug">
                    {img.caption}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* FULLSCREEN LIGHTBOX MODAL */}
      <AnimatePresence>
        {enlargedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setEnlargedImage(null)}
              className="absolute inset-0 cursor-pointer"
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative z-10 max-w-3xl w-full bg-[#0E1B38] border border-white/10 rounded-2xl p-3 sm:p-4 shadow-2xl"
            >
              <div className="flex items-center justify-between pb-3 px-1">
                <p className="text-xs text-slate-300 font-mono truncate">
                  {enlargedImage.caption || projectTitle}
                </p>
                <button
                  onClick={() => setEnlargedImage(null)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
                  aria-label="Close Lightbox"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="w-full max-h-[75vh] overflow-hidden rounded-xl bg-black flex items-center justify-center">
                <img
                  src={enlargedImage.url}
                  alt={enlargedImage.caption || projectTitle}
                  className="w-full h-auto max-h-[75vh] object-contain"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
