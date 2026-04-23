export interface HeroContent {
  title: string;
  description: string;
  primaryAction: string;
  secondaryAction: string;
  highlights: string[];
  socialProof: string;
}

export interface HeaderContent {
  brandTitle: string;
  brandSubtitle: string;
  primaryAction: string;
  secondaryAction: string;
  whatsappLink: string;
  instagramLink: string;
}

export interface ProblemContent {
  title: string;
  intro: string;
  painPoints: string[];
  conclusion: string;
}

export interface AboutContent {
  title: string;
  paragraphs: string[];
  bulletPoints: string[];
}

export interface ProgramPillar {
  title: string;
  description: string;
}

export interface ResultStat {
  value: string;
  label: string;
}

export interface CtaContent {
  title: string;
  subtitle: string;
  primaryAction: string;
  secondaryAction: string;
}

export interface Testimonial {
  name: string;
  text: string;
}

export interface ObjectionContent {
  title: string;
  subtitle: string;
  points: string[];
  conclusion: string;
}

export interface AudienceContent {
  title: string;
  forWho: string[];
  notForWho: string;
}

export interface LandingContent {
  header: HeaderContent;
  hero: HeroContent;
  problem: ProblemContent;
  about: AboutContent;
  pillars: ProgramPillar[];
  stats: ResultStat[];
  testimonials: Testimonial[];
  objections: ObjectionContent;
  audience: AudienceContent;
  cta: CtaContent;
}
