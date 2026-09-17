import React, { useState } from 'react';
import { ExternalLink, Sparkles, ArrowRight, Layers } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import ProjectModal from './ProjectModal';

export default function ProjectsSection() {
  const { currentTheme } = useTheme();
  const projects = portfolioData.projects || [];
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="relative py-28 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono uppercase tracking-wider mb-3"
            style={{
              backgroundColor: `${currentTheme.primary}20`,
              border: `1px solid ${currentTheme.primary}50`,
              color: currentTheme.textAccent,
            }}
          >
            <span>03 // Featured Works</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm mt-2 font-mono max-w-xl mx-auto">
            Engineered systems combining AI, full-stack architectures & algorithms.
          </p>
        </div>

        {/* Storyboard Slide 5: Reflective Floor Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project) => {
            const techList = project.tech || project.technologies || [];
            const projectDesc = project.description || project.shortDesc || '';
            const liveUrl = project.live || project.liveDemo;

            return (
              <div
                key={project.id || project.title}
                className="group relative rounded-3xl p-6 sm:p-8 bg-[#110526]/85 backdrop-blur-xl border transition-all duration-500 flex flex-col justify-between shadow-[0_10px_40px_rgba(0,0,0,0.6)] hover:-translate-y-1"
                style={{
                  borderColor: currentTheme.border,
                }}
              >
                {/* Top Accent Line */}
                <div
                  className="absolute inset-x-8 top-0 h-[1px] transition-all"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${currentTheme.primary}80, transparent)`,
                  }}
                />

                <div>
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-mono"
                      style={{
                        backgroundColor: `${currentTheme.primary}20`,
                        border: `1px solid ${currentTheme.primary}40`,
                        color: currentTheme.textAccent,
                      }}
                    >
                      {project.badge || 'Project'}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {project.category}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3
                    className="text-xl sm:text-2xl font-bold text-white transition-colors mb-3 group-hover:text-pink-300"
                  >
                    {project.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {projectDesc}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {techList.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono bg-[#1c0838]/80 border text-slate-200"
                        style={{ borderColor: `${currentTheme.primary}40` }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons & Reflective Ground Bar */}
                <div>
                  <div
                    className="flex items-center gap-3 pt-4 border-t"
                    style={{ borderColor: `${currentTheme.border}` }}
                  >
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold text-white flex items-center justify-center gap-2 transition-all"
                      style={{
                        background: `linear-gradient(135deg, ${currentTheme.primary}, ${currentTheme.secondary})`,
                        boxShadow: `0 0 20px ${currentTheme.glow}`,
                      }}
                    >
                      <Layers className="w-4 h-4" />
                      <span>Explore Architecture</span>
                    </button>

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-[#1c0838] border text-slate-300 hover:text-white transition-all"
                        style={{ borderColor: `${currentTheme.primary}40` }}
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}

                    {liveUrl && (
                      <a
                        href={liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-[#1c0838] border text-slate-300 hover:text-white transition-all"
                        style={{ borderColor: `${currentTheme.primary}40` }}
                        aria-label={`Open live demo of ${project.title}`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  {/* Reflective Ground Shadow */}
                  <div
                    className="mt-4 h-3 rounded-full blur-sm pointer-events-none transition-all"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${currentTheme.primary}30, transparent)`,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3D Multi-Node Architecture Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
