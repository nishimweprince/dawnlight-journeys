export interface Experience {
  id: number;
  title: string;
  icon: any;
  description: string;
  url: string;
  slug?: string;
  image?: string;
  images?: string[];
  highlights: string[];
  duration?: string;
  difficulty?: string;
  bestTime?: string;
  itinerary?: {
    day: number;
    title: string;
    details: string;
  }[];
  locations?: string[];
  inclusions?: string[];
  exclusions?: string[];
  faqs?: {
    question: string;
    answer: string;
  }[];
}

import { Camera, Coffee, Compass, Users, Mountain, Binoculars, Heart, Palette } from "lucide-react";

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Wildlife Photography",
    icon: Camera,
    description: "Capture stunning images of Africa's incredible wildlife with expert guidance.",
    url: "/experiences/photography",
    slug: "photography",
    image: "https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/wildlife-photography_qif4cj",
    highlights: [
      "Guided by professional wildlife photographers",
      "Access to exclusive locations",
      "Workshops on camera techniques",
      "Portfolio review sessions"
    ],
    duration: "3-7 days",
    difficulty: "All levels",
    bestTime: "Year round",
    locations: ["Queen Elizabeth National Park", "Bwindi Impenetrable Forest", "Akagera National Park"],
    inclusions: [
      "Professional photography guide",
      "Camera equipment rental",
      "Portfolio review sessions",
      "All park entrance fees",
      "Transportation in 4WD vehicle"
    ],
    exclusions: [
      "Personal camera equipment",
      "International flights",
      "Travel insurance",
      "Personal expenses"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival and Equipment Setup",
        details: "Meet your photography guide, equipment briefing, and sunset photography session at your lodge."
      },
      {
        day: 2,
        title: "Wildlife Photography Safari",
        details: "Full day game drive focusing on wildlife photography techniques, composition, and lighting."
      },
      {
        day: 3,
        title: "Portfolio Review and Departure",
        details: "Morning photography session, portfolio review with guide, and departure preparations."
      }
    ],
    faqs: [
      {
        question: "Do I need professional camera equipment?",
        answer: "While professional equipment is recommended, we can provide camera rental services for participants."
      },
      {
        question: "What skill level is required?",
        answer: "All skill levels are welcome. Our guides adapt instruction to your experience level."
      }
    ]
  },
  {
    id: 2,
    title: "Cultural Immersion",
    icon: Users,
    description: "Connect with local communities and experience authentic African traditions.",
    url: "/experiences/cultural",
    slug: "cultural",
    image: "https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/cultural-immersion_uhqf3i",
    highlights: [
      "Village visits and homestays",
      "Traditional music and dance",
      "Hands-on craft workshops",
      "Local cooking classes"
    ],
    duration: "1-5 days",
    difficulty: "Easy",
    bestTime: "Year round",
    locations: ["Batwa Communities", "Local Villages", "Cultural Centers"],
    inclusions: [
      "Cultural guide and interpreter",
      "Village visits and activities",
      "Traditional meals",
      "Craft workshop materials",
      "Community contribution fees"
    ],
    exclusions: [
      "Personal shopping",
      "Additional donations",
      "Transportation to villages",
      "Accommodation upgrades"
    ],
    itinerary: [
      {
        day: 1,
        title: "Village Welcome and Introduction",
        details: "Meet community leaders, traditional welcome ceremony, and introduction to local customs."
      },
      {
        day: 2,
        title: "Traditional Crafts and Cooking",
        details: "Hands-on workshops in traditional crafts, cooking classes with local families."
      },
      {
        day: 3,
        title: "Music, Dance and Farewell",
        details: "Traditional music and dance performances, participate in cultural activities, farewell ceremony."
      }
    ],
    faqs: [
      {
        question: "Is accommodation provided in the village?",
        answer: "Homestay options are available, or we can arrange nearby lodge accommodation based on your preference."
      },
      {
        question: "What languages are spoken?",
        answer: "Local guides provide translation services. Basic English is spoken in most communities."
      }
    ]
  },
  {
    id: 3,
    title: "Adventure Trekking",
    icon: Compass,
    description: "Explore breathtaking landscapes on foot with experienced local guides.",
    url: "/experiences/trekking",
    slug: "trekking",
    image: "https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/adventure-trekking_lyxkrr",
    highlights: [
      "Mountain and forest treks",
      "Wildlife tracking",
      "Scenic viewpoints",
      "Camping under the stars"
    ],
    duration: "1-10 days",
    difficulty: "Moderate to Challenging",
    bestTime: "Dry seasons",
    locations: ["Rwenzori Mountains", "Nyungwe Forest", "Mount Elgon", "Virunga Mountains"],
    inclusions: [
      "Experienced trekking guides",
      "Camping equipment",
      "All meals during trek",
      "Park entrance fees",
      "Porter services"
    ],
    exclusions: [
      "Personal trekking gear",
      "Travel insurance",
      "Tips for guides and porters",
      "Personal medications"
    ],
    itinerary: [
      {
        day: 1,
        title: "Trek Preparation and Start",
        details: "Equipment check, briefing with guides, begin trek to first campsite."
      },
      {
        day: 2,
        title: "Mountain Ascent",
        details: "Continue ascent through different vegetation zones, wildlife spotting opportunities."
      },
      {
        day: 3,
        title: "Summit Attempt",
        details: "Early morning summit attempt, panoramic views, descent to lower camp."
      },
      {
        day: 4,
        title: "Descent and Return",
        details: "Final descent through forest zones, return to base, celebration of achievement."
      }
    ],
    faqs: [
      {
        question: "What fitness level is required?",
        answer: "Good physical fitness is required. We recommend regular exercise preparation before the trek."
      },
      {
        question: "What equipment do I need to bring?",
        answer: "We provide camping equipment. You need personal trekking gear, clothing, and boots."
      }
    ]
  },
  {
    id: 4,
    title: "Culinary Experiences",
    icon: Coffee,
    description: "Taste authentic African cuisine and learn traditional cooking methods.",
    url: "/experiences/culinary",
    slug: "culinary",
    image: "https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/culinary-experinces_zc1zsv",
    highlights: [
      "Cooking classes with local chefs",
      "Market tours",
      "Tasting traditional dishes",
      "Coffee plantation visits"
    ],
    duration: "Half day to 3 days",
    difficulty: "Easy",
    bestTime: "Year round",
    locations: ["Local Markets", "Coffee Plantations", "Traditional Kitchens", "Restaurants"],
    inclusions: [
      "Professional chef instructor",
      "All cooking ingredients",
      "Market tour guide",
      "Recipe booklet",
      "Certificate of completion"
    ],
    exclusions: [
      "Transportation to venues",
      "Additional meals",
      "Personal shopping at markets",
      "Cooking equipment to take home"
    ],
    itinerary: [
      {
        day: 1,
        title: "Market Tour and Ingredient Selection",
        details: "Guided tour of local markets, ingredient selection, introduction to local spices and produce."
      },
      {
        day: 2,
        title: "Traditional Cooking Class",
        details: "Hands-on cooking class with local chef, prepare traditional dishes, enjoy your creations."
      },
      {
        day: 3,
        title: "Coffee Experience and Farewell",
        details: "Visit coffee plantation, learn roasting process, coffee tasting, farewell meal."
      }
    ],
    faqs: [
      {
        question: "Are vegetarian options available?",
        answer: "Yes, we can accommodate all dietary restrictions and preferences with advance notice."
      },
      {
        question: "Can I get recipes to take home?",
        answer: "All participants receive a recipe booklet with detailed instructions for dishes learned."
      }
    ]
  },
  {
    id: 5,
    title: "Mountain Climbing",
    icon: Mountain,
    description: "Challenge yourself with guided climbs of East Africa's highest peaks.",
    url: "/experiences/mountain-climbing",
    slug: "mountain-climbing",
    image: "https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/mountain-climbing_mahx1d",
    highlights: [
      "Professional mountain guides",
      "All climbing equipment provided",
      "Acclimatization programs",
      "Summit certificates"
    ],
    duration: "5-15 days",
    difficulty: "Challenging",
    bestTime: "Dry seasons",
    locations: ["Mount Kilimanjaro", "Rwenzori Mountains", "Mount Kenya", "Mount Elgon"],
    inclusions: [
      "Certified mountain guides",
      "Technical climbing equipment",
      "Camping and cooking equipment",
      "All meals during climb",
      "Summit certificate"
    ],
    exclusions: [
      "Personal climbing gear",
      "Travel and medical insurance",
      "Tips for guides and porters",
      "Emergency evacuation costs"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival and Equipment Check",
        details: "Meet climbing team, equipment fitting and check, final preparations and briefing."
      },
      {
        day: 2,
        title: "Base Camp Trek",
        details: "Trek to base camp, acclimatization walk, team building and route planning."
      },
      {
        day: 3,
        title: "Acclimatization Day",
        details: "Practice technical skills, short acclimatization climb, rest and preparation."
      },
      {
        day: 4,
        title: "Summit Attempt",
        details: "Early morning summit push, technical climbing sections, summit celebration."
      },
      {
        day: 5,
        title: "Descent and Celebration",
        details: "Descent to base camp, pack equipment, celebration dinner and certificate ceremony."
      }
    ],
    faqs: [
      {
        question: "What climbing experience is required?",
        answer: "Previous mountaineering experience is recommended. We offer training programs for beginners."
      },
      {
        question: "What happens in bad weather?",
        answer: "Safety is our priority. Climbs may be postponed or routes changed based on weather conditions."
      }
    ]
  },
  {
    id: 6,
    title: "Bird Watching",
    icon: Binoculars,
    description: "Discover East Africa's incredible avian diversity with expert ornithologists.",
    url: "/experiences/bird-watching",
    slug: "bird-watching",
    image: "https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/bird-watching_neixw4",
    highlights: [
      "Expert ornithologist guides",
      "Specialized birding equipment",
      "Endemic species spotting",
      "Photography opportunities"
    ],
    duration: "1-7 days",
    difficulty: "Easy to Moderate",
    bestTime: "November - April",
    locations: ["Nyungwe Forest", "Queen Elizabeth National Park", "Kibale Forest", "Akagera National Park"],
    inclusions: [
      "Expert ornithologist guide",
      "Binoculars and spotting scopes",
      "Bird identification guides",
      "Transportation to birding sites",
      "Bird checklist and certificate"
    ],
    exclusions: [
      "Personal binoculars",
      "Photography equipment",
      "Meals at remote locations",
      "Accommodation upgrades"
    ],
    itinerary: [
      {
        day: 1,
        title: "Forest Birding Introduction",
        details: "Early morning forest walk, introduction to local bird species, equipment familiarization."
      },
      {
        day: 2,
        title: "Endemic Species Focus",
        details: "Target endemic and rare species, specialized birding locations, photography opportunities."
      },
      {
        day: 3,
        title: "Wetland and Savanna Birds",
        details: "Explore different habitats, wetland species, savanna birds, species identification workshop."
      }
    ],
    faqs: [
      {
        question: "Do I need birding experience?",
        answer: "No experience necessary. Our guides cater to all levels from beginners to expert birders."
      },
      {
        question: "What equipment is provided?",
        answer: "We provide binoculars, spotting scopes, and identification guides. Bring your own camera."
      }
    ]
  },
  {
    id: 7,
    title: "Conservation Volunteering",
    icon: Heart,
    description: "Contribute to wildlife conservation efforts while learning about local ecosystems.",
    url: "/experiences/conservation",
    slug: "conservation",
    image: "https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/conservation-volunterring_ecnzn6",
    highlights: [
      "Hands-on conservation work",
      "Research participation",
      "Community education programs",
      "Certificate of participation"
    ],
    duration: "1-4 weeks",
    difficulty: "Moderate",
    bestTime: "Year round",
    locations: ["National Parks", "Conservation Centers", "Research Stations", "Local Communities"],
    inclusions: [
      "Conservation project participation",
      "Research training and materials",
      "Accommodation at research station",
      "All meals during program",
      "Certificate of participation"
    ],
    exclusions: [
      "International flights",
      "Personal equipment",
      "Weekend excursions",
      "Travel insurance"
    ],
    itinerary: [
      {
        day: 1,
        title: "Orientation and Training",
        details: "Project orientation, conservation training, safety briefing, meet research team."
      },
      {
        day: 7,
        title: "Field Research Week",
        details: "Participate in ongoing research projects, data collection, wildlife monitoring activities."
      },
      {
        day: 14,
        title: "Community Outreach",
        details: "Community education programs, school visits, conservation awareness activities."
      },
      {
        day: 21,
        title: "Project Completion",
        details: "Final data analysis, project presentation, certificate ceremony, farewell activities."
      }
    ],
    faqs: [
      {
        question: "What type of conservation work is involved?",
        answer: "Activities include wildlife monitoring, habitat restoration, data collection, and community education."
      },
      {
        question: "Is accommodation provided?",
        answer: "Yes, accommodation is provided at research stations or nearby facilities with basic amenities."
      }
    ]
  },
  {
    id: 8,
    title: "Art and Craft Workshops",
    icon: Palette,
    description: "Learn traditional African arts and crafts from local master artisans.",
    url: "/experiences/arts-crafts",
    slug: "arts-crafts",
    image: "https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/art-and-craftshops_vd5nzy",
    highlights: [
      "Traditional craft techniques",
      "Local artisan mentorship",
      "Take home your creations",
      "Cultural significance education"
    ],
    duration: "Half day to 3 days",
    difficulty: "Easy",
    bestTime: "Year round",
    locations: ["Artisan Workshops", "Cultural Centers", "Local Markets", "Community Centers"],
    inclusions: [
      "Master artisan instruction",
      "All craft materials",
      "Tools and equipment use",
      "Cultural context education",
      "Completed artwork to take home"
    ],
    exclusions: [
      "Additional materials for extra projects",
      "Transportation to workshops",
      "Personal art supplies",
      "Shipping of large items"
    ],
    itinerary: [
      {
        day: 1,
        title: "Introduction to Traditional Crafts",
        details: "Meet master artisans, learn about traditional techniques, begin first project."
      },
      {
        day: 2,
        title: "Advanced Techniques Workshop",
        details: "Learn advanced techniques, work on complex projects, cultural significance discussions."
      },
      {
        day: 3,
        title: "Project Completion and Exhibition",
        details: "Complete final projects, mini exhibition of work, certificate presentation."
      }
    ],
    faqs: [
      {
        question: "Do I need artistic experience?",
        answer: "No prior experience needed. Workshops are designed for all skill levels with expert guidance."
      },
      {
        question: "Can I ship my artwork home?",
        answer: "Small items can be carried. We can arrange shipping for larger pieces at additional cost."
      }
    ]
  },
  {
    id: 9,
    title: "Chimpanzee Trekking",
    icon: Compass,
    description: "Track chimpanzees in their natural habitat with expert guides in Rwanda's pristine forests.",
    url: "/experiences/chimpanzee-trekking",
    slug: "chimpanzee-trekking",
    image: "https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/chimpanzee-2_zyxglc",
    highlights: [
      "Expert chimpanzee tracking guides",
      "Close encounters with chimpanzees",
      "Forest canopy walks",
      "Cultural village visits"
    ],
    duration: "3 days",
    difficulty: "Moderate",
    bestTime: "Year round",
    locations: ["Nyungwe Forest National Park", "Local Communities"],
    inclusions: [
      "Professional tracking guides",
      "Park entrance fees",
      "Transportation",
      "Accommodation",
      "All meals"
    ],
    exclusions: [
      "International flights",
      "Travel insurance",
      "Personal expenses",
      "Tips for guides"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival and Forest Introduction",
        details: "Arrive at Nyungwe Forest, meet your tracking team, forest briefing and preparation for trekking."
      },
      {
        day: 2,
        title: "Chimpanzee Tracking Adventure",
        details: "Early morning chimpanzee tracking, observe their behavior, afternoon canopy walk experience."
      },
      {
        day: 3,
        title: "Cultural Visit and Departure",
        details: "Visit local communities, learn about conservation efforts, departure preparations."
      }
    ],
    faqs: [
      {
        question: "What is the success rate of seeing chimpanzees?",
        answer: "The success rate is very high (over 90%) as our guides are experienced in tracking chimpanzee movements."
      },
      {
        question: "What should I bring for chimpanzee trekking?",
        answer: "Bring comfortable hiking boots, long pants, long-sleeved shirt, rain jacket, and camera with no flash."
      }
    ]
  }
];
