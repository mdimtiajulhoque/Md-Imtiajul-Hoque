import JSZip from 'jszip';
import { ProfileData } from '../types/portfolio';

export function generateStaticHtml(profile: ProfileData, lang: 'bn' | 'en' = 'bn'): string {
  const isBn = lang === 'bn';
  const name = isBn ? profile.nameBn : profile.name;
  const title = isBn ? profile.titleBn : profile.title;
  const bio = isBn ? profile.bioBn : profile.bio;
  const location = isBn ? profile.locationBn : profile.location;

  const projectCards = profile.projects.map(p => {
    const pTitle = isBn ? p.titleBn : p.title;
    const pDesc = isBn ? p.descriptionBn : p.description;
    const pCategory = isBn ? p.categoryBn : p.category;
    const techTags = p.technologies.map(t => `<span class="tech-tag">${t}</span>`).join(' ');

    return `
      <article class="project-card">
        <div class="card-media">
          <img src="${p.image}" alt="${pTitle}" loading="lazy" onerror="this.src='https://placehold.co/600x400/1e293b/white?text=${encodeURIComponent(p.title)}'" />
          <div class="category-meta">${pCategory}</div>
        </div>
        <div class="card-body">
          <h3>${pTitle}</h3>
          <p>${pDesc}</p>
          <div class="tech-stack">${techTags}</div>
          <div class="card-actions">
            ${p.liveUrl ? `<a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary">${isBn ? 'লাইভ প্রিভিউ' : 'Live Preview'}</a>` : ''}
            ${p.githubUrl ? `<a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline">${isBn ? 'গিটহাব কোড' : 'Source Code'}</a>` : ''}
          </div>
        </div>
      </article>
    `;
  }).join('\n');

  const skillItems = profile.skills.map(s => `
    <div class="skill-item">
      <div class="skill-header">
        <span class="skill-name">${s.name}</span>
        <span class="skill-percent">${s.proficiency}%</span>
      </div>
      <div class="skill-track">
        <div class="skill-fill" style="width: ${s.proficiency}%;"></div>
      </div>
    </div>
  `).join('\n');

  const expItems = profile.experiences.map(e => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <span class="timeline-period">${isBn ? e.periodBn : e.period}</span>
        <h4>${isBn ? e.roleBn : e.role}</h4>
        <div class="timeline-org">${isBn ? e.organizationBn : e.organization}</div>
        <p>${isBn ? e.descriptionBn : e.description}</p>
      </div>
    </div>
  `).join('\n');

  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${name} - ${title}</title>
  <meta name="description" content="${bio}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Hind+Siliguri:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Navigation Top Bar -->
  <header class="top-nav">
    <div class="container nav-content">
      <a href="#" class="brand-logo">${name}</a>
      <nav class="nav-links">
        <a href="#about">${isBn ? 'পরিচিতি' : 'About'}</a>
        <a href="#projects">${isBn ? 'প্রজেক্ট' : 'Projects'}</a>
        <a href="#skills">${isBn ? 'দক্ষতা' : 'Skills'}</a>
        <a href="#experience">${isBn ? 'অভিজ্ঞতা' : 'Experience'}</a>
        <a href="#contact">${isBn ? 'যোগাযোগ' : 'Contact'}</a>
      </nav>
      <div class="nav-action">
        <a href="#contact" class="btn btn-primary">${isBn ? 'যোগাযোগ করুন' : 'Hire Me'}</a>
      </div>
    </div>
  </header>

  <main>
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container hero-grid">
        <div class="hero-text">
          <div class="hero-kicker">${isBn ? 'ওয়েব ডেভেলপার ও ইঞ্জিনিয়ার' : 'Developer & Problem Solver'}</div>
          <h1 class="hero-title">${name}</h1>
          <p class="hero-lead">${title}</p>
          <p class="hero-bio">${bio}</p>
          <div class="hero-ctas">
            <a href="#contact" class="btn btn-primary">${isBn ? 'সরাসরি মেসেজ পাঠান' : 'Get In Touch'}</a>
            <a href="#projects" class="btn btn-outline">${isBn ? 'প্রজেক্ট দেখুন' : 'Explore Projects'}</a>
          </div>
          <div class="social-strip">
            <a href="mailto:${profile.email}" title="Email">${profile.email}</a>
            <span>·</span>
            <a href="${profile.github}" target="_blank" rel="noopener noreferrer">GitHub</a>
            <span>·</span>
            <a href="${profile.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
        <div class="hero-media">
          <div class="avatar-card">
            <img src="${profile.avatarUrl}" alt="${name}" onerror="this.src='https://placehold.co/400x400/0f172a/white?text=Rafi'" />
            <div class="location-badge">${location}</div>
          </div>
        </div>
      </div>
      <!-- Stats Ribbon -->
      <div class="container">
        <div class="stats-ribbon">
          <div class="stat-card">
            <div class="stat-num">${profile.yearsOfExperience}+</div>
            <div class="stat-label">${isBn ? 'বছরের অভিজ্ঞতা' : 'Years Experience'}</div>
          </div>
          <div class="stat-card">
            <div class="stat-num">${profile.completedProjects}+</div>
            <div class="stat-label">${isBn ? 'সফল প্রজেক্ট' : 'Completed Projects'}</div>
          </div>
          <div class="stat-card">
            <div class="stat-num">${profile.clientSatisfaction}%</div>
            <div class="stat-label">${isBn ? 'ক্লায়েন্ট সন্তুষ্টি' : 'Satisfaction Rate'}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="section section-alt">
      <div class="container">
        <div class="section-heading">
          <div class="section-kicker">${isBn ? 'আমার সম্পর্কে' : 'About Me'}</div>
          <h2>${isBn ? 'প্রযুক্তি এবং উদ্ভাবনী ওয়েব সলিউশন' : 'Passionate About Digital Innovation'}</h2>
        </div>
        <div class="about-grid">
          <div class="about-text">
            <p>${bio}</p>
            <p>${isBn ? 'আমি প্রতিটি প্রজেক্টে ক্লিন আর্কিটেকচার, পারফরম্যান্স অপটিমাইজেশন এবং সেরা কোডিং স্ট্যান্ডার্ড নিশ্চিত করি।' : 'I prioritize clean code architecture, performance optimization, and intuitive user experiences in every application I build.'}</p>
          </div>
          <div class="about-highlights">
            <div class="info-row">
              <span class="info-label">${isBn ? 'ইমেইল' : 'Email'}:</span>
              <span class="info-val"><a href="mailto:${profile.email}">${profile.email}</a></span>
            </div>
            <div class="info-row">
              <span class="info-label">${isBn ? 'ঠিকানা' : 'Location'}:</span>
              <span class="info-val">${location}</span>
            </div>
            <div class="info-row">
              <span class="info-label">${isBn ? 'উপলব্ধতা' : 'Availability'}:</span>
              <span class="info-val">${isBn ? 'নতুন প্রজেক্ট ও রিমোট চাকরির জন্য প্রস্তুত' : 'Open for Freelance & Roles'}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="section">
      <div class="container">
        <div class="section-heading">
          <div class="section-kicker">${isBn ? 'নির্বাচিত প্রজেক্ট' : 'Featured Work'}</div>
          <h2>${isBn ? 'সাম্প্রতিক কাজের নিদর্শন' : 'Recent Engineering Projects'}</h2>
        </div>
        <div class="projects-grid">
          ${projectCards}
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="section section-alt">
      <div class="container">
        <div class="section-heading">
          <div class="section-kicker">${isBn ? 'টেকনিক্যাল দক্ষতা' : 'Tech Stack'}</div>
          <h2>${isBn ? 'প্রযুক্তি ও টুলসের দক্ষতা' : 'Technologies & Proficiency'}</h2>
        </div>
        <div class="skills-grid">
          ${skillItems}
        </div>
      </div>
    </section>

    <!-- Experience Timeline -->
    <section id="experience" class="section">
      <div class="container">
        <div class="section-heading">
          <div class="section-kicker">${isBn ? 'কর্মজীবন ও পথচলা' : 'Career Timeline'}</div>
          <h2>${isBn ? 'কাজের অভিজ্ঞতা' : 'Experience & Track Record'}</h2>
        </div>
        <div class="timeline-container">
          ${expItems}
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section section-alt">
      <div class="container">
        <div class="section-heading">
          <div class="section-kicker">${isBn ? 'যোগাযোগের মাধ্যম' : 'Get In Touch'}</div>
          <h2>${isBn ? 'আসুন আপনার পরবর্তী প্রজেক্ট নিয়ে কথা বলি' : "Let's Build Something Great Together"}</h2>
        </div>
        <div class="contact-grid">
          <div class="contact-info">
            <p>${isBn ? 'যেকোনো নতুন ওয়েব ডেভেলপমেন্ট প্রজেক্ট, পরামর্শ বা কোলাবোরেশনের জন্য সরাসরি যোগাযোগ করতে পারেন।' : 'Feel free to reach out for new opportunities, freelance projects, or tech discussions.'}</p>
            <div class="contact-links">
              <div class="contact-item">
                <strong>${isBn ? 'ইমেইল' : 'Email'}:</strong>
                <a href="mailto:${profile.email}">${profile.email}</a>
              </div>
              <div class="contact-item">
                <strong>${isBn ? 'ফোন / হোয়াটসঅ্যাপ' : 'Phone / WhatsApp'}:</strong>
                <a href="${profile.whatsapp}" target="_blank" rel="noopener noreferrer">${profile.phone}</a>
              </div>
              <div class="contact-item">
                <strong>${isBn ? 'ঠিকানা' : 'Location'}:</strong>
                <span>${location}</span>
              </div>
            </div>
          </div>
          <form class="contact-form" onsubmit="event.preventDefault(); alert('${isBn ? 'ধন্যবাদ! আপনার বার্তাটি পাঠানো হয়েছে।' : 'Thank you! Your message has been sent successfully.'}');">
            <div class="form-group">
              <label>${isBn ? 'আপনার নাম' : 'Your Name'}</label>
              <input type="text" required placeholder="${isBn ? 'নাম লিখুন...' : 'Enter your name...'}">
            </div>
            <div class="form-group">
              <label>${isBn ? 'আপনার ইমেইল' : 'Your Email'}</label>
              <input type="email" required placeholder="${isBn ? 'example@gmail.com' : 'you@example.com'}">
            </div>
            <div class="form-group">
              <label>${isBn ? 'বার্তা' : 'Message'}</label>
              <textarea rows="4" required placeholder="${isBn ? 'আপনার বক্তব্য লিখুন...' : 'How can I help you?'}"></textarea>
            </div>
            <button type="submit" class="btn btn-primary btn-block">${isBn ? 'বার্তা পাঠান' : 'Send Message'}</button>
          </form>
        </div>
      </div>
    </section>
  </main>

  <!-- Footer -->
  <footer class="footer">
    <div class="container footer-content">
      <p>&copy; ${new Date().getFullYear()} ${name}. ${isBn ? 'সর্বস্বত্ব সংরক্ষিত।' : 'All rights reserved.'}</p>
      <div class="footer-links">
        <a href="${profile.github}" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="${profile.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:${profile.email}">${profile.email}</a>
      </div>
    </div>
  </footer>

  <script src="script.js"></script>
</body>
</html>`;
}

export function generateStaticCss(): string {
  return `/* Base Reset & Variables */
:root {
  --font-sans: 'Plus Jakarta Sans', 'Hind Siliguri', -apple-system, sans-serif;
  --bg-page: #f8fafc;
  --bg-card: #ffffff;
  --bg-alt: #f1f5f9;
  --border-color: #e2e8f0;
  --text-main: #0f172a;
  --text-muted: #64748b;
  --primary: #2563eb;
  --primary-hover: #1d4ed8;
  --radius: 12px;
  --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05);
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg-page: #090d16;
    --bg-card: #111827;
    --bg-alt: #161f30;
    --border-color: #1e293b;
    --text-main: #f8fafc;
    --text-muted: #94a3b8;
    --primary: #3b82f6;
    --primary-hover: #60a5fa;
  }
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: var(--font-sans);
  background-color: var(--bg-page);
  color: var(--text-main);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

/* Typography */
h1, h2, h3, h4 {
  color: var(--text-main);
  line-height: 1.25;
  font-weight: 700;
}

p {
  color: var(--text-muted);
}

a {
  color: inherit;
  text-decoration: none;
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid transparent;
  white-space: nowrap;
}

.btn-sm {
  padding: 6px 14px;
  font-size: 13px;
}

.btn-primary {
  background-color: var(--primary);
  color: #ffffff;
}

.btn-primary:hover {
  background-color: var(--primary-hover);
}

.btn-outline {
  border-color: var(--border-color);
  color: var(--text-main);
  background-color: var(--bg-card);
}

.btn-outline:hover {
  border-color: var(--text-muted);
}

.btn-block {
  width: 100%;
}

/* Header */
.top-nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: var(--bg-card);
  border-bottom: 1px solid var(--border-color);
  backdrop-filter: blur(8px);
}

