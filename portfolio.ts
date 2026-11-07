export interface Project {
  id: string;
  title: string;
  titleBn: string;
  category: 'Full Stack' | 'Frontend' | 'UI/UX' | 'Mobile';
  categoryBn: string;
  description: string;
  descriptionBn: string;
  fullDescription: string;
  fullDescriptionBn: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  metrics?: string;
  metricsBn?: string;
  featured?: boolean;
}

export interface SkillItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database & Cloud' | 'Tools';
  proficiency: number;
  experience: string;
  experienceBn: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  roleBn: string;
  organization: string;
  organizationBn: string;
  period: string;
  periodBn: string;
  description: string;
  descriptionBn: string;
  highlights: string[];
  highlightsBn: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  degreeBn: string;
  institution: string;
  institutionBn: string;
  period: string;
  periodBn: string;
  details: string;
  detailsBn: string;
}

export interface ProfileData {
  name: string;
  nameBn: string;
  title: string;
  titleBn: string;
  tagline: string;
  taglineBn: string;
  bio: string;
  bioBn: string;
  email: string;
  phone: string;
  location: string;
  locationBn: string;
  github: string;
  linkedin: string;
  whatsapp: string;
  avatarUrl: string;
  yearsOfExperience: number;
  completedProjects: number;
  clientSatisfaction: number;
  skills: SkillItem[];
  projects: Project[];
  experiences: ExperienceItem[];
  education: EducationItem[];
}
