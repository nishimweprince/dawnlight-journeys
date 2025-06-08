export interface Experience {
  id: number;
  title: string;
  icon: any;
  description: string;
  url: string;
  image?: string;
  highlights: string[];
  duration?: string;
  difficulty?: string;
  bestTime?: string;
}

import { Camera, Coffee, Compass, Users, Mountain, Binoculars, Heart, Palette } from "lucide-react";

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Wildlife Photography",
    icon: Camera,
    description: "Capture stunning images of Africa's incredible wildlife with expert guidance.",
    url: "/experiences/photography",
    image: "/assets/common/placeholder.svg",
    highlights: [
      "Guided by professional wildlife photographers",
      "Access to exclusive locations",
      "Workshops on camera techniques",
      "Portfolio review sessions"
    ],
    duration: "3-7 days",
    difficulty: "All levels",
    bestTime: "Year round"
  },
  {
    id: 2,
    title: "Cultural Immersion",
    icon: Users,
    description: "Connect with local communities and experience authentic African traditions.",
    url: "/experiences/cultural",
    image: "/assets/common/placeholder.svg",
    highlights: [
      "Village visits and homestays",
      "Traditional music and dance",
      "Hands-on craft workshops",
      "Local cooking classes"
    ],
    duration: "1-5 days",
    difficulty: "Easy",
    bestTime: "Year round"
  },
  {
    id: 3,
    title: "Adventure Trekking",
    icon: Compass,
    description: "Explore breathtaking landscapes on foot with experienced local guides.",
    url: "/experiences/trekking",
    image: "/assets/common/placeholder.svg",
    highlights: [
      "Mountain and forest treks",
      "Wildlife tracking",
      "Scenic viewpoints",
      "Camping under the stars"
    ],
    duration: "1-10 days",
    difficulty: "Moderate to Challenging",
    bestTime: "Dry seasons"
  },
  {
    id: 4,
    title: "Culinary Experiences",
    icon: Coffee,
    description: "Taste authentic African cuisine and learn traditional cooking methods.",
    url: "/experiences/culinary",
    image: "/assets/common/placeholder.svg",
    highlights: [
      "Cooking classes with local chefs",
      "Market tours",
      "Tasting traditional dishes",
      "Coffee plantation visits"
    ],
    duration: "Half day to 3 days",
    difficulty: "Easy",
    bestTime: "Year round"
  },
  {
    id: 5,
    title: "Mountain Climbing",
    icon: Mountain,
    description: "Challenge yourself with guided climbs of East Africa's highest peaks.",
    url: "/experiences/mountain-climbing",
    image: "/assets/common/placeholder.svg",
    highlights: [
      "Professional mountain guides",
      "All climbing equipment provided",
      "Acclimatization programs",
      "Summit certificates"
    ],
    duration: "5-15 days",
    difficulty: "Challenging",
    bestTime: "Dry seasons"
  },
  {
    id: 6,
    title: "Bird Watching",
    icon: Binoculars,
    description: "Discover East Africa's incredible avian diversity with expert ornithologists.",
    url: "/experiences/bird-watching",
    image: "/assets/common/placeholder.svg",
    highlights: [
      "Expert ornithologist guides",
      "Specialized birding equipment",
      "Endemic species spotting",
      "Photography opportunities"
    ],
    duration: "1-7 days",
    difficulty: "Easy to Moderate",
    bestTime: "November - April"
  },
  {
    id: 7,
    title: "Conservation Volunteering",
    icon: Heart,
    description: "Contribute to wildlife conservation efforts while learning about local ecosystems.",
    url: "/experiences/conservation",
    image: "/assets/common/placeholder.svg",
    highlights: [
      "Hands-on conservation work",
      "Research participation",
      "Community education programs",
      "Certificate of participation"
    ],
    duration: "1-4 weeks",
    difficulty: "Moderate",
    bestTime: "Year round"
  },
  {
    id: 8,
    title: "Art and Craft Workshops",
    icon: Palette,
    description: "Learn traditional African arts and crafts from local master artisans.",
    url: "/experiences/arts-crafts",
    image: "/assets/common/placeholder.svg",
    highlights: [
      "Traditional craft techniques",
      "Local artisan mentorship",
      "Take home your creations",
      "Cultural significance education"
    ],
    duration: "Half day to 3 days",
    difficulty: "Easy",
    bestTime: "Year round"
  }
];
