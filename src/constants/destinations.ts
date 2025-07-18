export interface Destination {
  id: number;
  name: string;
  image: string;
  description: string;
  url: string;
  slug?: string;
  location?: string;
  highlights?: string[];
  activities?: string[];
  bestTime?: string;
  wildlife?: string[];
}

export const destinations: Destination[] = [
  {
    id: 1,
    name: 'Rwanda',
    image:
      'https://res.cloudinary.com/nishimweprince/image/upload/v1752330253/dawnlight-journeys/gorrillas-4_f71j1k.webp',
    description:
      'The land of a thousand hills, home to mountain gorillas and stunning landscapes.',
    url: '/destinations/rwanda',
    slug: 'rwanda',
    location: 'East Africa',
    highlights: [
      'Mountain gorilla trekking',
      'Volcanoes National Park',
      'Cultural experiences',
      'Beautiful landscapes',
    ],
    activities: [
      'Gorilla trekking',
      'Golden monkey tracking',
      'Cultural tours',
      'City tours',
    ],
    bestTime: 'June - September, December - February',
    wildlife: [
      'Mountain gorillas',
      'Golden monkeys',
      'Forest elephants',
      'Various bird species',
    ],
  },
  {
    id: 2,
    name: 'Uganda',
    image: '/assets/destinations/uganda-tourism.jpg',
    description:
      'The pearl of Africa with diverse wildlife, including gorillas, chimpanzees, and the Big Five.',
    url: 'https://res.cloudinary.com/nishimweprince/image/upload/v1752332362/dawnlight-journeys/lake-mburo-2_i4lpc6.jpg',
    slug: 'uganda',
    location: 'East Africa',
    highlights: [
      'Mountain gorilla trekking',
      'Chimpanzee tracking',
      'Big Five safaris',
      'Murchison Falls',
    ],
    activities: [
      'Gorilla trekking',
      'Chimpanzee tracking',
      'Game drives',
      'Boat safaris',
    ],
    bestTime: 'June - September, December - February',
    wildlife: [
      'Mountain gorillas',
      'Chimpanzees',
      'Big Five',
      'Tree-climbing lions',
    ],
  },
];
