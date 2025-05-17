// Project type definition
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  url?: string;
  github?: string;
}

// Skill type definition
export interface Skill {
  id: number;
  name: string;
  level: number; // 0-100 percentage
  category: string;
}

// Contact form data type
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Social media link type
export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
