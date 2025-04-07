interface TravelExperience {
  category: 'SOLO' | 'FRIENDS' | 'GROUP';
  title: string;
  description: string;
  image: string;
  nights: number;
  camps: number;
  price: number;
}

interface TravelExperiencesData {
  title: string;
  description: string;
  experiences: TravelExperience[];
}

export const akageraExperiences: TravelExperiencesData = {
  title: "Exploring Akagera wildlife",
  description: "In stark contrast to Volcanoes National Park, Akagera's savannah, woodlands, wetlands and lakes create a wide-open, expansive landscape and prime viewing of Africa's iconic predators and their prey. The wetlands, rivers and lakes are home to hippos, crocodiles and a brilliant display of bird species. The perfect complement to your Rwandan safari.",
  experiences: [
    {
      category: 'SOLO' as const,
      title: "Savannah Safari & Gorilla Trekking",
      description: "An 8-night Rwandan safari - from vibrant Kigali to the plains of Akagera and the lush mountains and valleys of Volcanoes National Park.",
      image: "https://images.unsplash.com/photo-1519659528534-7fd733a832a0?q=80&w=1920",
      nights: 8,
      camps: 2,
      price: 16500
    },
    {
      category: 'FRIENDS' as const,
      title: "Remarkable Rwanda",
      description: "Safe, sophisticated Kigali. Incredible primate encounters. Warm, friendly people. Combined with visits to exceptional national parks, all in one remarkable, Rwandan journey.",
      image: "https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=1920",
      nights: 7,
      camps: 4,
      price: 12660
    },
    {
      category: 'GROUP' as const,
      title: "Rwanda Wildlife Adventure",
      description: "Experience the best of Rwanda's wildlife with a group safari adventure. From the savannah plains to mountain gorillas, enjoy shared moments in nature's most spectacular settings.",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920",
      nights: 6,
      camps: 3,
      price: 9800
    }
  ]
}; 