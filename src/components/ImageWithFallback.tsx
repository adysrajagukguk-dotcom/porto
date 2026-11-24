import React, { useState } from 'react';
import { ImageOff, Camera } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src?: string;
  alt: string;
  fallbackTitle?: string;
  aspectRatioClass?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  fallbackTitle,
  className = '',
  aspectRatioClass = 'aspect-[4/3]',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (!src || hasError) {
    return (
      <div
        className={`w-full ${aspectRatioClass} bg-slate-900 border border-white/10 rounded-xl flex flex-col items-center justify-center p-4 text-center select-none ${className}`}
      >
        <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 mb-2">
          {src ? <ImageOff className="w-5 h-5 text-slate-500" /> : <Camera className="w-5 h-5 text-sky-400" />}
        </div>
        <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider truncate max-w-[90%]">
          {fallbackTitle || alt || 'Image Preview'}
        </p>
        <span className="text-[9px] text-slate-500 font-sans mt-0.5">
          {hasError ? 'Failed to load image' : 'Image pending upload'}
        </span>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full overflow-hidden">
      {isLoading && (
        <div className="absolute inset-0 bg-slate-800 animate-pulse flex items-center justify-center z-0">
          <Camera className="w-6 h-6 text-slate-600 animate-bounce" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
        className={`${className} transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        {...props}
      />
    </div>
  );
};
