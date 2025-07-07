export interface SafariPackage {
  id: number;
  title: string;
  location: string;
  duration: string;
  image: string;
  destination: string;
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
  inclusions?: string[];
  exclusions?: string[];
  packingList?: string[];
}

export const safariPackages: SafariPackage[] = [
  {
    id: 1,
    title: '1 Day Gorilla Tour',
    location: 'Volcanoes National Park, Rwanda',
    destination: 'Rwanda',
    duration: '1 day',
    image:
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/vi9wpd1uict3rlxejqf1',
    description:
      'This 1-day gorilla tour in Rwanda is a full-day adventure to trek and interact with a group of mountain gorillas in their natural habitat at Volcanoes National Park. The tour includes a guided trek, park briefing, and a close-up hour with a habituated gorilla family, all in the lush forests of northwestern Rwanda.',
    url: '/safaris/1-day-gorilla-tour',
    slug: '1-day-gorilla-tour',
    images: [
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/vi9wpd1uict3rlxejqf1',
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/mqamqqc2dohryiras64o',
    ],
    highlights: [
      'Gorilla trekking permit included',
      'Guided trek in Volcanoes National Park',
      'Visit to one of 13 habituated gorilla families',
      'Professional park ranger and guide service',
      'Scenic drive from Kigali to Volcanoes National Park',
      'Certificate of participation',
      'Chance to see other wildlife and birds',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Kigali – Volcanoes National Park – Gorilla Trekking – Return',
        details: `Set off early in the morning from Kigali with your essentials for a 2-3 hour drive to Volcanoes National Park. Upon arrival, settle at Kinigi for a briefing from park officials about gorilla trekking rules and regulations, including maintaining a safe distance of 8-10 meters from the gorillas. After the briefing, park rangers will lead you into the forest to begin your trek at around 8:00 am. The trek can take 2-6 hours, depending on the location of the gorilla family. Once the gorillas are located, you will have one hour to observe and photograph them in their natural habitat. After the trek, return to meet your safari guide and depart for Kigali, marking the end of your memorable one-day gorilla tour in Rwanda.

Accommodation (for extended stays):
- Budget: Kinigi Guesthouse, Sambora Kinigi Lodge
- Midrange: Amakoro Songa Lodge, Sabyinyo Silverback Lodge
- Luxury: One&Only Gorilla's Nest, Wilderness Bisate Lodge, Volcanoes Virunga Lodge, Singita Kwitonda Lodge

Meal plan: Not included (can be arranged on request)
Travel time: 2-3 hours from Kigali`,
      },
    ],
    inclusions: [
      'A valid gorilla permit for Rwanda',
      'All transportation using a 4x4 safari vehicle',
      'Services of a safari/park ranger guide',
      'All relevant taxes as per Rwanda government',
      'Free bottled drinking water',
      'All tour activities as per the trip itinerary',
    ],
    exclusions: [
      'Tips',
      'Laundry services',
      'Travel insurance',
      'All optional activities',
      'Passports',
      'Visas',
      'All costs on beverages',
    ],
    packingList: [
      'Good and waterproof hiking boots',
      'Long-sleeved shirts',
      'Long pants',
      'Safari hat',
      'Rain jacket',
      'Sweater',
      'Insect repellent',
      'Daypack',
      'Bottled drinking water',
      'Pair of socks',
      'Camera and additional batteries',
      'Gorilla permit',
      'Toiletries',
      'Valid passport and visa',
      'Sunscreen',
      'Anti-malaria medication',
      'Sunglasses',
      'Walking stick (optional)',
    ],
    faqs: [
      {
        question: 'What is the minimum age for gorilla trekking?',
        answer: 'The minimum age for gorilla trekking is 15 years old.',
      },
      {
        question: 'How long does the trek take?',
        answer:
          'The trek can take anywhere from 2-6 hours depending on the location of the gorilla family. You will spend one hour with the gorillas once found.',
      },
      {
        question: 'What other attractions are in Volcanoes National Park?',
        answer:
          'Other attractions include golden monkey tracking, volcano hiking, Dian Fossey tomb site hike, and bird-watching. The park is home to Virunga volcanoes and a variety of wildlife and over 200 bird species.',
      },
      {
        question: 'Where can I stay if I want to extend my tour?',
        answer: `There are budget, midrange, and luxury accommodation options near Volcanoes National Park, including One&Only Gorilla's Nest, Wilderness Bisate Lodge, Kinigi Guesthouse, Sabyinyo Silverback Lodge, Volcanoes Virunga Lodge, Singita Kwitonda Lodge, Amakoro Songa Lodge, and Sambora Kinigi Lodge.`,
      },
      {
        question: 'What should I carry for a Rwanda gorilla tour?',
        answer:
          'Essentials include waterproof hiking boots, long-sleeved shirts, long pants, a safari hat, rain jacket, sweater, insect repellent, daypack, bottled water, socks, camera, gorilla permit, toiletries, passport, visa, sunscreen, anti-malaria medication, sunglasses, and optionally a walking stick.',
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
    destination: 'Uganda',
    duration: '1 day',
    image:
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/q08oh8nujhyvmofs0zpp',
    description:
      'Embark on a journey to witness the massive creatures: the rhinos in their natural environment on a 1-day rhino trekking tour. This excursion at Ziwa Rhino Sanctuary involves navigating through lush vegetation in search of rhinos, bringing you closer to these Big 5 game members. Ziwa is the only place in Uganda where rhinos can be spotted in the wild, also home to other mammals and over 300 bird species.',
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
      'Chance to see other mammals: aardvark, oribis, giraffes, bushbucks, hartebeest, waterbucks, leopards, mongoose',
      'Spotting rare birds like shoebill storks, kingfishers, and African fish eagles',
    ],
    itinerary: [
      {
        day: 1,
        title:
          'Kampala/Entebbe – Ziwa Rhino Sanctuary – Rhino Trekking – Return',
        details: `
Early morning breakfast at your hotel in Entebbe or Kampala. Meet your Dawnlight Journeys guide for a briefing about your day tour to Ziwa Rhino Sanctuary, including rhino tracking. Depart early via the Kampala-Gulu Highway, branching off at Nakasongola to access Ziwa.

Upon arrival, receive a briefing from sanctuary officials on rhino tracking regulations. Enjoy 2-3 hours trekking through lush vegetation in search of rhinos, observing them up close in the wild and learning about their behavior. Other wildlife and bird species may also be encountered.

After the trek, return with your guide. If time allows, have lunch at a lodge in the sanctuary. After lunch and relaxation, drive back to Kampala/Entebbe via the Luweero Triangle, with an optional stop for fresh fruits. Drop-off at your hotel or airport marks the end of the tour.`,
      },
    ],
    inclusions: [
      'Rhino tracking fees',
      'Experienced guide fees',
      'Services of an English-speaking guide',
      'Transport using a 4WD tourist vehicle',
      'All tour activities as per the travel plan (excluding optional ones)',
      'A bottled drinking water',
      'All relevant government taxes',
    ],
    exclusions: [
      'Tipping expenses',
      'Telephone bills/expenses',
      'All personal insurance costs',
      'Laundry services as requested',
      'All bills on shopping',
      'Safari lodge/hotel fees after your day excursion at Ziwa',
      'All costs on beverages/alcoholic drinks',
      'Flight services',
    ],
    packingList: [
      'Waterproof rain jacket',
      'Safari hat',
      'Waterproof walking shoes/boots',
      'Camera with flashlight',
      'Bottled drinking water',
      'Sunscreen',
      'Snacks',
      'Long pants and neutral colored clothing',
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
          'Wear comfortable walking shoes, long pants, and neutral colored clothing. A waterproof jacket and hat are recommended.',
      },
      {
        question: 'When is the best time for rhino trekking in Ziwa?',
        answer:
          'The dry months (June–September and December–February) are ideal for rhino tracking due to favorable weather and accessible paths, but the sanctuary is open year-round.',
      },
      {
        question: 'What other animals can I see at Ziwa?',
        answer:
          'Besides rhinos, you may encounter aardvark, oribis, giraffes, bushbucks, hartebeest, waterbucks, leopards, mongoose, and over 300 bird species including shoebill storks.',
      },
    ],
    bestTime: 'June - September, December - February (dry months)',
    groupSize: '2-10 people',
    difficulty: 'Easy',
  },
  {
    id: 3,
    title: '2 Days Akagera Safari',
    location: 'Akagera National Park, Rwanda',
    destination: 'Rwanda',
    duration: '2 days',
    image:
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/w1mmn52r8kip2ggbogt4',
    description:
      "This 2-day Akagera safari offers awe-inspiring game viewing and a boat cruise in Rwanda's finest savanna wilderness. Encounter the Big 5, aquatic species, and over 525 bird species in Akagera National Park. The journey begins and ends in Kigali.",
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
      'Guided game drives in search of the Big Five',
      'Boat cruise on Lake Ihema',
      'Bird watching (over 525 species)',
      'Scenic landscapes and photography',
      'Chance to see leopards, elephants, buffaloes, rhinos, giraffes, hyenas, zebras, antelopes',
      'Expert local guides and rangers',
      'All park entry fees included',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Kigali – Akagera National Park – Boat Cruise on Lake Ihema',
        details: `Enjoy a leisurely breakfast at your hotel/lodge in Kigali. Meet your Dawnlight Journeys guide for a briefing about your 2-day Akagera safari. Depart for Akagera National Park in the Eastern Province, a scenic 2.5-hour drive from Kigali. Upon arrival, enjoy a game drive en route to your lodge, spotting wildlife such as elephants, buffaloes, giraffes, zebras, antelopes, and more. Check in and relax at your lodge. After lunch, embark on an afternoon boat cruise on Lake Ihema, guided by an expert. The cruise offers opportunities to see hippos, crocodiles, and a variety of water birds, as well as other wildlife along the lake shores. After the 2-3 hour cruise, return to your lodge or camp for relaxation and dinner.

Accommodation options:
- Budget: Karenge Bush Lodge / Akagera Rhino Lodge
- Midrange: Akagera Game Lodge
- Luxury: Rusizi Tented Camp / Magashi Tented Camp

Meal plan: Lunch & Dinner
Travel time: 2.5 hours from Kigali`,
      },
      {
        day: 2,
        title: 'Guided Game Drive & Return to Kigali',
        details: `After a hearty breakfast, depart your lodge for a morning guided game drive in Akagera National Park. Explore the park's game tracks and observe a diversity of wildlife in their natural habitat, including African bush elephants, buffaloes, lions, leopards, hyenas, rhinos, and many antelope species. The 2-3 hour game drive offers memorable wildlife encounters and photo opportunities. After the game drive, return to your lodge for a short relaxation, then depart for Kigali, marking the end of your safari.

Meal plan: Breakfast`,
      },
    ],
    inclusions: [
      'Guided game drives',
      'All park entry fees',
      'Boat cruise expenses',
      'Transportation using a 4x4 car',
      'Full-time driver guide',
      'Park ranger guide services',
      'A bottle of water',
      'Snacks',
    ],
    exclusions: [
      'Visas',
      'Laundry services',
      'Telephone costs',
      'Travel insurance',
      'Airfares',
      'Hiring a porter',
      'Cigarettes',
      'Souvenirs',
    ],
    packingList: [
      'Long-sleeved shirts',
      'Waterproof daypack',
      'Insect repellent',
      'Pair of binoculars',
      'Lightweight and waterproof rain jacket',
      'First aid kit',
      'Safari hat',
      'Toiletries',
      'Comfortable walking shoes',
      'Camera with extra batteries',
      'Sunscreen',
      'Snacks',
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
          'Yes, accommodation at a lodge near the park is included in the package. Options are available for budget, midrange, and luxury preferences.',
      },
      {
        question: 'What else can I do in Akagera National Park?',
        answer:
          'Other activities include behind-the-scenes tours, bird-watching, hot air balloon tours, rhino tracking, and nature walks.',
      },
      {
        question: 'What should I carry for the Akagera safari?',
        answer:
          'Pack long-sleeved shirts, a waterproof daypack, insect repellent, binoculars, a rain jacket, first aid kit, safari hat, toiletries, and comfortable shoes.',
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
    destination: 'Rwanda',
    duration: '2 days',
    image:
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/q08oh8nujhyvmofs0zpp',
    description:
      'Embark on a 2-day gorilla tour in Rwanda, offering a once-in-a-lifetime opportunity to trek and observe mountain gorillas in their natural habitat at Volcanoes National Park. This short safari includes a cultural encounter with locals, guided trekking, and comfortable accommodation.',
    url: '/safaris/2-days-gorilla-tour',
    slug: '2-days-gorilla-tour',
    images: [
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/q08oh8nujhyvmofs0zpp',
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/vbwkdn99escdqc8scxix',
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/xas90h6m4uio90wnqzes',
    ],
    highlights: [
      'Guided gorilla trekking in Volcanoes National Park',
      'Visit to habituated gorilla families (Susa, Ugenda, Sabyinyo, Bwenge, Susa A, Kwitonda, Hirwa, Agashya, Amahoro)',
      "Cultural tour in Iby'Iwacu Village",
      'Professional park ranger and guide service',
      'Scenic drive from Kigali to Volcanoes National Park',
      'Certificate of participation',
      'Comfortable accommodation and meals included',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Pick up & Transfer to Volcanoes National Park – Cultural Tour',
        details: `After a heavy breakfast, you will be picked up early morning in Kigali. Travel to Volcanoes National Park for about 2-3 hours. Upon arrival, check in to your place of stay and enjoy a delicious lunch and some relaxation. In the afternoon, embark on a guided cultural tour in the Iby'Iwacu Village, where you will interact with locals and experience Rwandan culture. Spend the evening at your pre-booked accommodation, preparing for the gorilla trekking adventure the next day.

Accommodation options:
- Budget: Kinigi Guesthouse, Muhabura Hotel
- Midrange: Palme Hotel, Le Bambou Gorilla Lodge
- Luxury: Sabyinyo Silverback Lodge, Singita Kwitonda Lodge

Meal plan: Lunch & Dinner
Travel time: 2-3 hours from Kigali`,
      },
      {
        day: 2,
        title: 'Gorilla Trekking & Drive back to Kigali',
        details: `Enjoy breakfast at your lodge or camp, then transfer to Kinigi for a briefing by park officials and allocation of gorilla groups. Each group is trekked by a maximum of 8 guests. The trek begins at 8:00 am and may take 2-6 hours, depending on your speed and fitness. Once the gorillas are found, you will have one hour to observe and photograph them. After the trek, return to your lodge for a short relaxation, then depart Volcanoes National Park for Kigali, where you will be dropped off at your hotel or next destination.

Meal plan: Breakfast
Travel time: 2-3 hours to Kigali`,
      },
    ],
    inclusions: [
      'A valid gorilla permit',
      'All activities as per the itinerary',
      'Accommodation and meals during the tour',
      'Transportation and services of a safari guide',
      'A bottle of drinking water',
      'Airport transfers',
    ],
    exclusions: [
      'Laundry services',
      'All additional/optional activities',
      'Accommodation before/after the tour',
      'Travel insurance',
      'Tips',
      'All beverages',
      'Visa expenses',
      'Passport costs',
    ],
    packingList: [
      'Long-sleeved shirts',
      'Good hiking boots',
      'Camera with free flashlight',
      'Daypack',
      'Sunglasses',
      'Water bottle',
      'Rain jacket',
      'Safari hat',
      'Insect repellent',
      'Sunscreen',
      'First aid kit',
      'Sweater',
      'Pair of socks',
      'Long trousers',
      'Gardening gloves',
    ],
    faqs: [
      {
        question: 'How long does the gorilla trek take?',
        answer:
          'The trek can take anywhere from 2-6 hours depending on the location of the gorilla family. You will spend one hour with the gorillas once found.',
      },
      {
        question: 'What is included in the package?',
        answer:
          'The package includes a valid gorilla permit, all activities as per the itinerary, accommodation and meals, transportation, a safari guide, bottled water, and airport transfers.',
      },
      {
        question: 'What should I pack for the 2 days Rwanda gorilla tour?',
        answer:
          'Pack long-sleeved shirts, good hiking boots, a camera, daypack, sunglasses, water bottle, rain jacket, safari hat, insect repellent, sunscreen, first aid kit, sweater, socks, long trousers, and gardening gloves.',
      },
      {
        question: 'Where can I stay during the tour?',
        answer:
          'Accommodation options include budget (Kinigi Guesthouse, Muhabura Hotel), midrange (Palme Hotel, Le Bambou Gorilla Lodge), and luxury (Sabyinyo Silverback Lodge, Singita Kwitonda Lodge) lodges near Volcanoes National Park.',
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
    destination: 'Uganda',
    duration: '2 days',
    image:
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/cpcb9sygwrp3xjten5mv',
    description: `Enjoy an enriching 2-day wildlife tour in Lake Mburo National Park, Uganda's most accessible and compact savanna park. Experience guided game drives, a scenic boat cruise, and close encounters with diverse wildlife and bird species. The tour begins and ends in Kampala or Entebbe.`,
    url: '/safaris/2-days-lake-mburo',
    slug: '2-days-lake-mburo',
    images: [
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/cpcb9sygwrp3xjten5mv',
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/ckuby2rtv6w3eomdigry',
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/q08oh8nujhyvmofs0zpp',
    ],
    highlights: [
      'Guided game drives in Lake Mburo National Park',
      'Boat/launch cruise on Lake Mburo',
      'Wildlife viewing: impalas, giraffes, buffaloes, zebras, bushbucks, warthogs, topis, elands, leopards, and more',
      'Aquatic species: hippos, crocodiles, and water birds',
      'Optional night game drive',
      'Stopover at the Equator for photos',
      'Professional English-speaking guide/driver',
      'Comfortable accommodation and meals included',
    ],
    itinerary: [
      {
        day: 1,
        title:
          'Pick up & Travel to Lake Mburo National Park, Afternoon Boat Cruise',
        details: `Begin the day with a hearty breakfast at your hotel or place of stay. Meet your tour guide for a briefing, then depart early from Entebbe or Kampala along the Masaka-Mbarara route (about 4 hours' drive). Stop at the Equator for relaxation and photography. Continue to Lake Mburo National Park and check in at your pre-booked lodge for lunch. In the afternoon, enjoy a scenic boat cruise on Lake Mburo, spotting hippos, crocodiles, and water birds. After the cruise (2-3 hours), return to the lodge for relaxation. Optional night game drive or leisure at the lodge.

Accommodation options:
- Budget: Eagles Nest Lodge
- Midrange: Lake Mburo Safari Lodge, Rwakobo Rock
- Luxury: Kigambira Safari Lodge, Mihingo Lodge

Meal plan: Breakfast, Lunch & Dinner
Travel time: 4 hours from Kampala/Entebbe`,
      },
      {
        day: 2,
        title: 'Game Drive & Depart from Lake Mburo National Park',
        details: `Enjoy an early breakfast at your lodge, then set out for a morning game drive (2-3 hours) in Lake Mburo National Park. Spot wildlife such as duikers, Uganda Kobs, zebras, waterbucks, buffaloes, giraffes, warthogs, topis, elands, hyenas, leopards, and a variety of birds. After the game drive, return to the lodge for an early lunch and check out. Depart Lake Mburo National Park for Kampala or Entebbe, marking the end of your 2-day tour.

Meal plan: Breakfast & Lunch
Travel time: 4 hours to Kampala/Entebbe`,
      },
    ],
    inclusions: [
      'Road trip using a 4x4 vehicle with a pop-up roof',
      'Professional English-speaking tour guide/driver',
      'Park entry fees',
      'Accommodation plus meals',
      'Game drives and boat cruise',
      'A bottled drinking water in the vehicle',
      'Pick up & drop off',
    ],
    exclusions: [
      'Visas',
      'Tipping expenses',
      'Flights/airfares',
      'Bills on telephone',
      'Shopping expenses',
      'Travel insurance',
      'Beverages or premium drinks',
    ],
    packingList: [
      'Sunscreen',
      'Waterproof walking shoes',
      'Insect repellent',
      'Long-sleeved shirts',
      'Safari hat',
      'Rain jacket',
      'Adequate drinking water',
      'Camera with additional batteries',
      'Torch/flashlight',
      'Pair of binoculars',
      'First aid kit or medical kit',
      'Snacks',
      'Long pants',
      'Sunglasses',
    ],
    faqs: [
      {
        question: 'How long is the drive from Kampala/Entebbe to Lake Mburo?',
        answer:
          'The drive takes about 4 hours via the Masaka-Mbarara route, with a stop at the Equator for photos and relaxation.',
      },
      {
        question: 'What wildlife can I see in Lake Mburo National Park?',
        answer:
          'You can see impalas, giraffes, buffaloes, zebras, bushbucks, warthogs, topis, elands, leopards, hippos, crocodiles, and a variety of birds.',
      },
      {
        question: 'What is included in the package?',
        answer:
          'The package includes a 4x4 vehicle with pop-up roof, professional guide, park entry, accommodation, meals, game drives, boat cruise, bottled water, and pick up/drop off.',
      },
      {
        question: 'Where can I stay during the tour?',
        answer:
          'Accommodation options include Eagles Nest Lodge (budget), Lake Mburo Safari Lodge or Rwakobo Rock (midrange), and Kigambira Safari Lodge or Mihingo Lodge (luxury).',
      },
      {
        question: 'What should I pack for the 2-day Lake Mburo tour?',
        answer:
          'Pack sunscreen, waterproof walking shoes, insect repellent, long-sleeved shirts, safari hat, rain jacket, drinking water, camera, torch, binoculars, first aid kit, snacks, long pants, and sunglasses.',
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
    destination: 'Rwanda',
    duration: '2 days',
    image:
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/q08oh8nujhyvmofs0zpp',
    description:
      'Experience the wonders of Nyungwe Forest National Park on this thrilling 2-day tour. Enjoy a canopy walk and chimpanzee trekking, with opportunities to see a variety of primates, birds, and the lush forest canopy. The tour begins and ends in Kigali.',
    url: '/safaris/2-days-nyungwe-tour',
    slug: '2-days-nyungwe-tour',
    images: [
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/q08oh8nujhyvmofs0zpp',
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/gg1h6xmgnjijfcmnvivp',
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/rjyuvbbaogyt11dvluwc',
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/sdk206waaj8esw5ynner',
    ],
    highlights: [
      'Guided chimpanzee trekking in Nyungwe Forest',
      'Canopy walk on a 200-meter suspended walkway',
      'Opportunities to see colobus monkeys, vervet monkeys, baboons, and more',
      'Bird watching (over 500 species)',
      "Visit to King's Palace Museum (en route)",
      'Professional park ranger and guide service',
      'Scenic drive from Kigali to Nyungwe',
      'Comfortable accommodation and meals included',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Pick up & Travel to Nyungwe Forest National Park – Canopy Walk',
        details: `Enjoy a leisurely cup of tea/coffee and meet your safari guide for a quick briefing about the 2-day Nyungwe tour. Embark on a 6-7 hour drive from Kigali via the Southern Province route, with a stopover at the King's Palace Museum and lunch at Butare. Continue to Nyungwe National Park, check in at your lodge, and proceed to enjoy a canopy walk in the afternoon. The canopy walk offers amazing sightings of primates, birds, and the beautiful forest canopy. After the walk, relax at your lodge.

Accommodation options:
- Budget: Nyungwe Eco Village
- Midrange: Nyungwe Forest Lodge
- Luxury: One&Only Nyungwe House

Meal plan: Lunch & Dinner
Travel time: 6-7 hours from Kigali`,
      },
      {
        day: 2,
        title: 'Chimpanzee Trekking & Departure',
        details: `Begin your chimpanzee trekking excursion early in the morning after a briefing and allocation of park ranger guides. At around 8:00 am, trek through the lush Nyungwe Forest in search of a habituated chimpanzee community. The trek may last 2-4 hours, with one hour for up-close observation. After the trek, return to the lodge for a leisurely lunch, check out, and start your journey back to Kigali, arriving early evening.

Meal plan: Breakfast & Lunch
Travel time: 6-7 hours to Kigali`,
      },
    ],
    inclusions: [
      'Valid chimpanzee permits',
      'Park entry fees',
      'Canopy walk experience',
      'Chimpanzee tracking',
      'Driver or park ranger guide services',
      'A bottle of water',
    ],
    exclusions: [
      'Tips',
      'Laundry services',
      'Bills on telephone',
      'Alcoholic drinks',
      'All optional experiences',
      'All additional fees for hotel stay after/before the tour',
    ],
    packingList: [
      'Waterproof hiking boots',
      'Long-sleeved shirts',
      'Sweater',
      'Daypack',
      'Camera',
      'First aid kit',
      'Bottled water',
      'Rain jacket or raincoat',
      'Safari hat',
      'Insect repellent',
      'Sunscreen',
      'Pair of socks',
      'Long trousers',
    ],
    faqs: [
      {
        question: 'How long is the canopy walk?',
        answer:
          'The canopy walk is 200 meters long and offers stunning views of the forest, primates, and birds.',
      },
      {
        question: 'What primates can I see in Nyungwe?',
        answer:
          "Nyungwe is home to chimpanzees, colobus monkeys, vervet monkeys, baboons, l'hoest monkeys, and more.",
      },
      {
        question: 'What birds can I see in Nyungwe?',
        answer:
          'Over 500 bird species can be found in Nyungwe, including Kungwe apalis, Rwenzori turacos, regal sunbirds, and great blue turacos.',
      },
      {
        question: 'Where can I stay during the tour?',
        answer:
          'Accommodation options include Nyungwe Eco Village (budget), Nyungwe Forest Lodge (midrange), and One&Only Nyungwe House (luxury).',
      },
      {
        question: 'What should I pack for the Nyungwe tour?',
        answer:
          'Pack waterproof hiking boots, long-sleeved shirts, a sweater, daypack, camera, first aid kit, bottled water, rain jacket, safari hat, insect repellent, sunscreen, socks, and long trousers.',
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
    destination: 'Uganda',
    duration: '3 days',
    image:
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/aprkacmqhcomx6kuvrrb',
    description:
      'Embark on an exclusive 3-day journey to witness the massive mountain gorillas in their natural habitat in Bwindi Impenetrable National Park, a UNESCO World Heritage Site. Enjoy gorilla trekking, a Batwa cultural experience, and scenic drives through southwestern Uganda. The adventure begins and ends in Kampala or Entebbe.',
    url: '/safaris/3-days-bwindi-gorilla-trekking-tour',
    slug: '3-days-bwindi-gorilla-trekking-tour',
    images: [
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/aprkacmqhcomx6kuvrrb',
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/s7ekengitq8docursrgc',
    ],
    highlights: [
      'Guided gorilla trekking in Bwindi Impenetrable National Park',
      'Visit to one of 25 habituated gorilla families in any of the 4 sectors (Rushaga, Nkuringo, Buhoma, Ruhija)',
      'Batwa cultural experience with the pygmies',
      'Scenic drive through southwestern Uganda',
      'Stopover at the Equator for photos',
      'Professional park ranger and guide service',
      'Certificate of participation',
      'Comfortable accommodation and meals included',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Pick up & Travel to Bwindi',
        details: `Enjoy a leisurely breakfast and meet your Dawnlight Journeys guide for a briefing on your 3 Days Bwindi gorilla trekking tour. Depart early from Entebbe or Kampala for Bwindi Impenetrable National Park via the Masaka-Mbarara-Kabale route (8-9 hours' drive). Stop at the Equator crossing in Kayabwe for photos and relaxation, and have lunch in Mbarara City. Continue to Bwindi, enjoying scenic landscapes, and check in at your accommodation.

Accommodation options:
- Budget: Ride 4 a Woman
- Midrange: Engagi Lodge, Mahogany Springs
- Luxury: Buhoma Lodge, Bwindi Lodge

Meal plan: Lunch & Dinner
Travel time: 8-9 hours from Kampala/Entebbe`,
      },
      {
        day: 2,
        title: 'Gorilla Trekking plus Batwa Cultural Experience',
        details: `After breakfast, proceed to the Buhoma sector (or as per your permit) for verification, briefing, and allocation of park ranger guides and gorilla groups. The briefing covers safety measures and trekking rules. Trekking with gorillas takes 2-6 hours depending on conditions. Once a gorilla group is found, spend one hour observing and photographing them. Return to park offices for your trekking certificate, then to the lodge for lunch. In the afternoon, enjoy a Batwa cultural experience, learning about the Batwa pygmies and their traditional lifestyle. Return to the lodge for dinner and overnight.

Accommodation options:
- Budget: Ride 4 a Woman
- Midrange: Engagi Lodge, Mahogany Springs
- Luxury: Buhoma Lodge, Bwindi Lodge

Meal plan: Breakfast, Lunch & Dinner`,
      },
      {
        day: 3,
        title: 'Departure',
        details: `After breakfast, check out of the lodge and meet your driver guide for the journey back to Kampala or Entebbe (8-9 hours' drive). Stop at the Equator crossing and for lunch en route. Arrive in Kampala/Entebbe and be dropped off at your hotel. End of the 3-day Bwindi gorilla trekking tour.

Meal plan: Breakfast & Lunch
Travel time: 8-9 hours to Kampala/Entebbe`,
      },
    ],
    inclusions: [
      'A valid gorilla permit',
      'Batwa cultural visit',
      'All park entry fees',
      'Full-board accommodation service',
      'En route meals',
      'Travel by road using a 4WD vehicle',
      'Pick up & drop off',
      'Relevant government taxes/levies',
      'Driver/park ranger guide services',
      'Free bottled drinking water in the car',
    ],
    exclusions: [
      'Airfares',
      'Passports',
      'Visas',
      'Travel insurance',
      'Laundry services',
      'Cigarettes',
      'Tips',
      'Extra accommodation after/before the trip',
      'Beverages',
      'All optional activities',
    ],
    packingList: [
      'Good hiking boots',
      'Long-sleeved shirts',
      'Long pants',
      'Safari hat',
      'Rain jacket',
      'Sweater',
      'Insect repellent',
      'Daypack',
      'Bottled drinking water',
      'Pair of socks',
      'Camera and additional batteries',
      'Gorilla permit',
      'Toiletries',
      'Valid passport and visa',
      'Sunscreen',
      'Anti-malaria medication',
      'Sunglasses',
      'Walking stick (optional)',
    ],
    faqs: [
      {
        question: 'How long is the drive from Kampala/Entebbe to Bwindi?',
        answer:
          'The drive takes about 8-9 hours via the Masaka-Mbarara-Kabale route, with a stop at the Equator and lunch in Mbarara.',
      },
      {
        question: 'How long does gorilla trekking take?',
        answer:
          'Gorilla trekking can take 2-6 hours depending on the location of the gorilla family. You will spend one hour with the gorillas once found.',
      },
      {
        question: 'What is included in the package?',
        answer:
          'The package includes a valid gorilla permit, Batwa cultural visit, park entry, full-board accommodation, en route meals, 4WD vehicle, pick up/drop off, taxes, guide services, and bottled water.',
      },
      {
        question: 'Where can I stay during the tour?',
        answer:
          'Accommodation options include Ride 4 a Woman (budget), Engagi Lodge or Mahogany Springs (midrange), and Buhoma Lodge or Bwindi Lodge (luxury).',
      },
      {
        question:
          'What should I pack for the 3-day Bwindi gorilla trekking tour?',
        answer:
          'Pack good hiking boots, long-sleeved shirts, long pants, safari hat, rain jacket, sweater, insect repellent, daypack, bottled water, socks, camera, gorilla permit, toiletries, passport, visa, sunscreen, anti-malaria medication, sunglasses, and optionally a walking stick.',
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
    destination: 'Uganda',
    duration: '3 days',
    image:
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/psmowi9sxjinfba9ra0v',
    description:
      'This 3-day Kibale safari offers an enriching chimpanzee trekking experience in Kibale National Park, home to over 13 primate species and more than 1,500 chimpanzees. Enjoy guided chimpanzee tracking, a Bigodi Wetland nature walk, and scenic drives through western Uganda. The adventure begins and ends in Kampala or Entebbe.',
    url: '/safaris/3-days-kibale-safari',
    slug: '3-days-kibale-safari',
    images: [
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/zssahq149fpoed8a0ptb',
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/psmowi9sxjinfba9ra0v',
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/mcmgun9paxpintehqdks',
    ],
    highlights: [
      'Guided chimpanzee trekking in Kibale Forest',
      'Visit to one of 4 habituated chimpanzee communities',
      'Bigodi Wetland/Swamp guided nature walk',
      'Opportunities to see over 13 primate species',
      'Bird watching in Bigodi Wetland',
      'Scenic drive through tea farms and Fort Portal',
      'Professional English-speaking guide/driver',
      'Comfortable accommodation and meals included',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Pick up & Drive to Kibale National Park',
        details: `Depart from Kampala for Kibale National Park (5-6 hours' drive). En route, stop at tea farms and continue to Fort Portal city for a leisurely lunch. After lunch, transfer to your lodge to relax, dine, and overnight.

Accommodation options:
- Budget: Isunga Lodge, Kibale Forest Camp
- Midrange: Primate Lodge, Papaya Lake Lodge
- Luxury: Kyaninga Lodge, Ndali Lodge

Meal plan: Lunch & Dinner
Travel time: 5-6 hours from Kampala/Entebbe`,
      },
      {
        day: 2,
        title: 'Chimpanzee Tracking & Visit Bigodi Wetland',
        details: `After breakfast, proceed to Kanyanchu Tourist Center for verification, briefing, and allocation of park ranger guides. The trek begins at 8:00 am and may last 2-4 hours, including one hour for close interaction with chimpanzees. Learn about their behaviors, feeding, and social structure. Return to Kanyanchu, meet your guide, and drive back to the lodge for lunch. In the afternoon, visit Bigodi Wetland for a guided nature walk, spotting primates and birds. Return to the lodge for dinner and overnight.

Accommodation options:
- Budget: Isunga Lodge, Kibale Forest Camp
- Midrange: Primate Lodge, Papaya Lake Lodge
- Luxury: Kyaninga Lodge, Ndali Lodge

Meal plan: Breakfast, Lunch & Dinner`,
      },
      {
        day: 3,
        title: 'Departure',
        details: `After breakfast, check out of your lodge and depart for Kampala or Entebbe. Arrive and be dropped off at your hotel or airport. End of the 3 Days Kibale safari.

Meal plan: Breakfast
Travel time: 5-6 hours to Kampala/Entebbe`,
      },
    ],
    inclusions: [
      'Chimpanzee trekking permits',
      'Bigodi Wetland/Swamp walk fees',
      'Park entry fees',
      'Services of an English-speaking driver guide',
      'Accommodation plus meals',
      'Ground transportation',
      'Bottled drinking water',
      'Airport transfers',
    ],
    exclusions: [
      'Tipping of any kind',
      'Laundry services',
      'Shopping expenses',
      'Visas',
      'Passports',
      'Beverages',
      'All optional activities',
      'All additional accommodation services',
    ],
    packingList: [
      'Good hiking boots',
      'Long-sleeved shirts',
      'Long pants',
      'Safari hat',
      'Rain jacket',
      'Sweater',
      'Insect repellent',
      'Daypack',
      'Bottled drinking water',
      'Pair of socks',
      'Camera and additional batteries',
      'Toiletries',
      'Valid passport and visa',
      'Sunscreen',
      'Anti-malaria medication',
      'Sunglasses',
      'Walking stick (optional)',
    ],
    faqs: [
      {
        question: 'How long is the drive from Kampala/Entebbe to Kibale?',
        answer:
          'The drive takes about 5-6 hours, with a stop at tea farms and lunch in Fort Portal.',
      },
      {
        question: 'How long does chimpanzee trekking take?',
        answer:
          'Chimpanzee trekking can take 2-4 hours depending on the location of the chimpanzee community. You will spend one hour with the chimpanzees once found.',
      },
      {
        question: 'What is included in the package?',
        answer:
          'The package includes chimpanzee trekking permits, Bigodi Wetland walk fees, park entry, accommodation, meals, ground transportation, bottled water, airport transfers, and guide services.',
      },
      {
        question: 'Where can I stay during the tour?',
        answer:
          'Accommodation options include Isunga Lodge or Kibale Forest Camp (budget), Primate Lodge or Papaya Lake Lodge (midrange), and Kyaninga Lodge or Ndali Lodge (luxury).',
      },
      {
        question: 'What should I pack for the 3-day Kibale safari?',
        answer:
          'Pack good hiking boots, long-sleeved shirts, long pants, safari hat, rain jacket, sweater, insect repellent, daypack, bottled water, socks, camera, toiletries, passport, visa, sunscreen, anti-malaria medication, sunglasses, and optionally a walking stick.',
      },
    ],
    bestTime: 'June - September, December - February',
    groupSize: '2-8 people',
    difficulty: 'Moderate',
  },
  {
    id: 9,
    title: '3 Days Queen Elizabeth Safari',
    location: 'Queen Elizabeth National Park, Uganda',
    destination: 'Uganda',
    duration: '3 days',
    image:
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/k42zcswyvtf3pdcdqfim',
    description: `This 3-day Queen Elizabeth safari offers an enriching wildlife experience in Uganda's second largest park. Enjoy guided game drives in the Kasenyi Plains, a scenic boat cruise on the Kazinga Channel, and breathtaking views of the savanna. The adventure begins and ends in Kampala or Entebbe.`,
    url: '/safaris/3-days-queen-elizabeth-safari',
    slug: '3-days-queen-elizabeth-safari',
    images: [
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/k42zcswyvtf3pdcdqfim',
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/hbi2suzdhpietabb6a8v',
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/dvz6tkydiawtznebjkhp',
    ],
    highlights: [
      'Guided game drives in the Kasenyi Plains',
      'Boat cruise on the Kazinga Channel',
      'Wildlife viewing: lions, elephants, leopards, buffaloes, antelopes, warthogs, hyenas, and more',
      'Aquatic species: hippos, crocodiles, and water birds',
      'Stopover at the Equator for photos',
      'Professional English-speaking guide/driver',
      'Comfortable accommodation and meals included',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Pick up & Drive to Queen Elizabeth National Park',
        details: `Meet your professional driver guide after breakfast at your hotel. Get briefed about the 3 Days Queen Elizabeth safari and depart along the Kampala-Masaka-Mbarara–Bushenyi route (7-8 hours' drive). Stop at the Equator crossing in Kayabwe for photos and relaxation. Continue to Igongo Cultural Centre or a hotel in Mbarara City for lunch. Proceed to Queen Elizabeth National Park, enjoying scenic countryside views. Arrive and check in at your pre-booked accommodation for dinner and overnight.

Accommodation options:
- Budget: Bulbul Safari Lodge, Simba Tented Camp
- Midrange: Buffalo Safari Lodge, Enganzi Game Lodge
- Luxury: Elephant Plains, Katara Lodge

Meal plan: Lunch & Dinner
Travel time: 7-8 hours from Kampala/Entebbe`,
      },
      {
        day: 2,
        title: 'Captivating Game Drive & Boat Cruise',
        details: `After an early breakfast, head to the Kasenyi Plains for registration and a rewarding game drive (2-3 hours). Spot lions, elephants, warthogs, leopards, buffaloes, antelopes, hyenas, and multiple bird species. Return to the lodge for relaxation and lunch. In the afternoon, enjoy a boat cruise on the Kazinga Channel (2-3 hours), spotting hippos, crocodiles, water birds, and other wildlife along the banks. Return to the lodge for dinner and overnight.

Accommodation options:
- Budget: Bulbul Safari Lodge, Simba Tented Camp
- Midrange: Buffalo Safari Lodge, Enganzi Game Lodge
- Luxury: Elephant Plains, Katara Lodge

Meal plan: Breakfast, Lunch & Dinner`,
      },
      {
        day: 3,
        title: 'Departure from Queen Elizabeth Game Park',
        details: `After breakfast, check out of the lodge and depart for Kampala or Entebbe. Arrive and be dropped off at your hotel or airport. End of the 3 Days Queen Elizabeth safari.

Meal plan: Breakfast
Travel time: 7-8 hours to Kampala/Entebbe`,
      },
    ],
    inclusions: [
      'All park entry fees',
      'Game drives',
      'Boat/launch cruise',
      'Accommodation plus meals as per the itinerary',
      'All ground travel plus services of driver guide & park guide',
      'Free bottled drinking water',
      'All relevant Uganda government levies',
      'All trip activities as stated on the itinerary',
    ],
    exclusions: [
      'Airfares',
      'All personal visa & passport expenses',
      'Tips',
      'All optional activities',
      'All costs on beverages',
      'Cigarettes',
      'Laundry services',
      'All costs on telephone bills',
    ],
    packingList: [
      'Good hiking boots',
      'Long-sleeved shirts',
      'Long pants',
      'Safari hat',
      'Rain jacket',
      'Sweater',
      'Insect repellent',
      'Daypack',
      'Bottled drinking water',
      'Pair of socks',
      'Camera and additional batteries',
      'Toiletries',
      'Valid passport and visa',
      'Sunscreen',
      'Anti-malaria medication',
      'Sunglasses',
      'Binoculars',
      'Walking stick (optional)',
    ],
    faqs: [
      {
        question:
          'How long is the drive from Kampala/Entebbe to Queen Elizabeth National Park?',
        answer:
          'The drive takes about 7-8 hours via the Kampala-Masaka-Mbarara–Bushenyi route, with a stop at the Equator and lunch in Mbarara.',
      },
      {
        question: 'What wildlife can I see in Queen Elizabeth National Park?',
        answer:
          'You can see lions, elephants, leopards, buffaloes, antelopes, warthogs, hyenas, hippos, crocodiles, and a variety of birds.',
      },
      {
        question: 'What is included in the package?',
        answer:
          'The package includes all park entry fees, game drives, boat cruise, accommodation, meals, ground travel, guide services, bottled water, government levies, and all activities as per the itinerary.',
      },
      {
        question: 'Where can I stay during the tour?',
        answer:
          'Accommodation options include Bulbul Safari Lodge or Simba Tented Camp (budget), Buffalo Safari Lodge or Enganzi Game Lodge (midrange), and Elephant Plains or Katara Lodge (luxury).',
      },
      {
        question: 'What should I pack for the 3-day Queen Elizabeth safari?',
        answer:
          'Pack good hiking boots, long-sleeved shirts, long pants, safari hat, rain jacket, sweater, insect repellent, daypack, bottled water, socks, camera, toiletries, passport, visa, sunscreen, anti-malaria medication, sunglasses, binoculars, and optionally a walking stick.',
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
    destination: 'Rwanda',
    duration: '3 days',
    image:
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/vbwkdn99escdqc8scxix',
    description: `A captivating 3-day Rwanda gorilla safari takes you deep into the lush Volcanoes National Park for a once-in-a-lifetime encounter with mountain gorillas, plus a Kigali city tour and a vibrant cultural experience in the Iby'Iwacu Village. The adventure begins and ends in Kigali with a full-time experienced guide.`,
    url: '/safaris/3-days-rwanda-gorilla-safari',
    slug: '3-days-rwanda-gorilla-safari',
    images: [
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/q08oh8nujhyvmofs0zpp',
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/vbwkdn99escdqc8scxix',
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/xas90h6m4uio90wnqzes',
    ],
    highlights: [
      'Guided gorilla trekking in Volcanoes National Park',
      'Visit to habituated gorilla families (Bwenge, Hirwa, Karisimbi, Ugenda, Kwitonda, Amahoro, Susa A, Sabyinyo, Agashya, and more)',
      'Kigali city tour (memorial center, Kimironko market, and more)',
      'Cultural tour in Iby\'Iwacu Village',
      'Professional park ranger and guide service',
      'Scenic drive from Kigali to Volcanoes National Park',
      'Certificate of participation',
      'Comfortable accommodation and meals included',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Depart from Kigali for Volcanoes National Park',
        details: `Leave your accommodation for an early morning city tour of Kigali after a briefing by your tour guide. Visit main historical and cultural sites including the Kigali Memorial Center (UNESCO site), Kimironko market, and more. After the guided city tour, enjoy lunch and then proceed to Volcanoes National Park (2-3 hours drive). Upon arrival, check in at your lodge and relax.

Accommodation options:
- Budget: Kinigi Guesthouse, Muhabura Hotel
- Midrange: Le Bambou Lodge, Five Volcanoes Boutique Hotel
- Luxury: Bisate Lodge, Singita Lodge

Meal plan: Lunch & Dinner
Travel time: 2-3 hours from Kigali`,
      },
      {
        day: 2,
        title: `Gorilla Trekking & Iby'Iwacu Village Tour`,
        details: `After breakfast, meet your driver guide and transfer to Kinigi for a briefing and allocation of gorilla groups. The trek begins at 8:00 am and may take 2-6 hours, including one hour for close interaction with a gorilla family. After the trek, return to the lodge for relaxation. In the afternoon, enjoy a cultural excursion in the Iby'Iwacu Village with vibrant entertainment and in-depth learning about Rwandan culture and traditions.

Accommodation options:
- Budget: Kinigi Guesthouse, Muhabura Hotel
- Midrange: Le Bambou Lodge, Five Volcanoes Boutique Hotel
- Luxury: Bisate Lodge, Singita Lodge

Meal plan: Breakfast, Lunch & Dinner`,
      },
      {
        day: 3,
        title: 'Return to Kigali – Depart',
        details: `Enjoy breakfast at your lodge, pack your luggage, and drive back to Kigali. Arrive early and be dropped off at the airport or your hotel. End of the thrilling 3-days Rwanda gorilla safari.

Meal plan: Breakfast`,
      },
    ],
    inclusions: [
      'Gorilla permits',
      'Travel to & from the park',
      'Accommodation plus delicious meals',
      'Driver and park ranger guide services',
      'A bottle of water',
      'Airport transfers',
      'All trip excursions excluding optional ones',
    ],
    exclusions: [
      'Laundry services',
      'Tipping',
      'All optional activities',
      'Insurance',
      'Visas',
      'Passports',
      'All costs on alcoholic drinks',
      'Cigarettes',
      'Telephone bills',
    ],
    packingList: [
      'Good hiking boots',
      'Long-sleeved shirts',
      'Long pants',
      'Safari hat',
      'Rain jacket',
      'Sweater',
      'Insect repellent',
      'Daypack',
      'Bottled drinking water',
      'Pair of socks',
      'Camera and additional batteries',
      'Gorilla permit',
      'Toiletries',
      'Valid passport and visa',
      'Sunscreen',
      'Anti-malaria medication',
      'Sunglasses',
      'Walking stick (optional)',
    ],
    faqs: [
      {
        question: 'How long does the gorilla trek take?',
        answer:
          'The trek can take anywhere from 2-6 hours depending on the location of the gorilla family. You will spend one hour with the gorillas once found.',
      },
      {
        question: 'What is included in the package?',
        answer:
          'The package includes gorilla permits, travel to and from the park, accommodation and meals, driver and park ranger guide services, bottled water, airport transfers, and all trip excursions excluding optional ones.',
      },
      {
        question: 'What should I pack for the 3 days Rwanda gorilla safari?',
        answer:
          'Pack good hiking boots, long-sleeved shirts, long pants, a safari hat, rain jacket, sweater, insect repellent, daypack, bottled water, socks, camera, gorilla permit, toiletries, passport, visa, sunscreen, anti-malaria medication, sunglasses, and optionally a walking stick.',
      },
      {
        question: 'Where can I stay during the tour?',
        answer:
          'Accommodation options include budget (Kinigi Guesthouse, Muhabura Hotel), midrange (Le Bambou Lodge, Five Volcanoes Boutique Hotel), and luxury (Bisate Lodge, Singita Lodge) lodges near Volcanoes National Park.',
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
    destination: 'Uganda',
    duration: '5 days',
    image:
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/hbi2suzdhpietabb6a8v',
    description:
      `The 5 Days Queen Elizabeth and Bwindi Safari offers unforgettable wildlife and gorilla trekking experiences. Enjoy game drives and a boat cruise in Queen Elizabeth National Park, then cross to Bwindi Impenetrable National Park for a thrilling gorilla trek and Batwa cultural experience. The adventure begins in Kampala/Entebbe and ends with a return after exploring Uganda's top wildlife and primate destinations.`,
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
      'Game drives in Queen Elizabeth National Park (Kasenyi Plains, Ishasha sector)',
      'Boat cruise on the Kazinga Channel',
      'Wildlife viewing: elephants, buffaloes, lions, leopards, antelopes, hyenas, hippos, crocodiles, and birds',
      'Gorilla trekking in Bwindi Impenetrable National Park',
      'Batwa pygmy community cultural experience',
      'Visit to the Equator crossing',
      "Scenic drives through Uganda's countryside",
      'Professional English-speaking safari guide/driver',
      'Comfortable accommodation and meals included',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Drive from Entebbe to Queen Elizabeth National Park',
        details: `Begin your journey from Entebbe or Kampala with a briefing about your 5-day Uganda safari. Travel in a 4x4 tourist vehicle with a pop-up roof, enjoying scenic countryside views. Stop at the Equator crossing for photos and relaxation, then continue to a hotel for lunch en route. Arrive at Queen Elizabeth National Park and check in to your lodge for relaxation, dinner, and overnight.

Accommodation options:
- Budget: Bush Lodge / Bulbul Safari Lodge / Simba Tented Camp
- Midrange: Enganzi Game Lodge / Buffalo Safari Lodge
- Luxury: Katara Lodge / Elephant Plains Lodge / Mweya Safari Lodge

Meal plan: Lunch & Dinner + Water en route
Travel time: 7-8 hours`
      },
      {
        day: 2,
        title: 'Game Drive plus Boat Cruise with an Expert',
        details: `Enjoy an early breakfast, then embark on a sunrise game drive in the Kasenyi Plains with an expert guide. Spot wildlife such as elephants, buffaloes, lions, leopards, hyenas, warthogs, antelopes, and birds. After a 2-3 hour game drive, return to the lodge to relax. After lunch, head to the Kazinga Channel for a 2-3 hour boat cruise, observing hippos, crocodiles, and water birds. Return to the lodge for dinner and overnight.

Accommodation options:
- Budget: Bush Lodge / Bulbul Safari Lodge / Simba Tented Camp
- Midrange: Enganzi Game Lodge / Buffalo Safari Lodge
- Luxury: Katara Lodge / Elephant Plains Lodge / Mweya Safari Lodge

Meal plan: Breakfast, Lunch & Dinner`
      },
      {
        day: 3,
        title: 'Leave Queen Elizabeth Park for Bwindi via Ishasha Sector',
        details: `After a leisurely breakfast, depart Queen Elizabeth National Park for Bwindi Impenetrable National Park. En route, enjoy a game drive in the Ishasha sector, searching for tree-climbing lions and other wildlife. Have lunch en route, then continue to Bwindi to check in to your lodge and prepare for the next day's gorilla trekking adventure.

Accommodation options:
- Budget: Ride 4 a Woman
- Midrange: Mahogany Springs / Engagi Lodge
- Luxury: Bwindi Lodge / Buhoma Lodge

Meal plan: Breakfast, Lunch & Dinner
Travel time: 3-4 hours`
      },
      {
        day: 4,
        title: 'Gorilla Trekking with an Expert & Batwa Cultural Experience',
        details: `Wake up early for a hearty breakfast, then transfer to the park offices for a briefing on gorilla trekking rules and allocation of gorilla groups and guides. Trek for 2-6 hours in Bwindi's forest, spending 1 hour with a habituated gorilla family. After the trek, receive your gorilla trekking certificate and return to the lodge for lunch and relaxation. In the afternoon, visit the Batwa pygmy community for a cultural experience. Return to the lodge for dinner and overnight.

Accommodation options:
- Budget: Ride 4 a Woman
- Midrange: Mahogany Springs / Engagi Lodge
- Luxury: Bwindi Lodge / Buhoma Lodge

Meal plan: Breakfast, Lunch & Dinner`
      },
      {
        day: 5,
        title: 'Departure',
        details: `Enjoy a leisurely breakfast, then check out and meet your driver guide for the journey back to Kampala or Entebbe. Enjoy scenic countryside views and a lunch stop en route. Arrive in Kampala/Entebbe and be dropped off at your hotel, marking the end of your 5-day safari.

Meal plan: Breakfast & Lunch`
      }
    ],
    inclusions: [
      'All park entry fees',
      'All tour activities as per itinerary',
      'Gorilla trekking permits (Bwindi)',
      'Game drives in Queen Elizabeth National Park',
      'Boat cruise on the Kazinga Channel',
      'Transportation in a 4x4 safari vehicle with pop-up roof',
      'Services of an experienced English-speaking driver/guide',
      'Bottled drinking water throughout the safari',
      'Airport transfers',
      'Accommodation and all meals as per itinerary',
      'Batwa cultural visit',
      'All relevant government taxes and levies',
    ],
    exclusions: [
      'Tips and gratuities',
      'Laundry services',
      'Passports',
      'Visas',
      'Telephone bills',
      'Travel and medical insurance',
      'Airfares (international and domestic)',
      'Personal expenses (shopping, souvenirs, etc.)',
      'Optional activities not mentioned in the itinerary',
      'Additional accommodation before/after the tour',
      'Beverages and alcoholic drinks',
    ],
    packingList: [
      'Valid passport and visa',
      'Gorilla trekking permit (provided)',
      'Good waterproof hiking boots',
      'Long-sleeved shirts and long pants',
      'Safari hat or cap',
      'Rain jacket or poncho',
      'Sweater or fleece for cool evenings',
      'Insect repellent',
      'Daypack for trekking',
      'Bottled drinking water',
      'Pair of socks (several)',
      'Camera and extra batteries/memory cards',
      'Binoculars',
      'Sunscreen and sunglasses',
      'Anti-malaria medication',
      'Personal toiletries',
      'First aid kit/medications',
      'Snacks and energy bars',
      'Walking stick (optional, can be hired at park)',
      'Gardening gloves (for gorilla trekking)',
      'Swimsuit (some lodges have pools)',
      'Lightweight backpack',
      'Flashlight or headlamp',
      'Travel insurance documents',
    ],
    faqs: [
      {
        question: 'What is the best time for this 5-day safari?',
        answer:
          'The best time is during the dry seasons: June–September and December–February, when trekking and game drives are easier and wildlife viewing is optimal.',
      },
      {
        question: 'What is included in the price?',
        answer:
          'The price includes all park entry fees, all activities as per itinerary, gorilla permit, game drives, boat cruise, transportation, bottled water, airport transfers, accommodation, meals, Batwa visit, and government taxes.',
      },
      {
        question: 'What is not included in the price?',
        answer:
          'Exclusions are tips, laundry, passports, visas, telephone bills, insurance, airfares, personal expenses, optional activities, additional accommodation, and beverages.',
      },
      {
        question: 'What should I pack for this safari?',
        answer:
          'Pack waterproof hiking boots, long-sleeved shirts and pants, a hat, rain jacket, sweater, insect repellent, daypack, water bottle, socks, camera, binoculars, sunscreen, anti-malaria medication, toiletries, first aid kit, snacks, walking stick, gloves, swimsuit, flashlight, and travel documents.',
      },
      {
        question: 'What are the accommodation options?',
        answer:
          'There are budget, midrange, and luxury options at each location. Examples include Bush Lodge, Bulbul Safari Lodge, Simba Tented Camp, Enganzi Game Lodge, Buffalo Safari Lodge, Katara Lodge, Elephant Plains Lodge, Mweya Safari Lodge, Ride 4 a Woman, Mahogany Springs, Engagi Lodge, Bwindi Lodge, and Buhoma Lodge.',
      },
      {
        question: 'How difficult is gorilla trekking?',
        answer:
          'Gorilla trekking requires moderate fitness. The trek can take 2–6 hours in hilly, forested terrain. Porters are available for hire to assist with carrying bags.',
      },
      {
        question: 'Is the tour suitable for children?',
        answer:
          'The minimum age for gorilla trekking is 15 years. Families with younger children can arrange alternative activities.',
      },
      {
        question: 'Can dietary requirements be accommodated?',
        answer:
          'Yes, most lodges can cater to special dietary needs with advance notice. Please inform us of any allergies or restrictions.',
      },
      {
        question: 'Is travel insurance required?',
        answer:
          'Yes, comprehensive travel and medical insurance is strongly recommended for all participants.',
      },
      {
        question: 'How do I obtain a Ugandan visa?',
        answer:
          'Ugandan visas can be obtained online (e-visa) or on arrival at Entebbe International Airport. Please check current requirements before travel.',
      }
    ],
    bestTime: 'June - September, December - February',
    groupSize: '2-8 people',
    difficulty: 'Moderate',
  },
  {
    id: 12,
    title: '8 Days Kibale, Queen Elizabeth and Bwindi Safari',
    location: 'Kibale, Queen Elizabeth & Bwindi, Uganda',
    destination: 'Uganda',
    duration: '8 days',
    image:
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/dvz6tkydiawtznebjkhp',
    description:
      'The extensive 8 Days Kibale, Queen Elizabeth and Bwindi Safari presents a lifetime opportunity to witness both the Big game and Great primates in their natural habitats. Explore Kibale National Park for chimpanzee trekking and Bigodi Wetland, enjoy game drives and a boat cruise in Queen Elizabeth National Park, and finish with gorilla trekking in Bwindi Impenetrable National Park. This comprehensive adventure begins and ends in Entebbe.',
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
      'Chimpanzee trekking in Kibale National Park – the Primate Capital of the World',
      'Guided nature walk in Bigodi Wetland Sanctuary',
      'Game drives in Queen Elizabeth National Park (Kasenyi Plains, Ishasha sector)',
      'Boat cruise on the Kazinga Channel',
      'Gorilla trekking in Bwindi Impenetrable National Park',
      "Scenic drives through Uganda's countryside, tea plantations, and crater lakes",
      'Visit to the Equator crossing',
      'Batwa pygmy community visit and cultural experience',
      'Professional English-speaking safari guide/driver',
      'Comfortable accommodation and meals included',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Transfer to the Hotel in Entebbe',
        details: `Upon arrival at Entebbe International Airport (EBB), meet your Dawnlight Journeys safari guide for a warm welcome and transfer to your pre-booked accommodation. Receive a detailed briefing about your upcoming adventure and settle in for the night.

Accommodation options:
- Budget: Airport Side Hotel Entebbe
- Midrange: The Boma Hotel
- Luxury: No.5 Hotel

Meal plan: Not included (can be arranged on request)`,
      },
      {
        day: 2,
        title: 'Pick up & Travel by Road to Kibale',
        details: `Enjoy a tasty cup of tea/coffee and meet your safari guide for a short briefing. Begin your journey to Kibale Forest National Park via the Kampala-Mityana-Mubende-Fort Portal City route. Enjoy scenic views of Matiri Forest, banana and tea plantations, and the distant Rwenzori Mountains. Arrive at Fort Portal for a leisurely lunch and refreshments, then continue to your lodge to relax, dine, and overnight.

Accommodation options:
- Budget: Isunga Lodge
- Midrange: Primate Lodge
- Luxury: Kyaninga Lodge

Meal plan: Lunch & Dinner
Travel time: 5-6 hours from Entebbe/Kampala`,
      },
      {
        day: 3,
        title: 'Chimpanzee Trekking & Bigodi Wetland Walk',
        details: `After breakfast, transfer to Kanyanchu Visitor Center for a briefing led by park officials. Embark on a morning chimpanzee trek (starts at 8:00 am, lasts 2-4 hours). Spend up to one hour observing chimpanzees in their natural habitat, taking photos and learning about their behavior. Return to the lodge for a leisurely lunch. In the afternoon, join a guided nature walk in Bigodi Wetland Sanctuary, searching for primates, birds, and other wildlife. Return to your lodge for dinner and overnight.

Accommodation options:
- Budget: Isunga Lodge
- Midrange: Primate Lodge
- Luxury: Kyaninga Lodge

Meal plan: Breakfast, Lunch & Dinner`,
      },
      {
        day: 4,
        title: 'Kibale to Queen Elizabeth National Park, Game Drive',
        details: `After breakfast, proceed to Queen Elizabeth National Park via Kasese town, passing scenic crater lakes, Rwenzori Mountain ranges, and vast savanna plains. Stop at the Equator crossing at Kikorongo for photos. Arrive at your lodge for lunch and relaxation. In the afternoon, embark on a game drive in the Kasenyi Plains, searching for elephants, buffaloes, lions, leopards, Uganda Kobs, and more. Return to the lodge for dinner and overnight.

Accommodation options:
- Budget: Bush Lodge
- Midrange: Buffalo Safari Lodge
- Luxury: Elephant Plains Lodge

Meal plan: Breakfast, Lunch & Dinner
Travel time: 3-4 hours`,
      },
      {
        day: 5,
        title: 'Early Morning Game Drive & Boat Cruise',
        details: `After a hearty breakfast, depart for a sunrise game drive in the Kasenyi Plains (2-3 hours), searching for early risers and a variety of wildlife. Return to the lodge for lunch and refreshments. In the afternoon, enjoy a guided boat cruise on the Kazinga Channel (about 2 hours), spotting hippos, crocodiles, elephants, buffaloes, and water birds. Relax at the lodge in the evening.

Accommodation options:
- Budget: Bush Lodge
- Midrange: Buffalo Safari Lodge
- Luxury: Elephant Plains Lodge

Meal plan: Breakfast, Lunch & Dinner`,
      },
      {
        day: 6,
        title: 'Queen Elizabeth Park to Bwindi via Ishasha',
        details: `After breakfast, check out and depart for Bwindi Impenetrable National Park (3-4 hours). En route, enjoy a game drive in the Ishasha sector, searching for the famous tree-climbing lions and other mammals and birds. Enjoy a bush lunch or stop at a lodge. Continue to Bwindi and check in to your accommodation for relaxation, dinner, and overnight.

Accommodation options:
- Budget: Ride 4 a Woman / Buhoma Community Rest Camp
- Midrange: Mahogany Springs Lodge / Engagi Lodge
- Luxury: The Luxury Bwindi Lodge / Buhoma Lodge

Meal plan: Breakfast, Lunch & Dinner`,
      },
      {
        day: 7,
        title: 'Gorilla Trekking & Visit the Batwa Pygmies',
        details: `Wake up early for a hearty breakfast. Transfer to Bwindi National Park offices for briefing and allocation of gorilla families and park ranger guides. Begin your gorilla trek at 8:00 am (2-6 hours, including 1 hour with the gorillas). After trekking, receive your gorilla trekking certificate and return to the lodge for lunch and relaxation. In the afternoon, visit the Batwa pygmy community for a cultural experience. Return to the lodge for dinner and overnight.

Accommodation options:
- Budget: Ride 4 a Woman / Buhoma Community Rest Camp
- Midrange: Mahogany Springs Lodge / Engagi Lodge
- Luxury: The Luxury Bwindi Lodge / Buhoma Lodge

Meal plan: Breakfast, Lunch & Dinner`,
      },
      {
        day: 8,
        title: 'Departure',
        details: `After breakfast, check out and depart Bwindi for Entebbe via the Mbarara-Masaka-Kampala route. Enjoy scenic views and a lunch stop en route. Arrive in Entebbe in the evening and transfer to your accommodation or airport for departure.

Meal plan: Breakfast & Lunch
Travel time: 8-9 hours to Entebbe`,
      },
    ],
    inclusions: [
      'All park entry fees',
      'Travel using a 4x4 safari vehicle with pop-up roof',
      'Services of an experienced English-speaking guide/park ranger',
      'Gorilla trekking permits (Bwindi)',
      'Chimpanzee trekking permits (Kibale)',
      'Game drives in Queen Elizabeth National Park',
      'Boat cruise on the Kazinga Channel',
      'Bigodi Wetland guided walk',
      'Accommodation fees and all meals as per itinerary',
      'Bottled drinking water throughout the safari',
      'Airport transfers',
      'All activities as per the itinerary',
      'All government taxes and levies',
      'Cultural visit to the Batwa pygmies',
      'Emergency medical evacuation (AMREF Flying Doctors, insurance not included)',
    ],
    exclusions: [
      'Visas',
      'Tipping and gratuities',
      'Beverages and alcoholic drinks',
      'Laundry services',
      'Airfares (international and domestic)',
      'Passports',
      'Travel and medical insurance',
      'Optional activities not mentioned in the itinerary',
      'Personal expenses (shopping, souvenirs, etc.)',
      'Additional accommodation before/after the tour',
      'Telephone bills',
      'Cigarettes',
    ],
    packingList: [
      'Valid passport and visa',
      'Gorilla and chimpanzee trekking permits (provided)',
      'Good waterproof hiking boots',
      'Long-sleeved shirts and long pants',
      'Safari hat or cap',
      'Rain jacket or poncho',
      'Sweater or fleece for cool evenings',
      'Insect repellent',
      'Daypack for trekking',
      'Bottled drinking water',
      'Pair of socks (several)',
      'Camera and extra batteries/memory cards',
      'Binoculars',
      'Sunscreen and sunglasses',
      'Anti-malaria medication',
      'Personal toiletries',
      'First aid kit/medications',
      'Snacks and energy bars',
      'Walking stick (optional, can be hired at park)',
      'Gardening gloves (for gorilla trekking)',
      'Swimsuit (some lodges have pools)',
      'Lightweight backpack',
      'Flashlight or headlamp',
      'Travel insurance documents',
    ],
    faqs: [
      {
        question: 'What is the best time for this 8-day safari?',
        answer:
          'The best time is during the dry seasons: June–September and December–February, when trekking and game drives are easier and wildlife viewing is optimal.',
      },
      {
        question: 'What is included in the price?',
        answer:
          'The price includes all park entry fees, gorilla and chimpanzee permits, game drives, boat cruise, accommodation, meals, bottled water, airport transfers, and all activities as per the itinerary.',
      },
      {
        question: 'What is not included in the price?',
        answer:
          'Exclusions are visas, tips, beverages, laundry, airfares, passports, insurance, optional activities, personal expenses, and additional accommodation before/after the tour.',
      },
      {
        question: 'What should I pack for this safari?',
        answer:
          'Pack waterproof hiking boots, long-sleeved shirts and pants, a hat, rain jacket, sweater, insect repellent, daypack, water bottle, socks, camera, binoculars, sunscreen, anti-malaria medication, toiletries, first aid kit, snacks, walking stick, gloves, swimsuit, flashlight, and travel documents.',
      },
      {
        question: 'What are the accommodation options?',
        answer:
          'There are budget, midrange, and luxury options at each location. Examples include Airport Side Hotel Entebbe, Isunga Lodge, Primate Lodge, Kyaninga Lodge, Bush Lodge, Buffalo Safari Lodge, Elephant Plains Lodge, Ride 4 a Woman, Mahogany Springs Lodge, and Buhoma Lodge.',
      },
      {
        question: 'How difficult is gorilla and chimpanzee trekking?',
        answer:
          'Both activities require moderate fitness. Trekking can take 2–6 hours in hilly, forested terrain. Porters are available for hire to assist with carrying bags.',
      },
      {
        question: 'Is the tour suitable for children?',
        answer:
          'The minimum age for gorilla and chimpanzee trekking is 15 years. Families with younger children can arrange alternative activities.',
      },
      {
        question: 'Can dietary requirements be accommodated?',
        answer:
          'Yes, most lodges can cater to special dietary needs with advance notice. Please inform us of any allergies or restrictions.',
      },
      {
        question: 'Is travel insurance required?',
        answer:
          'Yes, comprehensive travel and medical insurance is strongly recommended for all participants.',
      },
      {
        question: 'How do I obtain a Ugandan visa?',
        answer:
          'Ugandan visas can be obtained online (e-visa) or on arrival at Entebbe International Airport. Please check current requirements before travel.',
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
    destination: 'Uganda',
    duration: '10 days',
    image:
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/sihgp7fwvkhzrdwgiz6y',
    description:
      'This 10-day Uganda safari is an adventure-packed journey featuring chimpanzee tracking, gorilla trekking, game viewing, rhino tracking, and cultural encounters. Explore Murchison Falls, Kibale, Queen Elizabeth, Bwindi Impenetrable National Park, and Lake Bunyonyi, with comfortable stays and expert guides throughout.',
    url: '/safaris/10-days-uganda-safari',
    slug: '10-days-uganda-safari',
    images: [
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/sihgp7fwvkhzrdwgiz6y',
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/aprkacmqhcomx6kuvrrb',
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/k42zcswyvtf3pdcdqfim',
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/hbi2suzdhpietabb6a8v',
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/dvz6tkydiawtznebjkhp',
    ],
    highlights: [
      'Rhino trekking at Ziwa Rhino Sanctuary',
      'Game drives in Murchison Falls, Queen Elizabeth, and Ishasha sector',
      'Boat cruise on the Victoria Nile and Kazinga Channel',
      'Chimpanzee trekking in Kibale National Park',
      'Gorilla trekking in Bwindi Impenetrable National Park',
      'Cultural tour with Batwa pygmies',
      'Relaxation at Lake Bunyonyi with boat/canoe ride',
      'Visit to the Equator crossing',
      "Scenic drives through Uganda's countryside and crater lakes",
      'Professional English-speaking safari guide/driver',
      'Comfortable accommodation and meals included',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Pick up & Drive to Murchison Falls National Park, Rhino Trek',
        details: `Meet your Dawnlight Journeys expert for a briefing and depart for Murchison Falls National Park via the Kampala-Gulu highway (6-7 hours). En route, stop at Ziwa Rhino Sanctuary for guided rhino trekking on foot. Continue to Masindi for lunch, then proceed to Kichumbanyobo gate and visit the top of the falls for scenic views and photography. Transfer to your lodge for relaxation.

Accommodation options:
- Budget: Heritage Lodge
- Midrange: Fort Murchison Lodge
- Luxury: Paraa Safari Lodge / Nile Safari Lodge

Meal plan: Lunch & Dinner plus free bottled water on the road
Travel time: 6-7 hours.`,
      },
      {
        day: 2,
        title: 'Exciting Game Drive & Boat Cruise',
        details: `Enjoy an early breakfast, then embark on a sunrise game drive in the northern sector of Murchison Falls National Park. Spot Rothschild giraffes, elephants, buffaloes, lions, leopards, Uganda Kobs, oribis, hartebeest, bushbucks, warthogs, and many birds. After a 2-3 hour game drive, return for lunch at the lodge. In the afternoon, take a boat cruise on the Victoria Nile to the base of the falls, observing hippos, Nile crocodiles, and water birds. Return to the lodge for dinner and overnight.

Accommodation options:
- Budget: Heritage Lodge
- Midrange: Fort Murchison Lodge
- Luxury: Paraa Safari Lodge / Nile Safari Lodge

Meal plan: Breakfast, Lunch & Dinner`,
      },
      {
        day: 3,
        title: 'Travel to Kibale National Park via Fort Portal',
        details: `After breakfast, depart for Kibale National Park via Hoima and Fort Portal (7-8 hours). Enjoy scenic views of the countryside, tea plantations, and the Rwenzori Mountains. Lunch in Fort Portal, then continue to your lodge for relaxation and overnight.

Accommodation options:
- Budget: Isunga Lodge / Chimpanzee Forest Guesthouse
- Midrange: Primate Lodge / Chimpundu Lodge
- Luxury: Kyaninga Lodge / Crater Safari Lodge

Meal plan: Breakfast, Lunch & Dinner
Travel time: 7-8 hours.`,
      },
      {
        day: 4,
        title: 'Captivating Chimpanzee Trek & Bigodi Walk',
        details: `Early breakfast, then transfer to Kanyanchu Tourist Centre for briefing and allocation of park ranger guides. Trek to find a habituated chimpanzee community (2-4 hours, including 1 hour with the chimps). Spot other primates and birds. Return for lunch at the lodge. In the afternoon, enjoy a guided nature walk in Bigodi Wetland Sanctuary, searching for primates, birds, and other wildlife. Return to the lodge for dinner and overnight.

Accommodation options:
- Budget: Isunga Lodge / Chimpanzee Forest Guesthouse
- Midrange: Primate Lodge / Chimpundu Lodge
- Luxury: Kyaninga Lodge / Crater Safari Lodge

Meal plan: Breakfast, Lunch & Dinner`,
      },
      {
        day: 5,
        title: 'Kibale to Queen Elizabeth National Park',
        details: `After breakfast, drive to Queen Elizabeth National Park (2-3 hours), enjoying views of crater lakes and a stop at the Kikorongo Equator crossing. Arrive at your lodge for lunch and relaxation. In the afternoon, embark on a guided game drive in the Kasenyi Plains, spotting elephants, lions, leopards, buffaloes, Uganda Kobs, and more. Return to the lodge for dinner and overnight.

Accommodation options:
- Budget: Queen Elizabeth Bush Lodge
- Midrange: Enganzi Game Lodge / Buffalo Safari Lodge
- Luxury: Elephant Plains Lodge

Meal plan: Breakfast, Lunch & Dinner
Travel time: 2-3 hours.`,
      },
      {
        day: 6,
        title: 'Game Drive plus Kazinga Channel Boat Cruise',
        details: `After breakfast, head to Kasenyi Plains for a morning game drive (2-3 hours), searching for lions, elephants, leopards, hyenas, buffaloes, warthogs, and more. Return for lunch at the lodge. In the afternoon, enjoy a boat cruise on the Kazinga Channel, observing hippos, crocodiles, and water birds. Return to the lodge for dinner and overnight.

Accommodation options:
- Budget: Queen Elizabeth Bush Lodge
- Midrange: Enganzi Game Lodge / Buffalo Safari Lodge
- Luxury: Elephant Plains Lodge

Meal plan: Breakfast, Lunch & Dinner`,
      },
      {
        day: 7,
        title: 'Transfer to Bwindi National Park via Ishasha',
        details: `After breakfast, drive to Bwindi Impenetrable National Park via the Ishasha sector, searching for tree-climbing lions and other wildlife. Continue to Bwindi for relaxation at your lodge.

Accommodation options:
- Budget: Ride 4 a Woman Lodge
- Midrange: Mahogany Springs Lodge / Engagi Lodge
- Luxury: Bwindi Lodge / Buhoma Lodge

Meal plan: Breakfast, Lunch & Dinner
Travel time: 3-4 hours.`,
      },
      {
        day: 8,
        title: 'Gorilla Trekking & Batwa Community Visit',
        details: `Early breakfast, then transfer to park offices for briefing and allocation of gorilla groups and guides. Trek for 2-6 hours to find mountain gorillas, spending 1 hour with them. Return to the lodge for lunch and relaxation. In the afternoon, visit the Batwa pygmy community for a cultural experience. Return to the lodge for dinner and overnight.

Accommodation options:
- Budget: Ride 4 a Woman Lodge
- Midrange: Mahogany Springs Lodge / Engagi Lodge
- Luxury: Bwindi Lodge / Buhoma Lodge

Meal plan: Breakfast, Lunch & Dinner`,
      },
      {
        day: 9,
        title: 'Transfer to Lake Bunyonyi for Relaxation',
        details: `After breakfast, transfer to Lake Bunyonyi, the deepest lake in Uganda with 29 islands. Enjoy a boat or canoe ride and relax at your lodge.

Accommodation options:
- Budget: Byoona Amagara Island / Lake Bunyonyi Overland Resort
- Midrange: Lake Bunyonyi Rock Resort / Bunyonyi Safari Resort
- Luxury: Birdnest @Bunyonyi / Arcadia Cottages Lake Bunyonyi

Meal plan: Breakfast, Lunch & Dinner`,
      },
      {
        day: 10,
        title: 'Departure from Lake Bunyonyi',
        details: `Enjoy breakfast at leisure, then meet your driver guide for transfer to Kampala or Entebbe. Lunch en route. Drop off at your hotel or airport, marking the end of your 10-day Uganda safari.

Meal plan: Breakfast & Lunch`,
      },
    ],
    inclusions: [
      'All park entry fees',
      'Accommodation plus all meals as per itinerary',
      'Game drives in Murchison Falls, Queen Elizabeth, and Ishasha',
      'Cultural tours (Batwa pygmies, community walks)',
      'Boat cruises on the Victoria Nile and Kazinga Channel',
      'Chimpanzee and gorilla trekking permits',
      'Ground travel in a 4x4 tourist vehicle with pop-up roof',
      'Services of an experienced English-speaking guide/driver',
      'Bottled drinking water throughout the safari',
      'All relevant government taxes and levies',
      'Airport transfers',
      'Rhino trekking at Ziwa Rhino Sanctuary',
      'Bigodi Wetland guided walk',
      'Lake Bunyonyi boat/canoe ride',
      'Emergency medical evacuation (AMREF Flying Doctors, insurance not included)',
    ],
    exclusions: [
      'Tips and gratuities',
      'Visas',
      'Passports',
      'Airfares (international and domestic)',
      'Telephone bills',
      'Porter fees',
      'Travel and medical insurance',
      'Shopping and personal expenses',
      'Cigarettes and alcoholic drinks',
      'Optional activities not mentioned in the itinerary',
      'Additional accommodation before/after the tour',
      'Laundry services',
    ],
    packingList: [
      'Valid passport and visa',
      'Gorilla and chimpanzee trekking permits (provided)',
      'Good waterproof hiking boots',
      'Long-sleeved shirts and long pants',
      'Safari hat or cap',
      'Rain jacket or poncho',
      'Sweater or fleece for cool evenings',
      'Insect repellent',
      'Daypack for trekking',
      'Bottled drinking water',
      'Pair of socks (several)',
      'Camera and extra batteries/memory cards',
      'Binoculars',
      'Sunscreen and sunglasses',
      'Anti-malaria medication',
      'Personal toiletries',
      'First aid kit/medications',
      'Snacks and energy bars',
      'Walking stick (optional, can be hired at park)',
      'Gardening gloves (for gorilla trekking)',
      'Swimsuit (some lodges have pools)',
      'Lightweight backpack',
      'Flashlight or headlamp',
      'Travel insurance documents',
    ],
    faqs: [
      {
        question: 'What is the best time for this 10-day Uganda safari?',
        answer:
          'The best time is during the dry seasons: June–September and December–February, when trekking and game drives are easier and wildlife viewing is optimal.',
      },
      {
        question: 'What is included in the price?',
        answer:
          'The price includes all park entry fees, accommodation, meals, game drives, boat cruises, chimpanzee and gorilla permits, ground transport, bottled water, airport transfers, rhino trekking, Bigodi walk, Lake Bunyonyi boat ride, and all activities as per the itinerary.',
      },
      {
        question: 'What is not included in the price?',
        answer:
          'Exclusions are tips, visas, passports, airfares, telephone bills, porter fees, insurance, shopping, cigarettes, alcoholic drinks, optional activities, additional accommodation, and laundry.',
      },
      {
        question: 'What should I pack for this safari?',
        answer:
          'Pack waterproof hiking boots, long-sleeved shirts and pants, a hat, rain jacket, sweater, insect repellent, daypack, water bottle, socks, camera, binoculars, sunscreen, anti-malaria medication, toiletries, first aid kit, snacks, walking stick, gloves, swimsuit, flashlight, and travel documents.',
      },
      {
        question: 'What are the accommodation options?',
        answer:
          'There are budget, midrange, and luxury options at each location. Examples include Heritage Lodge, Fort Murchison Lodge, Paraa Safari Lodge, Isunga Lodge, Primate Lodge, Kyaninga Lodge, Queen Elizabeth Bush Lodge, Enganzi Game Lodge, Elephant Plains Lodge, Ride 4 a Woman, Mahogany Springs Lodge, Bwindi Lodge, Byoona Amagara Island, Lake Bunyonyi Rock Resort, and Birdnest @Bunyonyi.',
      },
      {
        question: 'How difficult is gorilla and chimpanzee trekking?',
        answer:
          'Both activities require moderate fitness. Trekking can take 2–6 hours in hilly, forested terrain. Porters are available for hire to assist with carrying bags.',
      },
      {
        question: 'Is the tour suitable for children?',
        answer:
          'The minimum age for gorilla and chimpanzee trekking is 15 years. Families with younger children can arrange alternative activities.',
      },
      {
        question: 'Can dietary requirements be accommodated?',
        answer:
          'Yes, most lodges can cater to special dietary needs with advance notice. Please inform us of any allergies or restrictions.',
      },
      {
        question: 'Is travel insurance required?',
        answer:
          'Yes, comprehensive travel and medical insurance is strongly recommended for all participants.',
      },
      {
        question: 'How do I obtain a Ugandan visa?',
        answer:
          'Ugandan visas can be obtained online (e-visa) or on arrival at Entebbe International Airport. Please check current requirements before travel.',
      },
    ],
    bestTime: 'June - September, December - February',
    groupSize: '2-8 people',
    difficulty: 'Moderate',
  },
];
