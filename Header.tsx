import React from 'react';
import { Download, Sliders, Moon, Sun, Globe } from 'lucide-react';
import { ProfileData } from '../types/portfolio';

interface HeaderProps {
  profile: ProfileData;
  lang: 'bn' | 'en';
  setLang: (lang: 'bn' | 'en') => void;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenCustomizer: () => void;
  onOpenZipModal: () => void;
  onDirectDownloadZip: () => void;
  isDownloading: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  profile,
  lang,
  setLang,
  darkMode,
  setDarkMode,
  onOpenCustomizer,
  onOpenZipModal,
  onDirectDownloadZip,
  isDownloading,
}) => {
  const isBn = lang === 'bn';
  const name = isBn ? profile.nameBn : profile.name;

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar 3-Zone Contract: Zone 1 (Wordmark) - Zone 2 (Nav Links) - Zone 3 (Action) */}
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Brand Wordmark (Single text element) */}
          <a
            href="#"
            className="text-lg font-bold tracking-tight text-slate-900 dark:text-white whitespace-nowrap shrink-0 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            {name}
          </a>

          {/* Zone 2: Clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600 dark:text-slate-300">
            <a href="#about" className="hover:text-slate-900 dark:hover:text-white transition-colors whitespace-nowrap shrink-0">
              {isBn ? 'পরিচিতি' : 'About'}
            </a>
            <a href="#projects" className="hover:text-slate-900 dark:hover:text-white transition-colors whitespace-nowrap shrink-0">
              {isBn ? 'প্রজেক্ট' : 'Projects'}
            </a>
            <a href="#skills" className="hover:text-slate-900 dark:hover:text-white transition-colors whitespace-nowrap shrink-0">
              {isBn ? 'দক্ষতা' : 'Skills'}
            </a>
            <a href="#experience" className="hover:text-slate-900 dark:hover:text-white transition-colors whitespace-nowrap shrink-0">
              {isBn ? 'অভিজ্ঞতা' : 'Experience'}
            </a>
            <a href="#contact" className="hover:text-slate-900 dark:hover:text-white transition-colors whitespace-nowrap shrink-0">
              {isBn ? 'যোগাযোগ' : 'Contact'}
            </a>
          </nav>

          {/* Zone 3: Controls & Primary Action */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Language switcher */}
            <button
              onClick={() => setLang(isBn ? 'en' : 'bn')}
              title={isBn ? "Switch to English" : "বাংলায় দেখুন"}
              className="px-2.5 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors flex items-center gap-1.5"
            >
              <Globe className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>{isBn ? 'English' : 'বাংলা'}</span>
            </button>

            {/* Dark mode toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
            </button>

            {/* Customizer button */}
            <button
              onClick={onOpenCustomizer}
              title={isBn ? "ওয়েবসাইট কাস্টমাইজ করুন" : "Customize Website"}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-md transition-colors whitespace-nowrap shrink-0"
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>{isBn ? 'এডিট করুন' : 'Edit Info'}</span>
            </button>

            {/* Primary Action: Download ZIP */}
            <button
              onClick={onDirectDownloadZip}
              disabled={isDownloading}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-md shadow-xs transition-colors whitespace-nowrap shrink-0 disabled:opacity-75"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{isDownloading ? (isBn ? 'তৈরি হচ্ছে...' : 'Generating...') : (isBn ? 'জিপ ডাউনলোড' : 'Download ZIP')}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
