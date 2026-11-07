import { ProfileData } from '../types/portfolio';

export const defaultProfile: ProfileData = {
  name: "Md. Imtiajul Hoque Rafi",
  nameBn: "মোঃ ইমতিয়াজুল হক রাফি",
  title: "Full-Stack Web Developer & Software Engineer",
  titleBn: "ফুল-স্ট্যাক ওয়েব ডেভেলপার ও সফটওয়্যার ইঞ্জিনিয়ার",
  tagline: "Building modern, scalable web applications with clean code & thoughtful user experience.",
  taglineBn: "আধুনিক, নির্ভরযোগ্য ওয়েব অ্যাপ্লিকেশন ও সুন্দর ইউজার ইন্টারফেস তৈরির কারিগর।",
  bio: "Hi! I am Md. Imtiajul Hoque Rafi, a passionate software developer specializing in modern JavaScript/TypeScript, React, Node.js, and responsive frontend architectures. I love solving real-world challenges through elegant, performant digital solutions and clean engineering.",
  bioBn: "আমি মোঃ ইমতিয়াজুল হক রাফি, একজন উদ্যমী সফটওয়্যার ও ওয়েব ডেভেলপার। আধুনিক জাভাস্ক্রিপ্ট/টাইপস্ক্রিপ্ট, রিঅ্যাক্ট এবং নোড.জেএস দিয়ে উচ্চমানের রেসপনসিভ ওয়েব অ্যাপ্লিকেশন তৈরিতে আমি পারদর্শী। যেকোনো জটিল সমস্যাকে সহজ ও কার্যকরী ওয়েব প্ল্যাটফর্মে রূপান্তর করাই আমার লক্ষ্য।",
  email: "mdimtiajulhoquerafi8@gmail.com",
  phone: "+880 1700-000000",
  location: "Dhaka, Bangladesh",
  locationBn: "ঢাকা, বাংলাদেশ",
  github: "https://github.com/mdimtiajulhoquerafi8",
  linkedin: "https://linkedin.com/in/imtiajul-hoque-rafi",
  whatsapp: "https://wa.me/8801700000000",
  avatarUrl: "/src/assets/images/hero_portrait_rafi_1794071687692.jpg",
  yearsOfExperience: 3,
  completedProjects: 24,
  clientSatisfaction: 99,
  skills: [
    { name: "React.js / Next.js", category: "Frontend", proficiency: 92, experience: "3+ years", experienceBn: "৩+ বছর" },
    { name: "TypeScript & JavaScript (ES6+)", category: "Frontend", proficiency: 90, experience: "3+ years", experienceBn: "৩+ বছর" },
    { name: "Tailwind CSS & Modern UI", category: "Frontend", proficiency: 95, experience: "3+ years", experienceBn: "৩+ বছর" },
    { name: "Node.js & Express", category: "Backend", proficiency: 85, experience: "2+ years", experienceBn: "২+ বছর" },
    { name: "RESTful APIs & GraphQL", category: "Backend", proficiency: 88, experience: "2+ years", experienceBn: "২+ বছর" },
    { name: "PostgreSQL & MongoDB", category: "Database & Cloud", proficiency: 84, experience: "2+ years", experienceBn: "২+ বছর" },
    { name: "Firebase & Cloud Services", category: "Database & Cloud", proficiency: 86, experience: "2+ years", experienceBn: "২+ বছর" },
    { name: "Git, GitHub & CI/CD", category: "Tools", proficiency: 90, experience: "3+ years", experienceBn: "৩+ বছর" },
    { name: "Figma to Responsive Code", category: "Tools", proficiency: 94, experience: "3+ years", experienceBn: "৩+ বছর" },
  ],
  projects: [
    {
      id: "nova-market",
      title: "NovaMarket - E-Commerce Platform",
      titleBn: "নোভামার্কেট - মাল্টি-ভেন্ডর ই-কমার্স প্ল্যাটফর্ম",
      category: "Full Stack",
      categoryBn: "ফুল-স্ট্যাক",
      description: "Full-stack marketplace with real-time analytics dashboard, order tracking, and dynamic cart.",
      descriptionBn: "রিয়েল-টাইম অ্যানালিটিক্স ড্যাশবোর্ড, কার্ট ম্যানেজমেন্ট ও আধুনিক পেমেন্ট সমন্বিত সম্পূর্ণ ই-কমার্স প্ল্যাটফর্ম।",
      fullDescription: "NovaMarket is a high-performance e-commerce solution with dynamic inventory sync, customer analytics charts, payment gateway integration, and a mobile-first checkout experience.",
      fullDescriptionBn: "নোভামার্কেট একটি উচ্চগতির আধুনিক অনলাইন মার্কেটপ্লেস যা রিয়েল-টাইম ইনভেন্টরি, বিক্রেতা অ্যানালিটিক্স এবং সুরক্ষিত পেমেন্ট সুবিধা প্রদান করে।",
      image: "/src/assets/images/project_ecommerce_platform_1794071702551.jpg",
      technologies: ["React", "Node.js", "Express", "Tailwind CSS", "MongoDB"],
      liveUrl: "https://novamarket.demo.app",
      githubUrl: "https://github.com/mdimtiajulhoquerafi8/novamarket",
      metrics: "3.2x faster checkout · 99.9% uptime",
      metricsBn: "৩.২ গুণ দ্রুতগতির চেকআউট · ৯৯.৯% আপটাইম",
      featured: true,
    },
    {
      id: "aether-workspace",
      title: "Aether - AI Developer Workspace",
      titleBn: "ইথার - এআই ডেভেলপার ওয়ার্কস্পেস",
      category: "Full Stack",
      categoryBn: "ফুল-স্ট্যাক",
      description: "SaaS dashboard with PR velocity metrics, code insights heatmap, and productivity tracking.",
      descriptionBn: "কোড অ্যানালিটিক্স, পিআর ভেলোসিটি এবং টিম প্রোডাক্টিভিটি ট্র্যাকিং সমৃদ্ধ ক্লাউড এসএএএস ড্যাশবোর্ড।",
      fullDescription: "Aether provides engineering teams with commit heatmaps, automated PR summaries, and sprint velocity analytics engineered with modern React and Tailwind.",
      fullDescriptionBn: "ইথার টিম লিড এবং ইঞ্জিনিয়ারদের জন্য তৈরি একটি কমপ্লিট ড্যাশবোর্ড যা কোড কোয়ালিটি এবং অ্যাক্টিভিটি ভিজ্যুয়ালাইজ করে।",
      image: "/src/assets/images/project_ai_workspace_1794071703306.jpg",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js", "Firebase"],
      liveUrl: "https://aether-workspace.demo.app",
      githubUrl: "https://github.com/mdimtiajulhoquerafi8/aether-workspace",
      metrics: "Used by 45+ developers · Sub-50ms latency",
      metricsBn: "৪৫+ ডেভেলপারের ব্যবহার · ৫০ মিলি-সেকেন্ডের কম লেটেন্সি",
      featured: true,
    },
    {
      id: "learn-flow",
      title: "LearnFlow - Interactive Academy",
      titleBn: "লার্নফ্লো - ইন্টারেক্টিভ এডুকেশন পোর্টাল",
      category: "Frontend",
      categoryBn: "ফ্রন্টএন্ড",
      description: "E-learning platform featuring course modules, progress milestones, and quiz interfaces.",
      descriptionBn: "কোর্স মডিউল, অগ্রগতি ট্র্যাকার এবং ইন্টারেক্টিভ কুইজ সমৃদ্ধ আধুনিক এডটেক প্ল্যাটফর্ম।",
      fullDescription: "Interactive learning management application with modular chapter navigation, video lessons, certificate generation, and dark mode support.",
      fullDescriptionBn: "শিক্ষার্থী ও প্রশিক্ষকদের জন্য একটি সম্পূর্ণ লার্নিং ম্যানেজমেন্ট পোর্টাল যাতে ভিডিও লেসন ও সার্টিফিকেট ডাউনলোডের ব্যবস্থা রয়েছে।",
      image: "/src/assets/images/project_learning_portal_1794071703185.jpg",
      technologies: ["React", "Tailwind CSS", "Vite", "Lucide Icons"],
      liveUrl: "https://learnflow.demo.app",
      githubUrl: "https://github.com/mdimtiajulhoquerafi8/learnflow",
      metrics: "12,000+ Active students · 98% course completion",
      metricsBn: "১২,০০০+ সক্রিয় শিক্ষার্থী · ৯৮% কোর্স সমাপ্তির হার",
      featured: true,
    },
  ],
  experiences: [
    {
      id: "exp-1",
      role: "Lead Full-Stack Web Developer",
      roleBn: "লিড ফুল-স্ট্যাক ওয়েব ডেভেলপার",
      organization: "Freelance & Remote Solutions",
      organizationBn: "ফ্রিল্যান্স ও রিমোট সলিউশন",
      period: "2023 - Present",
      periodBn: "২০২৩ - বর্তমান",
      description: "Architecting and shipping responsive web apps, REST APIs, and client portals for global clients.",
      descriptionBn: "আন্তর্জাতিক ক্লায়েন্টদের জন্য রেসপনসিভ ওয়েব অ্যাপ, এপিআই ও ক্লায়েন্ট পোর্টাল তৈরি ও পরিচালনা।",
      highlights: [
        "Delivered 20+ production-ready client applications with 99% on-time delivery.",
        "Engineered scalable component libraries and optimized frontend loading times by 40%."
      ],
      highlightsBn: [
        "২০টিরও বেশি সফল ক্লায়েন্ট প্রজেক্ট নির্দিষ্ট সময়ের মধ্যে বাস্তবায়ন।",
        "পুনর্ব্যবহারযোগ্য কম্পোনেন্ট লাইব্রেরি ও পেজ লোডিং গতি ৪০% বৃদ্ধি।"
      ]
    },
    {
      id: "exp-2",
      role: "Frontend Engineer",
      roleBn: "ফ্রন্টএন্ড ইঞ্জিনিয়ার",
      organization: "Tech Innovation Studio",
      organizationBn: "টেক ইনোভেশন স্টুডিও",
      period: "2021 - 2023",
      periodBn: "২০২১ - ২০২৩",
      description: "Crafted interactive user interfaces, integrated RESTful APIs, and maintained design systems.",
      descriptionBn: "ইন্টারেক্টিভ ইউজার ইন্টারফেস তৈরি, এপিআই ইন্টিগ্রেশন এবং টিম কোড রিভিউ পরিচালনা।",
      highlights: [
        "Converted complex Figma designs into responsive, pixel-perfect web interfaces.",
        "Collaborated with cross-functional teams to deploy weekly release sprints."
      ],
      highlightsBn: [
        "ফিগমা ডিজাইনকে নিখুঁত ও রেসপনসিভ ওয়েব কোডে রূপান্তর।",
        "টিমের সাথে সমন্বয় করে নিয়মিত নতুন ফিচার রিলিজ ও বাগ ফিক্সিং।"
      ]
    }
  ],
  education: [
    {
      id: "edu-1",
      degree: "B.Sc. in Computer Science & Engineering",
      degreeBn: "বি.এস.সি ইন কম্পিউটার সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিং",
      institution: "Dhaka, Bangladesh",
      institutionBn: "ঢাকা, বাংলাদেশ",
      period: "2019 - 2023",
      periodBn: "২০১৯ - ২০২৩",
      details: "Focused on Software Architecture, Data Structures, Web Systems & Database Design.",
      detailsBn: "সফটওয়্যার আর্কিটেকচার, ডেটা স্ট্রাকচার, ওয়েব সিস্টেমস ও ডেটাবেজ ডিজাইনে বিশেষ মনোযোগ।"
    }
  ]
};
