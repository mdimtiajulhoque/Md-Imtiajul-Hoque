import React, { useState } from 'react';
import { X, Download, Copy, Check, FileCode, FileText, CheckCircle2 } from 'lucide-react';
import { ProfileData } from '../types/portfolio';
import { generateStaticHtml, generateStaticCss, generateStaticJs, generateReadme } from '../utils/zipGenerator';

interface ZipExportModalProps {
  profile: ProfileData;
  onClose: () => void;
  onDownloadZip: () => void;
  isDownloading: boolean;
  zipDownloaded: boolean;
  lang: 'bn' | 'en';
}

export const ZipExportModal: React.FC<ZipExportModalProps> = ({
  profile,
  onClose,
  onDownloadZip,
  isDownloading,
  zipDownloaded,
  lang,
}) => {
  const isBn = lang === 'bn';
  const [selectedFile, setSelectedFile] = useState<'index.html' | 'style.css' | 'script.js' | 'README.md' | 'profile-data.json'>('index.html');
  const [copied, setCopied] = useState(false);

  const fileContents = {
    'index.html': generateStaticHtml(profile, lang),
    'style.css': generateStaticCss(),
    'script.js': generateStaticJs(profile),
    'README.md': generateReadme(profile),
    'profile-data.json': JSON.stringify(profile, null, 2),
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(fileContents[selectedFile]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/75 backdrop-blur-xs"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl max-w-4xl w-full z-10 max-h-[92vh] flex flex-col my-auto overflow-hidden">
        {/* Top Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {isBn ? 'ওয়েবসাইট সোর্স কোড ও জিপ ডাউনলোড' : 'Website Source Code & ZIP Package'}
              </h3>
              <span className="font-mono text-xs px-2 py-0.5 bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded font-semibold">
                .zip ready
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              {isBn
                ? 'এই জিপ ফাইলে আপনার সম্পূর্ণ রেডিমেড স্ট্যাটিক ওয়েবসাইট রয়েছে যা ইন্টারনেটে ফ্রিতে হোস্ট করা যায়।'
                : 'Contains standalone, production-ready static website files ready to launch on GitHub Pages, Netlify, or open offline.'}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action Banner */}
        <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-600 text-white rounded-lg shrink-0">
              <Download className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">
                {profile.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}-website.zip
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                {isBn ? '৫টি ফাইল অন্তর্ভুক্ত: HTML, CSS, JavaScript, README, JSON' : '5 files included: HTML, CSS, JavaScript, README, JSON'}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-600 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? (isBn ? 'কপি হয়েছে!' : 'Copied!') : (isBn ? 'কোড কপি করুন' : 'Copy Code')}</span>
            </button>

            <button
              onClick={onDownloadZip}
              disabled={isDownloading}
              className="inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-lg shadow-xs transition-colors whitespace-nowrap"
            >
              {zipDownloaded ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                  <span>{isBn ? 'জিপ ডাউনলোড হয়েছে' : 'ZIP Downloaded'}</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>{isDownloading ? (isBn ? 'ডাউনলোড প্রস্তুত হচ্ছে...' : 'Generating ZIP...') : (isBn ? 'সম্পূর্ণ জিপ ডাউনলোড করুন' : 'Download Full ZIP')}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* File Tabs */}
        <div className="flex items-center gap-1 px-6 pt-3 bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 overflow-x-auto shrink-0">
          {(['index.html', 'style.css', 'script.js', 'README.md', 'profile-data.json'] as const).map((file) => (
            <button
              key={file}
              onClick={() => setSelectedFile(file)}
              className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-mono font-medium rounded-t-lg transition-colors border-t-2 whitespace-nowrap shrink-0 ${
                selectedFile === file
                  ? 'bg-slate-900 text-white border-blue-500 dark:bg-slate-950'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border-transparent'
              }`}
            >
              {file.endsWith('.md') ? <FileText className="w-3.5 h-3.5" /> : <FileCode className="w-3.5 h-3.5" />}
              <span>{file}</span>
            </button>
          ))}
        </div>

        {/* Code View Area */}
        <div className="flex-1 overflow-y-auto bg-slate-900 dark:bg-slate-950 text-slate-100 p-6 font-mono text-xs leading-relaxed selection:bg-blue-600 selection:text-white">
          <pre className="whitespace-pre-wrap font-mono">
            <code>{fileContents[selectedFile]}</code>
          </pre>
        </div>

        {/* Quick Instructions Bottom Bar */}
        <div className="p-4 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-900 dark:text-white">
              {isBn ? 'ব্যবহার নির্দেশিকা:' : 'Quick Guide:'}
            </span>
            <span>
              {isBn
                ? 'জিপ ফাইলটি আনজিপ করে index.html ডাবল-ক্লিক করলেই ব্রাউজারে চালু হবে।'
                : 'Extract the downloaded ZIP and double-click index.html to launch instantly.'}
            </span>
          </div>

          <button
            onClick={onClose}
            className="text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
          >
            {isBn ? 'বন্ধ করুন' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
