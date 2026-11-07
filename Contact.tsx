import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Check, ExternalLink } from 'lucide-react';
import { ProfileData } from '../types/portfolio';

interface ContactProps {
  profile: ProfileData;
  lang: 'bn' | 'en';
}

export const Contact: React.FC<ContactProps> = ({ profile, lang }) => {
  const isBn = lang === 'bn';
  const [formData, setFormData] = useState({ name: '', email: '', message: '', subject: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '', subject: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            {isBn ? 'যোগাযোগ' : 'Get In Touch'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white text-balance">
            {isBn ? 'আসুন আপনার পরবর্তী প্রজেক্ট নিয়ে কথা বলি' : "Let's Build Something Exceptional Together"}
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 mt-3">
            {isBn
              ? 'নতুন ওয়েব প্রজেক্ট তৈরি, রিমোট জব বা টেকনিক্যাল পরামর্শের জন্য সরাসরি বার্তা পাঠান।'
              : 'Have a project in mind or looking for a talented engineer? Drop a message below.'}
          </p>
        </div>

        {/* 2-Column Split: Direct Channels & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Direct channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700/80 p-6 space-y-5">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {isBn ? 'সরাসরি যোগাযোগের ঠিকানা' : 'Direct Channels'}
              </h3>

              <div className="space-y-4">
                {/* Email */}
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-start gap-3.5 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors group"
                >
                  <div className="p-2.5 bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-lg shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
                      {isBn ? 'অফিসিয়াল ইমেইল' : 'Email Address'}
                    </div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 break-all">
                      {profile.email}
                    </div>
                  </div>
                </a>

                {/* WhatsApp & Phone */}
                <a
                  href={profile.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors group"
                >
                  <div className="p-2.5 bg-emerald-50 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 rounded-lg shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
                      {isBn ? 'হোয়াটসঅ্যাপ / ফোন' : 'WhatsApp / Mobile'}
                    </div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                      {profile.phone}
                    </div>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-3.5 p-3 rounded-lg">
                  <div className="p-2.5 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-lg shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
                      {isBn ? 'বর্তমান অবস্থান' : 'Location'}
                    </div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white">
                      {isBn ? profile.locationBn : profile.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick response note */}
              <div className="p-4 bg-slate-50 dark:bg-slate-900/70 rounded-xl border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400">
                <span className="font-semibold text-slate-900 dark:text-slate-200">
                  {isBn ? 'রেসপন্স টাইম:' : 'Response Time:'}
                </span>{' '}
                {isBn
                  ? 'সাধারণত ১২ ঘণ্টার মধ্যে সমস্ত ইমেইল ও বার্তার উত্তর প্রদান করা হয়।'
                  : 'Usually responds to all inquiries within 12 business hours.'}
              </div>
            </div>
          </div>

          {/* Contact form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700/80 p-8 shadow-xs">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                {isBn ? 'বার্তা পাঠান' : 'Send a Direct Message'}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                {isBn ? 'ফর্মটি পূরণ করে সরাসরি আপনার রিকোয়ারমেন্ট জানান।' : 'Fill out the form below to initiate communication.'}
              </p>

              {isSubmitted ? (
                <div className="p-6 bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 rounded-xl text-center space-y-2">
                  <div className="inline-flex p-2 bg-emerald-600 text-white rounded-full mb-1">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-emerald-900 dark:text-emerald-200">
                    {isBn ? 'বার্তাটি সফলভাবে পাঠানো হয়েছে!' : 'Message Sent Successfully!'}
                  </h4>
                  <p className="text-xs text-emerald-700 dark:text-emerald-300">
                    {isBn
                      ? `ধন্যবাদ! মোঃ ইমতিয়াজুল হক রাফি দ্রুত আপনার সাথে যোগাযোগ করবেন।`
                      : `Thank you for reaching out. Rafi will get back to you shortly.`}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        {isBn ? 'আপনার নাম *' : 'Your Name *'}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={isBn ? 'যেমন: তানভীর আহমেদ' : 'e.g. John Doe'}
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-hidden focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        {isBn ? 'আপনার ইমেইল *' : 'Your Email *'}
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={isBn ? 'example@gmail.com' : 'you@company.com'}
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-hidden focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      {isBn ? 'বিষয়' : 'Subject'}
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder={isBn ? 'যেমন: নতুন ই-কমার্স ওয়েবসাইট ডেভেলপমেন্ট' : 'e.g. New Web App Development'}
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-hidden focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      {isBn ? 'বার্তা বা প্রজেক্ট বিবরণ *' : 'Project Details & Message *'}
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={isBn ? 'আপনার প্রজেক্টের রিকোয়ারমেন্ট বিস্তারিত লিখুন...' : 'Describe your project scope, timeline, and goals...'}
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-hidden focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-lg shadow-xs transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isBn ? 'বার্তা পাঠান' : 'Submit Inquiry'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
