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
    image: '/assets/destinations/rwanda-tourism.jpg',
    description: 'The land of a thousand hills, home to mountain gorillas and stunning landscapes.',
    url: '/destinations/rwanda',
    slug: 'rwanda',
    location: 'East Africa',
    highlights: [
      'Mountain gorilla trekking',
      'Volcanoes National Park',
      'Cultural experiences',
      'Beautiful landscapes'
    ],
    activities: [
      'Gorilla trekking',
      'Golden monkey tracking',
      'Cultural tours',
      'City tours'
    ],
    bestTime: 'June - September, December - February',
    wildlife: ['Mountain gorillas', 'Golden monkeys', 'Forest elephants', 'Various bird species']
  },
  {
    id: 2,
    name: 'Uganda',
    image: '/assets/destinations/uganda-tourism.jpg',
    description: 'The pearl of Africa with diverse wildlife, including gorillas, chimpanzees, and the Big Five.',
    url: '/destinations/uganda',
    slug: 'uganda',
    location: 'East Africa',
    highlights: [
      'Mountain gorilla trekking',
      'Chimpanzee tracking',
      'Big Five safaris',
      'Murchison Falls'
    ],
    activities: [
      'Gorilla trekking',
      'Chimpanzee tracking',
      'Game drives',
      'Boat safaris'
    ],
    bestTime: 'June - September, December - February',
    wildlife: ['Mountain gorillas', 'Chimpanzees', 'Big Five', 'Tree-climbing lions']
  },
  {
    id: 3,
    name: 'Bwindi Impenetrable National Park',
    image: '/assets/common/placeholder.svg',
    description: 'Home to nearly half of the world\'s remaining mountain gorillas, this UNESCO World Heritage site offers an unforgettable gorilla trekking experience.',
    url: '/destinations/bwindi-impenetrable-national-park',
    slug: 'bwindi-impenetrable-national-park',
    location: 'Southwestern Uganda',
    highlights: [
      'Mountain gorilla trekking',
      'Over 20 habituated gorilla families',
      'UNESCO World Heritage Site',
      'Ancient rainforest ecosystem'
    ],
    activities: [
      'Gorilla trekking',
      'Batwa cultural encounters',
      'Bird watching',
      'Nature walks'
    ],
    bestTime: 'June - September, December - February',
    wildlife: ['Mountain gorillas', 'Forest elephants', 'Chimpanzees', '350+ bird species']
  },
  {
    id: 4,
    name: 'Kibale National Park',
    image: '/assets/common/placeholder.svg',
    description: 'Known as the primate capital of the world, Kibale Forest is home to the highest concentration of primates in East Africa.',
    url: '/destinations/kibale-national-park',
    slug: 'kibale-national-park',
    location: 'Western Uganda',
    highlights: [
      'Highest primate density in Africa',
      'Chimpanzee trekking',
      '13 primate species',
      'Tropical rainforest'
    ],
    activities: [
      'Chimpanzee trekking',
      'Primate habituation experience',
      'Bird watching',
      'Nature walks'
    ],
    bestTime: 'February - May, September - November',
    wildlife: ['Chimpanzees', 'Red colobus monkeys', 'L\'Hoest\'s monkeys', '375+ bird species']
  },
  {
    id: 5,
    name: 'Kidepo Valley National Park',
    image: '/assets/common/placeholder.svg',
    description: 'Uganda\'s most remote and pristine wilderness area, offering spectacular landscapes and unique wildlife viewing opportunities.',
    url: '/destinations/kidepo-valley-national-park',
    slug: 'kidepo-valley-national-park',
    location: 'Northeastern Uganda',
    highlights: [
      'Remote wilderness experience',
      'Spectacular mountain scenery',
      'Unique wildlife species',
      'Cultural encounters with Karamojong'
    ],
    activities: [
      'Game drives',
      'Cultural tours',
      'Mountain hiking',
      'Bird watching'
    ],
    bestTime: 'September - March',
    wildlife: ['Lions', 'Leopards', 'Cheetahs', 'Ostriches', 'Zebras']
  },
  {
    id: 6,
    name: 'Murchison Falls National Park',
    image: '/assets/common/placeholder.svg',
    description: 'Uganda\'s largest national park, famous for the spectacular Murchison Falls where the Nile River explodes through a narrow gorge.',
    url: '/destinations/murchison-falls-national-park',
    slug: 'murchison-falls-national-park',
    location: 'Northwestern Uganda',
    highlights: [
      'Spectacular Murchison Falls',
      'Nile River boat safaris',
      'Big Four wildlife',
      'Largest national park in Uganda'
    ],
    activities: [
      'Game drives',
      'Boat safaris',
      'Falls hiking',
      'Sport fishing'
    ],
    bestTime: 'December - February, June - September',
    wildlife: ['Elephants', 'Lions', 'Leopards', 'Buffaloes', 'Giraffes', 'Hippos']
  },
  {
    id: 7,
    name: 'Queen Elizabeth National Park',
    image: '/assets/common/placeholder.svg',
    description: 'Uganda\'s most popular national park, known for its diverse ecosystems, tree-climbing lions, and the famous Kazinga Channel.',
    url: '/destinations/queen-elizabeth-national-park',
    slug: 'queen-elizabeth-national-park',
    location: 'Western Uganda',
    highlights: [
      'Tree-climbing lions in Ishasha',
      'Kazinga Channel boat cruise',
      'Diverse ecosystems',
      'Crater lakes'
    ],
    activities: [
      'Game drives',
      'Boat cruises',
      'Chimpanzee tracking',
      'Bird watching'
    ],
    bestTime: 'June - September, December - February',
    wildlife: ['Tree-climbing lions', 'Elephants', 'Hippos', 'Leopards', '600+ bird species']
  }
];
