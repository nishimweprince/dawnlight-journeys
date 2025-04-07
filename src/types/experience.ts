export interface Experience {
  id: number;
  title: string;
  description: string;
  image: string;
  locations: string[];
}

export interface PurposeCategory {
  id: number;
  title: string;
  description: string;
  heading: string;
  image: string;
  cta: string;
  link: string;
}

export interface ExperienceSliderProps {
  experiences: Experience[];
  purposeCategories: PurposeCategory[];
  showPurposeSection?: boolean;
  title?: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
} 