.nav-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  gap: 32px;
}

.brand-logo {
  font-size: 18px;
  font-weight: 800;
  letter-spacing: -0.02em;
}

.nav-links {
  display: flex;
  gap: 24px;
}

.nav-links a {
  font-size: 14px;
  font-weight: 500;
  color: var(--text-muted);
  transition: color 0.2s ease;
}

.nav-links a:hover {
  color: var(--text-main);
}

/* Sections */
.section {
  padding: 80px 0;
}

.section-alt {
  background-color: var(--bg-alt);
}

.section-heading {
  margin-bottom: 48px;
}

.section-kicker {
  font-size: 13px;
  font-weight: 600;
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 8px;
}

.section-heading h2 {
  font-size: 32px;
  letter-spacing: -0.02em;
}

/* Hero */
.hero-section {
  padding: 80px 0 60px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 48px;
  align-items: center;
  margin-bottom: 60px;
}

.hero-kicker {
  font-size: 14px;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: 12px;
}

.hero-title {
  font-size: 48px;
  letter-spacing: -0.03em;
  margin-bottom: 8px;
}

.hero-lead {
  font-size: 20px;
  color: var(--text-main);
  font-weight: 500;
  margin-bottom: 20px;
}

.hero-bio {
  font-size: 16px;
  line-height: 1.7;
  margin-bottom: 28px;
  max-width: 600px;
}

