export type AspectRatioType = 'square' | 'portrait' | 'landscape' | 'wide';

export interface ProjectImage {
  url: string;
  caption?: string;
  aspectRatio?: AspectRatioType;
}

export interface Project {
  id: string;
  title: string;
  category: string; // Matches Category ID
  shortDesc: string;
  fullDesc: string;
  role: string;
  year: string;
  client?: string;
  deliverables: string[];
  coverImage: string;
  galleryImages: ProjectImage[];
  metricsOrHighlights?: string[];
  externalUrl?: string;
  featured?: boolean;
}

export interface Category {
  id: string; // Unique string identifier, e.g. 'brand-strategy', 'photography'
  title: string;
  tagline: string;
  description: string;
  coverImage: string;
  accentColor: string; // e.g. '#38BDF8'
  accentBg?: string; // e.g. 'rgba(56, 189, 248, 0.12)'
}

export interface ProfileInfo {
  name: string;
  handle: string;
  role: string;
  institution: string;
  location: string;
  avatarUrl: string;
  bio: string;
  email: string;
  skills: string[];
}

export type AppScreen =
  | { type: 'categories' }
  | { type: 'category'; categoryId: string }
  | { type: 'project'; categoryId: string; projectId: string };

