export interface Medium {
  id: number;
  type: string;
  url: string;
  title?: string;
  description?: string;
}

export interface Checklist {
  id: number;
  title: string;
  text?:string;
  description?: string;
  icon?: string;
}

export interface SeoData {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
}

export interface CtaText {
  primary: string;
  secondary?: string;
  name?: string; 
}

export interface SectionContent {
  title?: string;
  description?: string;
  content?: string;
  image?: string;
  items?: string[];
}

export interface Section {
  id: number;
  type: string;
  title: string;
  content: SectionContent;
  order?: number;
}

export interface Instructor {
  id: number;
  name: string;
  title: string;
  description: string;
  image?: string;
  credentials?: string[];
}

export interface ProductData {
  slug: string;
  id: number;
  title: string;
  description: string; // HTML string
  media: Medium[];
  checklist: Checklist[];
  seo: SeoData;
  cta_text: CtaText;
  sections: Section[];
}

export interface ApiResponse {
  success: boolean;
  data: ProductData;
  message?: string;
}