.hero-ctas {
  display: flex;
  gap: 16px;
  margin-bottom: 28px;
  flex-wrap: wrap;
}

.social-strip {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 13px;
  color: var(--text-muted);
}

.social-strip a:hover {
  color: var(--primary);
}

.avatar-card {
  position: relative;
  background-color: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow);
  max-width: 380px;
  margin: 0 auto;
}

.avatar-card img {
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  display: block;
}

.location-badge {
  padding: 12px 16px;
  font-size: 13px;
  font-weight: 500;
  background-color: var(--bg-card);
  border-top: 1px solid var(--border-color);
  text-align: center;
}

/* Stats Ribbon */
.stats-ribbon {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  background-color: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius);
  padding: 24px;
  box-shadow: var(--shadow);
}

.stat-card {
  text-align: center;
}

.stat-num {
  font-size: 36px;
  font-weight: 800;
  color: var(--primary);
  font-variant-numeric: tabular-nums;
}

.stat-label {
  font-size: 14px;
  color: var(--text-muted);
}

/* About Grid */
.about-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 40px;
}

.about-text p {
  margin-bottom: 16px;
  font-size: 16px;
}

.about-highlights {
  background-color: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius);
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.info-row {
  display: flex;
  justify-content: space-between;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--border-color);
  font-size: 14px;
}

