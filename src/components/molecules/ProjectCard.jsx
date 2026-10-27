import React from 'react';
import { Eye, ArrowUpRight } from 'lucide-react';
import { Badge } from '../atoms/Badge';
import { useLightbox } from '../../context/LightboxContext';

export const ProjectCard = ({ project, priority = false }) => {
  const { openLightbox } = useLightbox();

  return (
    <div
      onClick={() => openLightbox(project)}
      className="group relative cursor-pointer overflow-hidden rounded-2xl bg-neutral-900 border border-neutral-200/20 dark:border-white/5 transition-all duration-500 hover:shadow-2xl hover:border-neutral-400 dark:hover:border-white/20"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox(project);
        }
      }}
      aria-label={`View ${project.title}`}
    >
      {/* Image container */}
      <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full overflow-hidden bg-neutral-950">
        <img
          src={project.coverImage}
          alt={project.title}
          loading={priority ? 'eager' : 'lazy'}
          className="h-full w-full object-cover object-center filter grayscale contrast-110 transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0 group-hover:contrast-100"
        />

        {/* Gradient dark fade from bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
          <Badge variant="default" size="xs">
            {project.category}
          </Badge>
          <span className="text-[11px] font-mono text-neutral-300 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
            {project.year}
          </span>
        </div>

        {/* Hover quick preview button icon */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100 z-10 pointer-events-none">
          <div className="w-12 h-12 rounded-full bg-white/90 text-black flex items-center justify-center shadow-xl backdrop-blur-sm">
            <Eye className="w-5 h-5" />
          </div>
        </div>

        {/* Bottom content info */}
        <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 text-white z-10 transition-transform duration-300">
          <div className="flex items-center justify-between gap-2 mb-1">
            <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-neutral-100 flex items-center gap-1.5">
              <span>{project.title}</span>
              <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
            </h3>
          </div>

          <p className="text-xs text-neutral-300 line-clamp-1 mb-2 font-light">
            {project.client} • {project.description}
          </p>

          <div className="flex items-center gap-2 text-[10px] font-mono text-neutral-400">
            <span className="truncate">{project.cameraInfo}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
