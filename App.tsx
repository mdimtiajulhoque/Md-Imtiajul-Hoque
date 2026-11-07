import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { ProjectModal } from './components/ProjectModal';
import { CustomizerModal } from './components/CustomizerModal';
import { ZipExportModal } from './components/ZipExportModal';
import { Footer } from './components/Footer';
import { defaultProfile } from './data/defaultProfile';
import { ProfileData, Project } from './types/portfolio';
import { downloadPortfolioZip } from './utils/zipGenerator';
import { Download, Sliders, CheckCircle, Sparkles, X } from 'lucide-react';

export default function App() {
  const [profile, setProfile] = useState<ProfileData>(() => {
    const saved = localStorage.getItem('rafi_portfolio_profile');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return defaultProfile;
      }
    }
    return defaultProfile;
  });

  const [lang, setLang] = useState<'bn' | 'en'>('bn');
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const [isZipModalOpen, setIsZipModalOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [zipDownloaded, setZipDownloaded] = useState(false);
  const [showWelcomeBanner, setShowWelcomeBanner] = useState(true);

  // Sync dark mode class on document element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Persist profile updates
  const handleSaveProfile = (updated: ProfileData) => {
    setProfile(updated);
    localStorage.setItem('rafi_portfolio_profile', JSON.stringify(updated));
  };

  // Trigger ZIP download
  const handleDownloadZip = async () => {
    try {
      setIsDownloading(true);
      await downloadPortfolioZip(profile, lang);
      setZipDownloaded(true);
      setTimeout(() => setZipDownloaded(false), 4000);
    } catch (err) {
      console.error('Failed to generate ZIP archive:', err);
    } finally {
      setIsDownloading(false);
    }
  };

  const isBn = lang === 'bn';

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col transition-colors selection:bg-blue-600 selection:text-white">
      {/* Top Welcome Notification for the user's specific request */}
      {showWelcomeBanner && (
        <div className="bg-blue-600 dark:bg-blue-700 text-white text-xs py-2.5 px-4 transition-colors">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-300 shrink-0" />
              <span>
                {isBn
                  ? `আপনার নামে (${profile.nameBn}) সম্পূর্ণ ওয়েবসাইট প্রস্তুত করা হয়েছে! এখনই সোর্স কোড জিপ (ZIP) ডাউনলোড করতে পারেন।`
                  : `Your personalized website for ${profile.name} is ready! You can download the complete ZIP package instantly.`}
              </span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={handleDownloadZip}
                disabled={isDownloading}
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-white text-blue-700 hover:bg-blue-50 font-semibold rounded text-xs transition-colors shadow-2xs whitespace-nowrap"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{isBn ? 'জিপ ডাউনলোড' : 'Download ZIP'}</span>
              </button>
              <button
                onClick={() => setShowWelcomeBanner(false)}
                className="p-1 hover:bg-blue-700 dark:hover:bg-blue-800 rounded text-blue-100 hover:text-white transition-colors"
                title="Dismiss"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Top Navigation */}
      <Header
        profile={profile}
        lang={lang}
        setLang={setLang}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
        onOpenZipModal={() => setIsZipModalOpen(true)}
        onDirectDownloadZip={handleDownloadZip}
        isDownloading={isDownloading}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          profile={profile}
          lang={lang}
          onDownloadZip={handleDownloadZip}
          onOpenZipModal={() => setIsZipModalOpen(true)}
          isDownloading={isDownloading}
          zipDownloaded={zipDownloaded}
        />

        {/* About Section */}
        <About profile={profile} lang={lang} />

        {/* Projects Section */}
        <Projects
          projects={profile.projects}
          lang={lang}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* Skills Section */}
        <Skills skills={profile.skills} lang={lang} />

        {/* Experience & Education Section */}
        <Experience
          experiences={profile.experiences}
          education={profile.education}
          lang={lang}
        />

        {/* Contact Section */}
        <Contact profile={profile} lang={lang} />
      </main>

      {/* Footer */}
      <Footer
        profile={profile}
        lang={lang}
        onDownloadZip={handleDownloadZip}
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
      />

      {/* Floating Action Button for Quick Customization & ZIP on Mobile */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col gap-2.5 sm:hidden">
        <button
          onClick={handleDownloadZip}
          disabled={isDownloading}
          className="p-3.5 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 active:scale-95 transition-all flex items-center justify-center"
          title={isBn ? "জিপ ডাউনলোড করুন" : "Download ZIP"}
        >
          <Download className="w-5 h-5" />
        </button>
      </div>

      {/* Lightbox / Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        lang={lang}
      />

      {/* Customizer Modal */}
      {isCustomizerOpen && (
        <CustomizerModal
          profile={profile}
          onSave={handleSaveProfile}
          onClose={() => setIsCustomizerOpen(false)}
          lang={lang}
        />
      )}

      {/* Source Code & ZIP Export Modal */}
      {isZipModalOpen && (
        <ZipExportModal
          profile={profile}
          onClose={() => setIsZipModalOpen(false)}
          onDownloadZip={handleDownloadZip}
          isDownloading={isDownloading}
          zipDownloaded={zipDownloaded}
          lang={lang}
        />
      )}
    </div>
  );
}
