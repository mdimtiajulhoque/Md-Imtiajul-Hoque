import React from 'react';
import { User, Mail, MapPin, Globe, CheckCircle2 } from 'lucide-react';
import { ProfileData } from '../types/portfolio';

interface AboutProps {
  profile: ProfileData;
  lang: 'bn' | 'en';
}

export const About: React.FC<AboutProps> = ({ profile, lang }) => {
  const isBn = lang === 'bn';
  const name = isBn ? profile.nameBn : profile.name;
  const bio = isBn ? profile.bioBn : profile.bio;
  const location = isBn ? profile.locationBn : profile.location;

  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            {isBn ? 'ব্যক্তিগত পরিচিতি' : 'About Me'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white text-balance">
            {isBn ? 'কোডিং ও আধুনিক ওয়েব প্রযুক্তিতে আমার পথচলা' : 'Engineering Intuitive, Scalable Digital Products'}
          </h2>
        </div>

        {/* 2-Column Content Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Story & Values (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            <p>
              {bio}
            </p>
            <p>
              {isBn
                ? 'আমি যেকোনো প্রজেক্ট শুরু করার সময় আর্কিটেকচার, ইউজার এক্সপেরিয়েন্স এবং ক্লিন কোডের ওপর সর্বোচ্চ গুরুত্ব দিই। ওয়েব স্ট্যান্ডার্ড, সিএসএস গ্রিড/ফ্লেক্সবক্স, রেন্ডারিং অপটিমাইজেশন এবং ডেটা ফ্লো আমার প্রতিদিনের কাজের কেন্দ্রবিন্দু।'
                : 'When crafting digital products, I focus deeply on software architecture, responsive mobile layouts, component reusability, and lightning-fast loading speeds. Writing maintainable code is not just a standard—it is my engineering philosophy.'}
            </p>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-4">
                {isBn ? 'আমার মূল কাজের ক্ষেত্রসমূহ:' : 'Core Engineering Principles:'}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700 dark:text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span>{isBn ? 'মডার্ন রিঅ্যাক্ট ও নেক্সট.জেএস' : 'Modern React & TypeScript'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span>{isBn ? 'টেইলউইন্ড সিএসএস ও রেসপনসিভ ডিজাইন' : 'Tailwind CSS & Responsive UI'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span>{isBn ? 'নোড.জেএস ব্যাকএন্ড ও রেস্ট এপিআই' : 'Node.js & Scalable REST APIs'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span>{isBn ? 'গিট ও আধুনিক সিআই/সিডি অটোমেশন' : 'Git Version Control & Deployment'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact & Availability Highlights (5 cols) */}
          <div className="lg:col-span-5 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 sm:p-8 shadow-xs">
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <User className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>{isBn ? 'প্রোফাইল সারসংক্ষেপ' : 'Quick Snapshot'}</span>
            </h3>

            <div className="space-y-4 text-sm divide-y divide-slate-100 dark:divide-slate-700/60">
              <div className="flex justify-between items-center pt-2">
                <span className="text-slate-500 dark:text-slate-400">{isBn ? 'নাম' : 'Name'}</span>
                <span className="font-semibold text-slate-900 dark:text-slate-100">{name}</span>
              </div>

              <div className="flex justify-between items-center pt-3">
                <span className="text-slate-500 dark:text-slate-400">{isBn ? 'বর্তমান অবস্থান' : 'Location'}</span>
                <span className="font-medium text-slate-900 dark:text-slate-100 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-blue-500" />
                  <span>{location}</span>
                </span>
              </div>

              <div className="flex justify-between items-center pt-3">
                <span className="text-slate-500 dark:text-slate-400">{isBn ? 'ইমেইল ঠিকানা' : 'Email'}</span>
                <a
                  href={`mailto:${profile.email}`}
                  className="font-medium text-blue-600 dark:text-blue-400 hover:underline truncate max-w-[200px]"
                >
                  {profile.email}
                </a>
              </div>

              <div className="flex justify-between items-center pt-3">
                <span className="text-slate-500 dark:text-slate-400">{isBn ? 'ভাষা' : 'Languages'}</span>
                <span className="font-medium text-slate-900 dark:text-slate-100">
                  {isBn ? 'বাংলা (মাতৃভাষা) · ইংরেজি (পেশাগত)' : 'Bengali (Native) · English (Fluent)'}
                </span>
              </div>

              <div className="flex justify-between items-center pt-3">
                <span className="text-slate-500 dark:text-slate-400">{isBn ? 'কাজের স্ট্যাটাস' : 'Availability'}</span>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                  {isBn ? 'ফুল-টাইম ও ফ্রিল্যান্সের জন্য প্রস্তুত' : 'Open for Freelance & Roles'}
                </span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
              <a
                href="#contact"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-lg transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{isBn ? 'সরাসরি আলাপ শুরু করুন' : 'Discuss a Project'}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