.info-row:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.info-label {
  font-weight: 600;
  color: var(--text-muted);
}

.info-val a {
  color: var(--primary);
}

/* Projects Grid */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 32px;
}

.project-card {
  background-color: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
}

.card-media {
  position: relative;
  width: 100%;
  aspect-ratio: 16/10;
  background-color: var(--bg-alt);
}

.card-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.category-meta {
  position: absolute;
  top: 12px;
  left: 12px;
  background-color: rgba(15, 23, 42, 0.85);
  color: #fff;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  backdrop-filter: blur(4px);
}

.card-body {
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.card-body h3 {
  font-size: 18px;
  margin-bottom: 8px;
}

.card-body p {
  font-size: 14px;
  margin-bottom: 16px;
  flex: 1;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 20px;
}

.tech-tag {
  font-size: 12px;
  background-color: var(--bg-alt);
  color: var(--text-main);
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid var(--border-color);
}

.card-actions {
  display: flex;
  gap: 12px;
}

/* Skills */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.skill-item {
  background-color: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius);
  padding: 20px;
}

.skill-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 600;
}

.skill-percent {
  color: var(--primary);
  font-variant-numeric: tabular-nums;
}

.skill-track {
  height: 8px;
  background-color: var(--bg-alt);
  border-radius: 4px;
  overflow: hidden;
}

.skill-fill {
  height: 100%;
  background-color: var(--primary);
  border-radius: 4px;
}

/* Timeline */
.timeline-container {
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 800px;
}

.timeline-item {
  position: relative;
  padding-left: 32px;
  border-left: 2px solid var(--border-color);
}

.timeline-dot {
  position: absolute;
  left: -7px;
  top: 4px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: var(--primary);
}

.timeline-period {
  font-size: 12px;
  font-weight: 600;
  color: var(--primary);
  text-transform: uppercase;
}

.timeline-content h4 {
  font-size: 18px;
  margin: 4px 0;
}

