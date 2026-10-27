import React, { createContext, useContext, useState } from 'react';

const LightboxContext = createContext();

export const LightboxProvider = ({ children, projects = [] }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openLightbox = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    if (!selectedProject || projects.length === 0) return;
    const currentIndex = projects.findIndex(p => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % projects.length;
    setSelectedProject(projects[nextIndex]);
  };

  const prevImage = () => {
    if (!selectedProject || projects.length === 0) return;
    const currentIndex = projects.findIndex(p => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    setSelectedProject(projects[prevIndex]);
  };

  return (
    <LightboxContext.Provider
      value={{
        selectedProject,
        isOpen: !!selectedProject,
        openLightbox,
        closeLightbox,
        nextImage,
        prevImage,
      }}
    >
      {children}
    </LightboxContext.Provider>
  );
};

export const useLightbox = () => {
  const context = useContext(LightboxContext);
  if (!context) {
    throw new Error('useLightbox must be used within a LightboxProvider');
  }
  return context;
};
