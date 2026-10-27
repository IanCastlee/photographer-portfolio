import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Camera, Info } from 'lucide-react';
import { useLightbox } from '../../context/LightboxContext';
import { Badge } from '../atoms/Badge';

export const LightboxModal = () => {
  const { selectedProject, isOpen, closeLightbox, nextImage, prevImage } = useLightbox();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeLightbox, nextImage, prevImage]);

  if (!isOpen || !selectedProject) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl animate-fadeIn p-4 sm:p-6 md:p-10"
      role="dialog"
      aria-modal="true"
      onClick={closeLightbox}
    >
      {/* Top action controls */}
      <div
        className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between text-white z-20 pointer-events-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <Badge variant="default" size="sm">
            {selectedProject.category}
          </Badge>
          <span className="text-xs font-mono text-neutral-400">
            {selectedProject.year} • {selectedProject.client}
          </span>
        </div>

        <button
          type="button"
          onClick={closeLightbox}
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors backdrop-blur-md"
          aria-label="Close image viewer"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Prev / Next Buttons */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          prevImage();
        }}
        className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all z-20 backdrop-blur-md"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          nextImage();
        }}
        className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all z-20 backdrop-blur-md"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image and Info modal */}
      <div
        className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center justify-center z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative max-h-[70vh] flex items-center justify-center overflow-hidden rounded-xl">
          <img
            src={selectedProject.coverImage}
            alt={selectedProject.title}
            className="max-h-[70vh] max-w-full object-contain rounded-xl shadow-2xl transition-all duration-300"
          />
        </div>

        {/* Caption & Technical Details */}
        <div className="mt-4 w-full max-w-3xl text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4 bg-neutral-900/90 border border-white/10 p-4 rounded-xl backdrop-blur-md text-white">
          <div>
            <h3 className="text-base sm:text-lg font-bold tracking-tight">
              {selectedProject.title}
            </h3>
            <p className="text-xs text-neutral-300 font-light mt-0.5 max-w-xl">
              {selectedProject.description}
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 bg-black/60 px-3 py-1.5 rounded-lg border border-white/5 shrink-0">
            <Camera className="w-3.5 h-3.5 text-neutral-300" />
            <span>{selectedProject.cameraInfo}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LightboxModal;
