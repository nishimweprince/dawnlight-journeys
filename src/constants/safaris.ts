export interface SafariPackage {
  id: number;
  title: string;
  location: string;
  duration: string;
  image: string;
  description: string;
  url: string;
  slug?: string;
  images?: string[];
  highlights?: string[];
  itinerary?: {
    day: number;
    title: string;
    details: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  bestTime?: string;
  groupSize?: string;
  difficulty?: string;
}

export const safariPackages: SafariPackage[] = [
  {
    id: 1,
    title: '1 Day Gorilla Tour',
    location: 'Bwindi Impenetrable Forest, Uganda',
    duration: '1 day',
    image:
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/vi9wpd1uict3rlxejqf1',
    description:
      'Experience the thrill of encountering mountain gorillas in their natural habitat on this intensive one-day adventure.',
    url: '/safaris/1-day-gorilla-tour',
    slug: '1-day-gorilla-tour',
    images: [
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/vi9wpd1uict3rlxejqf1',
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/mqamqqc2dohryiras64o',
    ],
    highlights: [
      'Gorilla trekking permit included',
      'Professional guide service',
      'Transportation from nearby lodge',
      'Certificate of participation',
    ],
    faqs: [
      {
        question: 'What is the minimum age for gorilla trekking?',
        answer: 'The minimum age for gorilla trekking is 15 years old.',
      },
      {
        question: 'How long does the trek take?',
        answer:
          'The trek can take anywhere from 1-6 hours depending on the location of the gorilla family.',
      },
    ],
    bestTime: 'June - September',
    groupSize: '1-8 people',
    difficulty: 'Moderate',
  },
  {
    id: 2,
    title: '1 Day Rhino Trekking',
    location: 'Ziwa Rhino Sanctuary, Uganda',
    duration: '1 day',
    image:
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/q08oh8nujhyvmofs0zpp',
    description:
      "Track the magnificent white rhinos on foot in Uganda's premier rhino sanctuary.",
    url: '/safaris/1-day-rhino-trekking',
    slug: '1-day-rhino-trekking',
    images: [
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/wpa5xei3futepcrbq7vm',
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/q08oh8nujhyvmofs0zpp',
    ],
    highlights: [
      'Rhino tracking on foot',
      'Educational center visit',
      'Bird watching opportunities',
      'Local community interaction',
    ],
    faqs: [
      {
        question: 'Is rhino trekking safe?',
        answer:
          'Yes, rhino trekking is conducted with experienced guides and safety protocols are strictly followed.',
      },
      {
        question: 'What should I wear for rhino trekking?',
        answer:
          'Wear comfortable walking shoes, long pants, and neutral colored clothing.',
      },
    ],
    bestTime: 'Year round',
    groupSize: '2-10 people',
    difficulty: 'Easy',
  },
  {
    id: 3,
    title: '2 Days Akagera Safari',
    location: 'Akagera National Park, Rwanda',
    duration: '2 days',
    image:
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/w1mmn52r8kip2ggbogt4',
    description:
      "Explore Rwanda's only savanna park with diverse wildlife including the Big Five.",
    url: '/safaris/2-days-akagera',
    slug: '2-days-akagera',
    images: [
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/w1mmn52r8kip2ggbogt4',
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/wgjebndpmejp4fekooxk',
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/sbachfv7v1d2xu2ifdzs',
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/ukxk9qgl3xahf3uhp7rk',
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/q1xoasufkmg0tqixqnl6',
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/rytcqpf0eectu62pictj',
    ],
    highlights: [
      'Game drives in search of Big Five',
      'Boat safari on Lake Ihema',
      'Bird watching (over 500 species)',
      'Scenic landscapes and photography',
    ],
    faqs: [
      {
        question: 'What animals can I see in Akagera?',
        answer:
          'You can see lions, elephants, buffalo, leopards, rhinos, giraffes, zebras, hippos, and many antelope species.',
      },
      {
        question: 'Is accommodation included?',
        answer:
          'Yes, accommodation at a lodge near the park is included in the package.',
      },
    ],
    bestTime: 'June - September',
    groupSize: '2-8 people',
    difficulty: 'Easy',
  },
  {
    id: 4,
    title: '2 Days Gorilla Tour',
    location: 'Volcanoes National Park, Rwanda',
    duration: '2 days',
    image:
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/q08oh8nujhyvmofs0zpp',
    description:
      "An immersive two-day gorilla trekking experience in Rwanda's volcanic mountains.",
    url: '/safaris/2-days-gorilla-tour',
    slug: '2-days-gorilla-tour',
    images: [
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/q08oh8nujhyvmofs0zpp',
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/vbwkdn99escdqc8scxix',
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/xas90h6m4uio90wnqzes',
    ],
    highlights: [
      'Two gorilla trekking sessions',
      'Visit to Dian Fossey tomb',
      'Cultural village experience',
      'Mountain hiking opportunities',
    ],
    faqs: [
      {
        question: 'Can I trek different gorilla families?',
        answer:
          'Yes, you can visit different gorilla families on each day of the tour.',
      },
      {
        question: 'What is included in the package?',
        answer:
          'Gorilla permits, accommodation, meals, transportation, and guide services are included.',
      },
    ],
    bestTime: 'June - September',
    groupSize: '1-8 people',
    difficulty: 'Moderate to Challenging',
  },
  {
    id: 5,
    title: '2 Days Lake Mburo Safari',
    location: 'Lake Mburo National Park, Uganda',
    duration: '2 days',
    image:
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/cpcb9sygwrp3xjten5mv',
    description:
      "Discover Uganda's smallest savanna park with unique wildlife and beautiful lake scenery.",
    url: '/safaris/2-days-lake-mburo',
    slug: '2-days-lake-mburo',
    images: [
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/cpcb9sygwrp3xjten5mv',
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/ckuby2rtv6w3eomdigry',
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/q08oh8nujhyvmofs0zpp',
    ],
    highlights: [
      'Game drives and walking safaris',
      'Boat cruise on Lake Mburo',
      'Horse riding safaris',
      'Night game drives',
    ],
    faqs: [
      {
        question: 'What makes Lake Mburo unique?',
        answer:
          "It's the only park in Uganda where you can do walking safaris and horse riding among wildlife.",
      },
      {
        question: 'What animals will I see?',
        answer:
          'Zebras, impalas, elands, buffaloes, hippos, crocodiles, and over 300 bird species.',
      },
    ],
    bestTime: 'June - August, December - February',
    groupSize: '2-8 people',
    difficulty: 'Easy',
  },
  {
    id: 6,
    title: '2 Days Nyungwe Tour',
    location: 'Nyungwe Forest National Park, Rwanda',
    duration: '2 days',
    image:
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/q08oh8nujhyvmofs0zpp',
    description:
      "Explore one of Africa's oldest rainforests with incredible primate diversity.",
    url: '/safaris/2-days-nyungwe-tour',
    slug: '2-days-nyungwe-tour',
    images: [
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/q08oh8nujhyvmofs0zpp',
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/gg1h6xmgnjijfcmnvivp',
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/rjyuvbbaogyt11dvluwc',
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/sdk206waaj8esw5ynner',
    ],
    highlights: [
      'Chimpanzee trekking',
      'Canopy walk experience',
      'Colobus monkey tracking',
      'Waterfall hikes',
    ],
    faqs: [
      {
        question: 'How long is the canopy walk?',
        answer:
          'The canopy walk is 160 meters long and 70 meters above the forest floor.',
      },
      {
        question: 'What primates can I see?',
        answer:
          'Chimpanzees, colobus monkeys, blue monkeys, and 12 other primate species.',
      },
    ],
    bestTime: 'June - September, December - February',
    groupSize: '2-8 people',
    difficulty: 'Moderate',
  },
  {
    id: 7,
    title: '3 Days Bwindi Gorilla Trekking Tour',
    location: 'Bwindi Impenetrable Forest, Uganda',
    duration: '3 days',
    image:
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/aprkacmqhcomx6kuvrrb',
    description:
      'An extended gorilla trekking adventure with cultural experiences and forest exploration.',
    url: '/safaris/3-days-bwindi-gorilla-trekking-tour',
    slug: '3-days-bwindi-gorilla-trekking-tour',
    images: [
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/aprkacmqhcomx6kuvrrb',
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/s7ekengitq8docursrgc',
    ],
    highlights: [
      'Gorilla trekking experience',
      'Batwa cultural encounter',
      'Forest nature walks',
      'Bird watching opportunities',
    ],
    faqs: [
      {
        question: 'What is the Batwa cultural encounter?',
        answer:
          'An interactive experience with the indigenous Batwa people, learning about their traditional forest lifestyle.',
      },
      {
        question: 'How many gorilla families are in Bwindi?',
        answer:
          'Bwindi has over 20 habituated gorilla families available for trekking.',
      },
    ],
    bestTime: 'June - September, December - February',
    groupSize: '1-8 people',
    difficulty: 'Moderate to Challenging',
  },
  {
    id: 8,
    title: '3 Days Kibale Safari',
    location: 'Kibale Forest National Park, Uganda',
    duration: '3 days',
    image:
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/psmowi9sxjinfba9ra0v',
    description:
      "The ultimate primate safari in Uganda's primate capital with diverse forest activities.",
    url: '/safaris/3-days-kibale-safari',
    slug: '3-days-kibale-safari',
    images: [
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/zssahq149fpoed8a0ptb',
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/psmowi9sxjinfba9ra0v',
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/mcmgun9paxpintehqdks',
    ],
    highlights: [
      'Chimpanzee trekking',
      'Primate habituation experience',
      'Bigodi wetland sanctuary visit',
      'Night forest walks',
    ],
    faqs: [
      {
        question: 'What is the primate habituation experience?',
        answer:
          'A full-day experience following chimpanzees from dawn to dusk, observing their daily behaviors.',
      },
      {
        question: 'How many primate species are in Kibale?',
        answer:
          "Kibale is home to 13 primate species including chimpanzees, red colobus, and L'Hoest's monkeys.",
      },
    ],
    bestTime: 'February - May, September - November',
    groupSize: '2-8 people',
    difficulty: 'Moderate',
  },
  {
    id: 9,
    title: '3 Days Queen Elizabeth Safari',
    location: 'Queen Elizabeth National Park, Uganda',
    duration: '3 days',
    image:
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/k42zcswyvtf3pdcdqfim',
    description:
      "Explore Uganda's most popular national park with diverse ecosystems and wildlife.",
    url: '/safaris/3-days-queen-elizabeth-safari',
    slug: '3-days-queen-elizabeth-safari',
    images: [
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/k42zcswyvtf3pdcdqfim',
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/hbi2suzdhpietabb6a8v',
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/dvz6tkydiawtznebjkhp',
    ],
    highlights: [
      'Game drives in Kasenyi plains',
      'Boat cruise on Kazinga Channel',
      'Tree-climbing lions in Ishasha',
      'Crater lakes exploration',
    ],
    faqs: [
      {
        question: 'What are tree-climbing lions?',
        answer:
          'A unique behavior of lions in the Ishasha sector who climb fig trees, possibly to escape ground heat and insects.',
      },
      {
        question: 'What wildlife can I see on the Kazinga Channel?',
        answer:
          'Hippos, crocodiles, elephants, buffaloes, and numerous water birds.',
      },
    ],
    bestTime: 'June - September, December - February',
    groupSize: '2-8 people',
    difficulty: 'Easy',
  },
  {
    id: 10,
    title: '3 Days Rwanda Gorilla Safari',
    location: 'Volcanoes National Park, Rwanda',
    duration: '3 days',
    image:
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/vbwkdn99escdqc8scxix',
    description:
      'A comprehensive Rwanda gorilla experience with cultural and conservation activities.',
    url: '/safaris/3-days-rwanda-gorilla-safari',
    slug: '3-days-rwanda-gorilla-safari',
    images: [
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/q08oh8nujhyvmofs0zpp',
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/vbwkdn99escdqc8scxix',
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/xas90h6m4uio90wnqzes',
    ],
    highlights: [
      'Mountain gorilla trekking',
      'Golden monkey tracking',
      "Iby'Iwacu cultural village",
      'Dian Fossey research center',
    ],
    faqs: [
      {
        question: "What is the Iby'Iwacu cultural village?",
        answer:
          'A community tourism project showcasing traditional Rwandan culture and supporting local communities.',
      },
      {
        question: 'Can I see both gorillas and golden monkeys?',
        answer:
          'Yes, this package includes permits for both gorilla trekking and golden monkey tracking.',
      },
    ],
    bestTime: 'June - September, December - February',
    groupSize: '1-8 people',
    difficulty: 'Moderate',
  },
  {
    id: 11,
    title: '5 Days Queen Elizabeth and Bwindi Safari',
    location: 'Queen Elizabeth NP & Bwindi Forest, Uganda',
    duration: '5 days',
    image:
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/hbi2suzdhpietabb6a8v',
    description:
      'Combine classic savanna safari with gorilla trekking in this ultimate Uganda experience.',
    url: '/safaris/5-days-queen-elizabeth-and-bwindi-safari',
    slug: '5-days-queen-elizabeth-and-bwindi-safari',
    images: [
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/aprkacmqhcomx6kuvrrb',
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/s7ekengitq8docursrgc',
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/k42zcswyvtf3pdcdqfim',
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/hbi2suzdhpietabb6a8v',
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/dvz6tkydiawtznebjkhp',
    ],
    highlights: [
      'Big game viewing in Queen Elizabeth',
      'Kazinga Channel boat safari',
      'Mountain gorilla trekking',
      'Tree-climbing lions in Ishasha',
    ],
    faqs: [
      {
        question: 'How do we travel between the parks?',
        answer:
          'We travel by road through the scenic Ishasha sector, which offers additional wildlife viewing opportunities.',
      },
      {
        question: 'What accommodation is provided?',
        answer:
          'Mid-range to luxury lodges near both parks with full board meals included.',
      },
    ],
    bestTime: 'June - September, December - February',
    groupSize: '2-8 people',
    difficulty: 'Moderate',
  },
  {
    id: 12,
    title: '8 Days Kibale Queen and Bwindi Safari',
    location: 'Kibale, Queen Elizabeth & Bwindi, Uganda',
    duration: '8 days',
    image:
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/dvz6tkydiawtznebjkhp',
    description:
      'The ultimate Uganda safari combining primates, big game, and gorilla trekking.',
    url: '/safaris/8-days-kibale-queen-and-bwindi',
    slug: '8-days-kibale-queen-and-bwindi',
    images: [
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/aprkacmqhcomx6kuvrrb',
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/s7ekengitq8docursrgc',
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/k42zcswyvtf3pdcdqfim',
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/hbi2suzdhpietabb6a8v',
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/dvz6tkydiawtznebjkhp',
    ],
    highlights: [
      'Chimpanzee trekking in Kibale',
      'Big Five game drives',
      'Kazinga Channel boat cruise',
      'Mountain gorilla encounter',
    ],
    faqs: [
      {
        question: 'Is this suitable for first-time safari visitors?',
        answer:
          "Yes, this comprehensive tour provides an excellent introduction to Uganda's diverse wildlife and landscapes.",
      },
      {
        question: 'What is the accommodation standard?',
        answer:
          'We use mid-range to luxury accommodations with en-suite facilities and full board meals.',
      },
    ],
    bestTime: 'June - September, December - February',
    groupSize: '2-8 people',
    difficulty: 'Moderate',
  },
  {
    id: 13,
    title: '10 Days Uganda Safari',
    location: 'Multiple Parks, Uganda',
    duration: '10 days',
    image:
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/sihgp7fwvkhzrdwgiz6y',
    description:
      'The ultimate Uganda adventure covering all major national parks and wildlife experiences.',
    url: '/safaris/10-days-uganda-safari',
    slug: '10-days-uganda-safari',
    images: [
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/sihgp7fwvkhzrdwgiz6y',
    ],
    highlights: [
      'Murchison Falls boat safari',
      'Chimpanzee trekking in Kibale',
      'Queen Elizabeth game drives',
      'Mountain gorilla trekking',
    ],
    faqs: [
      {
        question: 'Which parks are included in this safari?',
        answer:
          'Murchison Falls, Kibale Forest, Queen Elizabeth, and Bwindi Impenetrable National Parks.',
      },
      {
        question: 'Is domestic flight included?',
        answer:
          'Road transport is included, but domestic flights can be arranged for an additional cost.',
      },
    ],
    bestTime: 'June - September, December - February',
    groupSize: '2-8 people',
    difficulty: 'Moderate',
  },
];
