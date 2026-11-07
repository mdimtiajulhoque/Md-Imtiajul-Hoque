import React, { useState } from 'react';
import { ArrowUpRight, Github, ExternalLink, Layers } from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectsProps {
  projects: Project[];
  lang: 'bn' | 'en';
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ projects, lang, onSelectProject }) => {
  const isBn = lang === 'bn';
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = ['all', 'Full Stack', 'Frontend'];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Category Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
              {isBn ? 'নির্বাচিত কাজসমূহ' : 'Featured Work'}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white text-balance">
              {isBn ? 'সাম্প্রতিক সফটওয়্যার ও ওয়েব প্রজেক্ট' : 'Recent Engineering Projects'}
            </h2>
          </div>

          {/* Interactive filter tabs (functional buttons with click handlers) */}
          <div className="inline-flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-lg shrink-0">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 ${
                activeCategory === 'all'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {isBn ? 'সকল প্রজেক্ট' : 'All Projects'}
            </button>
            <button
              onClick={() => setActiveCategory('Full Stack')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 ${
                activeCategory === 'Full Stack'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {isBn ? 'ফুল-স্ট্যাক' : 'Full Stack'}
            </button>
            <button
              onClick={() => setActiveCategory('Frontend')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 ${
                activeCategory === 'Frontend'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {isBn ? 'ফ্রন্টএন্ড' : 'Frontend'}
            </button>
          </div>
        </div>

        {/* Projects Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const title = isBn ? project.titleBn : project.title;
            const description = isBn ? project.descriptionBn : project.description;
            const category = isBn ? project.categoryBn : project.category;
            const metrics = isBn ? project.metricsBn : project.metrics;

            return (
              <div
                key={project.id}
                className="group flex flex-col bg-slate-50 dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700/80 overflow-hidden hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-200"
              >
                {/* Media frame */}
                <div
                  className="relative aspect-16/10 w-full overflow-hidden bg-slate-200 dark:bg-slate-700 cursor-pointer"
                  onClick={() => onSelectProject(project)}
                >
                  <img
                    src={project.image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  {/* Category kicker overlay */}
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-xs text-white text-xs font-semibold px-2.5 py-1 rounded-md">
                    {category}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-1">
                  {/* Clean unboxed metadata row */}
                  {metrics && (
                    <div className="text-xs text-blue-600 dark:text-blue-400 font-mono font-medium mb-2 tabular-nums">
                      {metrics}
                    </div>
                  )}

                  <h3
                    className="text-lg font-bold text-slate-900 dark:text-white mb-2 cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    onClick={() => onSelectProject(project)}
                  >
                    {title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3 mb-4 flex-1">
                    {description}
                  </p>

                  {/* Tech stack as clean unboxed text with subtle dividers */}
                  <div className="text-xs text-slate-500 dark:text-slate-400 mb-6 flex flex-wrap items-center gap-1.5">
                    {project.technologies.map((tech, i) => (
                      <React.Fragment key={tech}>
                        <span className="font-mono text-slate-700 dark:text-slate-300">{tech}</span>
                        {i < project.technologies.length - 1 && <span aria-hidden="true" className="text-slate-400">·</span>}
                      </React.Fragment>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700/60 mt-auto">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 inline-flex items-center gap-1 transition-colors"
                    >
                      <span>{isBn ? 'বিস্তারিত দেখুন' : 'Case Study Details'}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center gap-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
                          title="View Github Code"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
                          title="Open Live Preview"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
