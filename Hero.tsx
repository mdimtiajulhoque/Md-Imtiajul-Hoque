import React from 'react';
import { Download, Mail, ArrowUpRight, Code2, MapPin, Github, Linkedin, Check } from 'lucide-react';
import { ProfileData } from '../types/portfolio';

interface HeroProps {
  profile: ProfileData;
  lang: 'bn' | 'en';
  onDownloadZip: () => void;
  onOpenZipModal: () => void;
  isDownloading: boolean;
  zipDownloaded: boolean;
}

export const Hero: React.FC<HeroProps> = ({
  profile,
  lang,
  onDownloadZip,
  onOpenZipModal,
  isDownloading,
  zipDownloaded,
}) => {
  const isBn = lang === 'bn';
  const name = isBn ? profile.nameBn : profile.name;
  const title = isBn ? profile.titleBn : profile.title;
  const tagline = isBn ? profile.taglineBn : profile.tagline;
  const bio = isBn ? profile.bioBn : profile.bio;
  const location = isBn ? profile.locationBn : profile.location;

  return (
    <section className="relative pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split-screen Hero: Left Typography, Right Visual Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-16">
          {/* Left Column (7 cols): Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Clean unboxed text kicker */}
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3">
              {isBn ? 'সফটওয়্যার ও ওয়েব ডেভেলপমেন্ট' : 'Software & Web Engineering'}
            </div>

            {/* Display Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4 text-balance">
              {name}
            </h1>

            {/* Lead Role */}
            <p className="text-xl sm:text-2xl font-semibold text-slate-800 dark:text-slate-200 mb-4">
              {title}
            </p>

            {/* Tagline & Bio */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 max-w-2xl">
              {tagline}
            </p>

            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed mb-8 max-w-2xl">
              {bio}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              {/* Primary CTA: Download Website ZIP */}
              <button
                onClick={onDownloadZip}
                disabled={isDownloading}
                className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-lg shadow-sm transition-all whitespace-nowrap"
              >
                {zipDownloaded ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-300" />
                    <span>{isBn ? 'জিপ ডাউনলোড সফল!' : 'ZIP Downloaded!'}</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    <span>{isDownloading ? (isBn ? 'জিপ তৈরি হচ্ছে...' : 'Building ZIP...') : (isBn ? 'ওয়েবসাইট জিপ ডাউনলোড করুন' : 'Download Website ZIP')}</span>
                  </>
                )}
              </button>

              {/* Secondary CTA: Preview & Code Modal */}
              <button
                onClick={onOpenZipModal}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 rounded-lg transition-colors whitespace-nowrap"
              >
                <Code2 className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                <span>{isBn ? 'সোর্স কোড ফাইল দেখুন' : 'View Source Code'}</span>
              </button>

              {/* Direct Contact Button */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors whitespace-nowrap"
              >
                <span>{isBn ? 'যোগাযোগ করুন' : 'Contact Me'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Clean unboxed metadata strip */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-200 dark:border-slate-800">
              <span className="flex items-center gap-1.5 font-medium text-slate-700 dark:text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-blue-500" />
                <span>{location}</span>
              </span>
              <span aria-hidden="true">·</span>
              <a
                href={`mailto:${profile.email}`}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{profile.email}</span>
              </a>
              <span aria-hidden="true">·</span>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <span aria-hidden="true">·</span>
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

          {/* Right Column (5 cols): High-Resolution Visual Container */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="relative bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-3 shadow-md">
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-700">
                  <img
                    src={profile.avatarUrl}
                    alt={name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  {/* Media scrim overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex flex-col justify-end p-5">
                    <div className="text-white font-bold text-lg">{name}</div>
                    <div className="text-slate-200 text-xs font-medium">{title}</div>
                    <div className="mt-2 text-xs text-emerald-400 font-mono">
                      {isBn ? 'নতুন প্রজেক্ট ও রিমোট রোলের জন্য প্রস্তুত' : 'Available for new projects & roles'}
                    </div>
                  </div>
                </div>

                {/* Subdued footer strip inside card */}
                <div className="flex items-center justify-between px-3 pt-3 text-xs text-slate-500 dark:text-slate-400">
                  <span>{isBn ? 'প্রফেশনাল ডেভেলপার প্রোফাইল' : 'Verified Developer Profile'}</span>
                  <span className="font-mono tabular-nums">2026 Edition</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width Stats Strip below the hero split */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 sm:p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
          <div className="text-center sm:text-left sm:border-r border-slate-200 dark:border-slate-800 sm:pr-6">
            <div className="text-3xl sm:text-4xl font-extrabold text-blue-600 dark:text-blue-400 font-mono tabular-nums">
              {profile.yearsOfExperience}+
            </div>
            <div className="text-sm font-medium text-slate-600 dark:text-slate-400 mt-1">
              {isBn ? 'বছরের বাস্তব অভিজ্ঞতা' : 'Years of Experience'}
            </div>
            <div className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
              {isBn ? 'ওয়েব ও সফটওয়্যার ডেভেলপমেন্ট' : 'Web & software architectures'}
            </div>
          </div>

          <div className="text-center sm:text-left sm:border-r border-slate-200 dark:border-slate-800 sm:px-6">
            <div className="text-3xl sm:text-4xl font-extrabold text-blue-600 dark:text-blue-400 font-mono tabular-nums">
              {profile.completedProjects}+
            </div>
            <div className="text-sm font-medium text-slate-600 dark:text-slate-400 mt-1">
              {isBn ? 'সফলভাবে সমাপ্ত প্রজেক্ট' : 'Completed Projects'}
            </div>
            <div className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
              {isBn ? 'ফুল-স্ট্যাক, মার্কেটপ্লেস ও এআই টুলস' : 'E-commerce, SaaS, Dashboards'}
            </div>
          </div>

          <div className="text-center sm:text-left sm:pl-6">
            <div className="text-3xl sm:text-4xl font-extrabold text-blue-600 dark:text-blue-400 font-mono tabular-nums">
              {profile.clientSatisfaction}%
            </div>
            <div className="text-sm font-medium text-slate-600 dark:text-slate-400 mt-1">
              {isBn ? 'ক্লায়েন্ট সন্তুষ্টি ও পজিটিভ রিভিউ' : 'Client Satisfaction'}
            </div>
            <div className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
              {isBn ? 'সময়মতো ডেলিভারি ও ক্লিন কোড' : 'On-time delivery & clean code'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