.timeline-org {
  font-size: 14px;
  color: var(--text-muted);
  margin-bottom: 8px;
}

/* Contact */
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
}

.contact-links {
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.contact-item strong {
  display: block;
  font-size: 13px;
  color: var(--text-muted);
}

.contact-item a {
  color: var(--primary);
  font-weight: 600;
}

.contact-form {
  background-color: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius);
  padding: 32px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 6px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px 14px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background-color: var(--bg-page);
  color: var(--text-main);
  font-family: inherit;
  font-size: 14px;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary);
}

/* Footer */
.footer {
  border-top: 1px solid var(--border-color);
  padding: 40px 0;
  background-color: var(--bg-card);
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: var(--text-muted);
  flex-wrap: wrap;
  gap: 16px;
}

.footer-links {
  display: flex;
  gap: 20px;
}

.footer-links a:hover {
  color: var(--primary);
}

/* Responsive */
@media (max-width: 900px) {
  .hero-grid,
  .about-grid,
  .contact-grid {
    grid-template-columns: 1fr;
  }
  .hero-title {
    font-size: 36px;
  }
  .nav-links {
    display: none;
  }
}
`;
}

export function generateStaticJs(profile: ProfileData): string {
  return `// Interactive Script for ${profile.name}'s Website
document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  console.log("Website loaded successfully for ${profile.name}!");
});
`;
}

export function generateReadme(profile: ProfileData): string {
  return `# ${profile.name} - Official Personal Website

> ${profile.title}
> Contact: ${profile.email} | ${profile.location}

---

## 🇧🇩 বাংলা নির্দেশিকা (কীভাবে ব্যবহার করবেন):

১. এই জিপ ফাইলটি আনজিপ (Extract) করুন।
২. আপনার কম্পিউটারে \`index.html\` ফাইলটির উপর ডাবল-ক্লিক করলেই ব্রাউজারে সম্পূর্ণ ওয়েবসাইটটি চালু হয়ে যাবে (কোনো সফটওয়্যার বা ইন্টারনেটের প্রয়োজন নেই)।
৩. ওয়েবসাইটটি ফ্রিতে ইন্টারনেটে লাইভ করার জন্য:
   - **GitHub Pages**: এই ফোল্ডারের ফাইলগুলো একটি নতুন GitHub রিপোজিটরিতে আপলোড করে Settings > Pages থেকে Deploy করুন।
   - **Netlify / Vercel**: সরাসরি ফোল্ডারটি ড্র্যাগ অ্যান্ড ড্রপ করে মাত্র ১০ সেকেন্ডে লাইভ লিঙ্ক পান।
৪. আপনার তথ্য পরিবর্তন করতে চাইলে \`index.html\` যেকোনো কোড এডিটরে (যেমন VS Code, Notepad) ওপেন করে আপনার নাম বা তথ্য এডিট করে সেভ করতে পারেন।

---

## 🇬🇧 English Instructions:

1. Unzip / Extract this archive.
2. Double-click \`index.html\` to instantly launch the website in any browser.
3. To host for free:
   - **GitHub Pages**: Push this directory to a GitHub repo and enable Pages in repository settings.
   - **Netlify / Vercel**: Simply drag and drop the unzipped folder into Netlify Drop or Vercel dashboard.
4. Customize: Open \`index.html\` or \`style.css\` in any code editor (VS Code, Notepad, Sublime) to tailor text, colors, and links.

---
© ${new Date().getFullYear()} ${profile.name}. All rights reserved.
`;
}

/**
 * Creates and triggers a download of a clean .zip package containing
 * the complete ready-to-use static website files.
 */
export async function downloadPortfolioZip(profile: ProfileData, lang: 'bn' | 'en' = 'bn'): Promise<void> {
  const zip = new JSZip();

  const html = generateStaticHtml(profile, lang);
  const css = generateStaticCss();
  const js = generateStaticJs(profile);
  const readme = generateReadme(profile);
  const rawData = JSON.stringify(profile, null, 2);

  // Add files to root of the ZIP
  zip.file("index.html", html);
  zip.file("style.css", css);
  zip.file("script.js", js);
  zip.file("README.md", readme);
  zip.file("profile-data.json", rawData);

  // Generate the zip blob
  const blob = await zip.generateAsync({ type: "blob" });

  // Create download link and trigger download
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  const fileName = `${profile.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}-website.zip`;
  anchor.download = fileName;
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  URL.revokeObjectURL(url);
}
