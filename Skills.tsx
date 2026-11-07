import React, { useState } from 'react';
import { Code, Server, Database, Wrench, CheckCircle } from 'lucide-react';
import { ProfileData } from '../types/portfolio';

interface SkillsProps {
  skills: ProfileData['skills'];
  lang: 'bn' | 'en';
}

export const Skills: React.FC<SkillsProps> = ({ skills, lang }) => {
  const isBn = lang === 'bn';
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Frontend', 'Backend', 'Database & Cloud', 'Tools'] as const;

  const categoryLabelsBn: Record<string, string> = {
    'All': 'সকল প্রযুক্তি',
    'Frontend': 'ফ্রন্টএন্ড',
    'Backend': 'ব্যাকএন্ড',
    'Database & Cloud': 'ডেটাবেজ ও ক্লাউড',
    'Tools': 'ডেভেলপার টুলস',
  };

  const filteredSkills = selectedCategory === 'All'
    ? skills
    : skills.filter(s => s.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Frontend': return <Code className="w-4 h-4 text-blue-600 dark:text-blue-400" />;
      case 'Backend': return <Server className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
      case 'Database & Cloud': return <Database className="w-4 h-4 text-purple-600 dark:text-purple-400" />;
      default: return <Wrench className="w-4 h-4 text-amber-600 dark:text-amber-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Category Switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
              {isBn ? 'দক্ষতা ও প্রযুক্তি' : 'Technical Proficiency'}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white text-balance">
              {isBn ? 'প্রযুক্তিগত দক্ষতা ও টুলস্ট্যাক' : 'Core Technologies & Tooling'}
            </h2>
          </div>

          {/* Interactive Category Segmented Tabs */}
          <div className="inline-flex flex-wrap items-center gap-1 p-1 bg-slate-200/80 dark:bg-slate-800 rounded-lg shrink-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {isBn ? categoryLabelsBn[cat] : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700/80 p-5 shadow-2xs hover:border-slate-300 dark:hover:border-slate-600 transition-colors"
            >
              <div className="flex items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 bg-slate-100 dark:bg-slate-700 rounded-lg">
                    {getCategoryIcon(skill.category)}
                  </div>
                  <span className="font-semibold text-slate-900 dark:text-white text-sm">
                    {skill.name}
                  </span>
                </div>
                <span className="font-mono text-sm font-bold text-blue-600 dark:text-blue-400 tabular-nums">
                  {skill.proficiency}%
                </span>
              </div>

              {/* Progress Track */}
              <div className="w-full bg-slate-100 dark:bg-slate-700 h-2 rounded-full overflow-hidden mb-3">
                <div
                  className="bg-blue-600 dark:bg-blue-500 h-full rounded-full transition-all duration-500"
                  style={{ width: `${skill.proficiency}%` }}
                />
              </div>

              {/* Unboxed Metadata footer */}
              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 pt-1">
                <span>{skill.category}</span>
                <span className="font-mono tabular-nums">{isBn ? skill.experienceBn : skill.experience}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Workflow & Methodologies Strip */}
        <div className="mt-12 p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="font-semibold text-slate-900 dark:text-slate-100 uppercase tracking-wider">
            {isBn ? 'অন্যান্য কর্মপদ্ধতি ও টুলস:' : 'Working Methodologies:'}
          </div>
          <div className="flex flex-wrap items-center gap-4 text-slate-600 dark:text-slate-300 font-mono">
            <span>Agile/Scrum</span>
            <span>·</span>
            <span>Component-Driven Dev</span>
            <span>·</span>
            <span>REST API Integration</span>
            <span>·</span>
            <span>Web Performance Optimization</span>
            <span>·</span>
            <span>Cross-Browser Compatibility</span>
          </div>
        </div>
      </div>
    </section>
  );
};
