import React from 'react';
import { ArrowUp, Download, Github, Linkedin, Mail } from 'lucide-react';
import { ProfileData } from '../types/portfolio';

interface FooterProps {
  profile: ProfileData;
  lang: 'bn' | 'en';
  onDownloadZip: () => void;
  onOpenCustomizer: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  profile,
  lang,
  onDownloadZip,
  onOpenCustomizer,
}) => {
  const isBn = lang === 'bn';
  const name = isBn ? profile.nameBn : profile.name;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100 dark:border-slate-800">
          <div>
            <div className="text-lg font-bold text-slate-900 dark:text-white">
              {name}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              {isBn ? profile.titleBn : profile.title} · {isBn ? profile.locationBn : profile.location}
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium text-slate-600 dark:text-slate-300">
            <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {isBn ? 'পরিচিতি' : 'About'}
            </a>
            <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {isBn ? 'প্রজেক্ট' : 'Projects'}
            </a>
            <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {isBn ? 'দক্ষতা' : 'Skills'}
            </a>
            <a href="#experience" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {isBn ? 'অভিজ্ঞতা' : 'Experience'}
            </a>
            <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {isBn ? 'যোগাযোগ' : 'Contact'}
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onDownloadZip}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-900/50 rounded-md transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{isBn ? 'জিপ ডাউনলোড' : 'Download ZIP'}</span>
            </button>

            <button
              onClick={scrollToTop}
              title={isBn ? "উপরে যান" : "Scroll to top"}
              className="p-2 text-slate-500 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 rounded-md transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} {profile.name}. {isBn ? 'সর্বস্বত্ব সংরক্ষিত।' : 'All rights reserved.'}
          </div>

          <div className="flex items-center gap-5">
            <a
              href={`mailto:${profile.email}`}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{profile.email}</span>
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
