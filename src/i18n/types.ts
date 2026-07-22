export type Language = "pt" | "en" | "es";

export interface TimelineItemT {
  title: string;
  subtitle: string;
  period: string;
  items: string[];
}

export interface ProjectStackT {
  name: string;
  detail: string;
}

export interface ProjectT {
  title: string;
  description: string;
  stacks: ProjectStackT[];
  responsibilities: string[];
  githubUrl?: string;
}

export interface SkillCategoryT {
  title: string;
  skills: string[];
}

export interface HobbyT {
  label: string;
  description: string;
}

export interface Translations {
  meta: {
    htmlLang: string;
  };
  nav: {
    about: string;
    skills: string;
    projects: string;
    education: string;
    experience: string;
    contact: string;
  };
  languagePicker: {
    title: string;
    description: string;
  };
  hero: {
    roles: string[];
    role: string;
    description: string;
    ctaProjects: string;
    ctaContact: string;
  };
  about: {
    label: string;
    headingLine1: string;
    headingLine2: string;
    paragraph1: string;
    paragraph2: string;
  };
  skills: {
    label: string;
    heading: string;
    categories: SkillCategoryT[];
  };
  projects: {
    label: string;
    heading: string;
    responsibilitiesLabel: string;
    code: string;
    items: ProjectT[];
  };
  timeline: {
    educationLabel: string;
    educationHeading: string;
    experienceLabel: string;
    experienceHeading: string;
    education: TimelineItemT[];
    experience: TimelineItemT[];
  };
  hobbies: {
    label: string;
    heading: string;
    items: HobbyT[];
  };
  contact: {
    label: string;
    heading: string;
    description: string;
    email: string;
    downloadCv: string;
    downloadCvPt: string;
    downloadCvEn: string;
    footer: string;
  };
}
