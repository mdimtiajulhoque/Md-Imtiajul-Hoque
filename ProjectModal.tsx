import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2 } from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  lang: 'bn' | 'en';
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, lang }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const isBn = lang === 'bn';
  const title = isBn ? project.titleBn : project.title;
  const category = isBn ? project.categoryBn : project.category;
  const fullDesc = isBn ? project.fullDescriptionBn : project.fullDescription;
  const metrics = isBn ? project.metricsBn : project.metrics;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl max-w-3xl w-full overflow-hidden z-10 my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-white bg-slate-900/60 hover:bg-slate-900/90 rounded-full transition-colors backdrop-blur-xs"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Frame */}
        <div className="relative aspect-16/9 w-full bg-slate-950">
          <img
            src={project.image}
            alt={title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-4 left-4">
            <span className="bg-slate-900/90 text-white text-xs font-semibold px-3 py-1 rounded-md backdrop-blur-xs">
              {category}
            </span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <div className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 mb-1">
              {metrics || (isBn ? 'উৎপাদনমুখী ওয়েব অ্যাপ্লিকেশন' : 'Production Web Application')}
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              {title}
            </h3>
          </div>

          <div className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed space-y-3">
            <p>{fullDesc}</p>
            <p>
              {isBn
                ? 'এই সিস্টেমে আধুনিক রেসপনসিভ গ্রিড, এপিআই অপটিমাইজেশন, দ্রুত ডাটা ফেচিং এবং মোবাইল বান্ধব ইন্টারফেস নিশ্চিত করা হয়েছে।'
                : 'Engineered with strict code splitting, optimized rendering pipelines, and accessible UI interactions conforming to modern web standards.'}
            </p>
          </div>

          {/* Tech stack */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200 mb-3">
              {isBn ? 'ব্যবহৃত প্রযুক্তি ও লাইব্রেরি:' : 'Technologies & Libraries:'}
            </div>
            <div className="flex flex-wrap gap-2 text-xs">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-md font-mono border border-slate-200 dark:border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>{isBn ? 'লাইভ প্রিভিউ দেখুন' : 'Live Preview Demo'}</span>
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg border border-slate-300 dark:border-slate-700 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>{isBn ? 'সোর্স কোড রেপো' : 'View GitHub Repo'}</span>
              </a>
            )}

            <button
              onClick={onClose}
              className="ml-auto px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              {isBn ? 'বন্ধ করুন' : 'Close'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
