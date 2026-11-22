// Shape of content/portfolio.json. Keep in sync with content/portfolio.schema.json.
export interface Link {
  label: string;
  url: string;
}

export type SectionId =
  | "whoami" | "about" | "experience" | "projects" | "skills"
  | "achievements" | "competitive" | "education" | "writing" | "contact";

export interface Section {
  id: SectionId;
  nav: string;
  heading: string;
  command: string;
  window: string;
}

export interface Experience {
  id: string;
  company: string;
  companyUrl?: string;
  role: string;
  start: string;
  end: string;
  logo: string;
  points: string[];
  tools?: string[];
  languages?: string[];
  links?: Link[];
  github?: string;
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  context?: string;
  contextUrl?: string;
  start?: string;
  end?: string;
  image?: string;
  points: string[];
  languages?: string[];
  stack?: string[];
  links: Link[];
  featured?: boolean;
  team?: Link[];
}

export interface Achievement {
  title: string;
  detail: string;
  links?: Link[];
  github?: string;
}

export interface Competitive {
  platform: string;
  handle: string;
  profileUrl: string;
  rating: string;
  rank: string;
  bestRank?: string;
  bestContest?: string;
  bestContestUrl?: string;
}

export interface Education {
  institution: string;
  url?: string;
  image?: string;
  level?: string;
  degree: string;
  start: string;
  end: string;
  location?: string;
  scoreLabel?: string;
  score?: string;
}

export interface Article {
  title: string;
  summary?: string;
  date?: string;
  readTime?: string;
  platform?: string;
  url: string;
}

export interface Portfolio {
  site: {
    title: string;
    description: string;
    url: string;
    ogImage: string;
    terminalUser: string;
    terminalHost: string;
    footerNote: string;
  };
  profile: {
    name: string;
    handle: string;
    title: string;
    company: string;
    intro: string;
    roles: string[];
    photo: string;
    avatar?: string;
  };
  links: {
    email: string;
    resume?: string;
    linkedin?: string;
    github?: string;
    instagram?: string;
    medium?: string;
    codeforces?: string;
    leetcode?: string;
    atcoder?: string;
  };
  sections: Section[];
  about: { paragraphs: string[]; labels?: string[]; facts: { label: string; value: string }[] };
  experience: Experience[];
  experienceVisible?: number;
  projects: Project[];
  skills: { group: string; items: string[] }[];
  achievements: Achievement[];
  competitive: Competitive[];
  education: Education[];
  articles: Article[];
  contact: { heading: string; message: string };
}
