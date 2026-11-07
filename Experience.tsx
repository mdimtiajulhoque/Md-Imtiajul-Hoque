import React from 'react';
import { Briefcase, GraduationCap, CheckCircle } from 'lucide-react';
import { ProfileData } from '../types/portfolio';

interface ExperienceProps {
  experiences: ProfileData['experiences'];
  education: ProfileData['education'];
  lang: 'bn' | 'en';
}

export const Experience: React.FC<ExperienceProps> = ({ experiences, education, lang }) => {
  const isBn = lang === 'bn';

  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            {isBn ? 'কর্মজীবন ও শিক্ষা' : 'Journey & Background'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white text-balance">
            {isBn ? 'বাস্তব অভিজ্ঞতা ও শিক্ষাগত যোগ্যতা' : 'Work Experience & Academic Foundation'}
          </h2>
        </div>

        {/* 2-Column Split: Experience (Left) & Education (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Work Experience (7 cols) */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-8">
              <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {isBn ? 'কাজের অভিজ্ঞতা' : 'Professional Experience'}
              </h3>
            </div>

            <div className="relative pl-6 space-y-10 border-l border-slate-200 dark:border-slate-800">
              {experiences.map((exp) => {
                const role = isBn ? exp.roleBn : exp.role;
                const org = isBn ? exp.organizationBn : exp.organization;
                const period = isBn ? exp.periodBn : exp.period;
                const desc = isBn ? exp.descriptionBn : exp.description;
                const highlights = isBn ? exp.highlightsBn : exp.highlights;

                return (
                  <div key={exp.id} className="relative group">
                    {/* Timeline Node Dot */}
                    <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-blue-600 dark:bg-blue-400 border-4 border-white dark:border-slate-900" />

                    <div>
                      <span className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400">
                        {period}
                      </span>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white mt-0.5">
                        {role}
                      </h4>
                      <div className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-3">
                        {org}
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                        {desc}
                      </p>

                      <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
                        {highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-blue-500 font-bold">›</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Education & Qualifications (5 cols) */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-8">
              <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {isBn ? 'শিক্ষাগত যোগ্যতা' : 'Education'}
              </h3>
            </div>

            <div className="space-y-6">
              {education.map((edu) => {
                const degree = isBn ? edu.degreeBn : edu.degree;
                const inst = isBn ? edu.institutionBn : edu.institution;
                const period = isBn ? edu.periodBn : edu.period;
                const details = isBn ? edu.detailsBn : edu.details;

                return (
                  <div
                    key={edu.id}
                    className="p-6 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700/80"
                  >
                    <div className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 mb-1">
                      {period}
                    </div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                      {degree}
                    </h4>
                    <div className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-3">
                      {inst}
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {details}
                    </p>
                  </div>
                );
              })}

              {/* Certifications box */}
              <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700/80">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
                  {isBn ? 'সার্টিফিকেশন ও অনলাইন কোর্স' : 'Certifications & Training'}
                </div>
                <div className="space-y-2.5 text-xs text-slate-600 dark:text-slate-300">
                  <div className="flex items-center justify-between">
                    <span>Full-Stack Web Development Bootcamp</span>
                    <span className="font-mono text-slate-400">2023</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Modern React & Redux Toolkit</span>
                    <span className="font-mono text-slate-400">2023</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Advanced JavaScript Algorithms</span>
                    <span className="font-mono text-slate-400">2022</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
