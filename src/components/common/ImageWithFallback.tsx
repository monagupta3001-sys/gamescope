import React, { useState } from 'react';
import { Gamepad2 } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
  className?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  fallbackTitle,
  className = '',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950/40 to-slate-950 p-4 text-center border border-white/5 ${className}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent" />
        <Gamepad2 className="h-8 w-8 text-indigo-400/80 mb-2" />
        <span className="text-xs font-medium text-slate-300 max-w-[85%] truncate">
          {fallbackTitle || alt || 'GameScope Media'}
        </span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-slate-950 ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 animate-pulse bg-slate-900/80" />
      )}
      <img
        src={src}
        alt={alt || 'Gaming media'}
        referrerPolicy="no-referrer"
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        {...props}
      />
    </div>
  );
};
