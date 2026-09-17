import React, { useState } from 'react';
import { ExternalLink, Sparkles, ArrowRight, Layers } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function ProjectsSection() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="relative py-28 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-xs font-mono uppercase tracking-wider mb-3">
            <span>03 // Featured Works</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-pink-200/70 text-xs sm:text-sm mt-2 font-mono max-w-xl mx-auto">
            Engineered systems combining AI, full-stack architectures & algorithms.
          </p>
        </div>

        {/* Storyboard Slide 5: Reflective Floor Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-3xl p-6 sm:p-8 bg-[#110526]/85 backdrop-blur-xl border border-purple-900/60 hover:border-pink-400/60 transition-all duration-500 flex flex-col justify-between shadow-[0_10px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_15px_50px_rgba(236,72,153,0.25)] hover:-translate-y-1"
            >
              {/* Top Accent Line */}
              <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-pink-400/40 to-transparent group-hover:via-pink-400 transition-all" />

              <div>
                {/* Category & Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-pink-500/15 border border-pink-400/40 text-pink-300">
                    {project.badge}
                  </span>
                  <span className="text-xs font-mono text-purple-300/80">
                    {project.category}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-pink-300 transition-colors mb-3">
                  {project.title}
                </h3>

                {/* Short Description */}
                <p className="text-pink-100/70 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-[#1c0838] border border-purple-800/60 text-pink-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons & Reflective Ground Bar */}
              <div>
                <div className="flex items-center gap-3 pt-4 border-t border-purple-900/50">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white shadow-[0_0_15px_rgba(236,72,153,0.35)] flex items-center justify-center gap-2 transition-all"
                  >
                    <Layers className="w-4 h-4" />
                    <span>Explore Architecture</span>
                  </button>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-[#1c0838] border border-purple-800/60 text-purple-200 hover:text-pink-300 hover:border-pink-400 transition-all"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-[#1c0838] border border-purple-800/60 text-purple-200 hover:text-pink-300 hover:border-pink-400 transition-all"
                      aria-label={`Open live demo of ${project.title}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>

                {/* Storyboard Slide 5: Reflective Ground Shadow */}
                <div className="mt-4 h-3 rounded-full bg-gradient-to-r from-transparent via-pink-500/20 to-transparent blur-sm pointer-events-none group-hover:via-pink-500/35 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Storyboard Slide 6: 3D Multi-Node Architecture Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
