import { CustomButton } from '../../src/components/ui/custom-button';
import React from 'react';
import { ChevronDown } from 'lucide-react';

const safariPackages = [
  {
    id: 1,
    title: 'Gorilla Trekking Adventure',
    location: 'Bwindi Impenetrable Forest, Uganda',
    duration: '5 days',
    image: '/assets/safaris/gorilla-trekking.jpg',
    description: 'Get up close with endangered mountain gorillas in their natural habitat.',
    url: '/safaris/gorilla-trekking',
    faqs: [
      {
        question: 'How difficult is the gorilla trekking?',
        answer: 'It can be moderately to highly physically demanding, depending on the gorilla location. Treks can last from 30 minutes to 6+ hours.'
      },
      {
        question: 'What should I bring for the trek?',
        answer: 'Sturdy hiking boots, rain jacket, long pants, gloves, and a camera are recommended.'
      }
    ]
  },
  {
    id: 2,
    title: 'Rwanda Wildlife Safari',
    location: 'Akagera National Park, Rwanda',
    duration: '7 days',
    image: '/assets/safaris/wildlife-sararis.jpg',
    description: "Experience the Big Five and stunning landscapes in Rwanda's premier national park.",
    url: '/safaris/rwanda-wildlife-safari',
    faqs: [
      {
        question: 'What animals can I expect to see?',
        answer: 'You can see lions, elephants, buffalo, leopards, rhinos, giraffes, zebras, and more.'
      },
      {
        question: 'Is Akagera National Park safe?',
        answer: 'Yes, the park is safe and guided by experienced rangers.'
      }
    ]
  },
  {
    id: 3,
    title: 'Uganda Primate Experience',
    location: 'Kibale Forest, Uganda',
    duration: '6 days',
    image: '/assets/safaris/uganda-primate-experience.jpg',
    description: 'Track chimpanzees and other primates in the lush forests of Uganda.',
    url: '/safaris/uganda-primate-experience',
    faqs: [
      {
        question: 'What primates will I see?',
        answer: 'Kibale Forest is home to chimpanzees, colobus monkeys, red-tailed monkeys, and more.'
      },
      {
        question: 'Is photography allowed?',
        answer: 'Yes, but flash photography is not permitted.'
      }
    ]
  },
  {
    id: 4,
    title: 'Queen Elizabeth Wildlife Safari',
    location: 'Queen Elizabeth National Park, Uganda',
    duration: '4 days',
    image: '/assets/common/placeholder.svg',
    description: 'Experience diverse wildlife including tree-climbing lions and boat safaris on the Kazinga Channel.',
    url: '/safaris/queen-elizabeth-wildlife-safari',
    faqs: [
      {
        question: 'What makes this park unique?',
        answer: "It's famous for its tree-climbing lions and the Kazinga Channel boat safari, offering unique wildlife viewing opportunities."
      },
      {
        question: 'Best time to visit?',
        answer: 'The dry seasons (January-February and June-July) offer the best wildlife viewing opportunities.'
      }
    ]
  },
  {
    id: 5,
    title: 'Volcanoes National Park Trek',
    location: 'Volcanoes National Park, Rwanda',
    duration: '3 days',
    image: '/assets/common/placeholder.svg',
    description: 'Hike through volcanic landscapes and encounter golden monkeys in their natural habitat.',
    url: '/safaris/volcanoes-national-park-trek',
    faqs: [
      {
        question: "What's the hiking difficulty?",
        answer: 'The hikes range from moderate to challenging, with varying altitudes and terrain.'
      },
      {
        question: 'What wildlife can I see?',
        answer: 'Besides golden monkeys, you might spot various bird species and other forest wildlife.'
      }
    ]
  },
  {
    id: 6,
    title: 'Murchison Falls Safari',
    location: 'Murchison Falls National Park, Uganda',
    duration: '5 days',
    image: '/assets/common/placeholder.svg',
    description: "Witness the powerful Murchison Falls and enjoy game drives in Uganda's largest national park.",
    url: '/safaris/murchison-falls-safari',
    faqs: [
      {
        question: 'What activities are included?',
        answer: 'Game drives, boat safaris to the falls, and bird watching are the main activities.'
      },
      {
        question: 'What wildlife can I expect?',
        answer: 'You can see elephants, giraffes, lions, hippos, crocodiles, and numerous bird species.'
      }
    ]
  },
  {
    id: 7,
    title: 'Nyungwe Forest Experience',
    location: 'Nyungwe Forest National Park, Rwanda',
    duration: '4 days',
    image: '/assets/common/placeholder.svg',
    description: "Explore one of Africa's oldest rainforests and track chimpanzees in their natural environment.",
    url: '/safaris/nyungwe-forest-experience',
    faqs: [
      {
        question: "What makes Nyungwe special?",
        answer: "It's one of the oldest rainforests in Africa and home to 13 primate species."
      },
      {
        question: 'What other activities are available?',
        answer: 'Canopy walks, bird watching, and nature trails are popular activities.'
      }
    ]
  }
];

const SafariFAQ = ({ faqs }: { faqs: { question: string; answer: string }[] }) => (
  <section className="mt-6">
    <h4 className="text-xl font-bold mb-4 text-primary">FAQs</h4>
    <ul className="space-y-3">
      {faqs.map((faq, idx) => (
        <li key={idx} className="rounded-xl bg-white shadow p-4 transition hover:shadow-lg">
          <details className="group">
            <summary className="flex items-center cursor-pointer font-medium text-gray-800 group-open:text-primary transition-colors">
              <ChevronDown className="h-5 w-5 mr-2 group-open:rotate-180 transition-transform duration-300 text-primary" />
              {faq.question}
            </summary>
            <p className="mt-2 text-muted-foreground text-sm pl-7 animate-fade-in">
              {faq.answer}
            </p>
          </details>
        </li>
      ))}
    </ul>
  </section>
);

export default function SafarisPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center mb-12 overflow-hidden px-4 md:px-8 lg:px-16 py-8 md:py-16 lg:py-20">
        <img
          src="/assets/safaris/gorilla-trekking.jpg"
          alt="Safari Hero"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-70"
        />
        <section className="py-16 absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        <section className="relative py-12 px-6 z-10 text-center text-white max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-8 drop-shadow-lg">Safari Adventures</h1>
          <p className="text-[15px] md:text-[15px] max-w-2xl mx-auto drop-shadow px-4">
            Discover Africa's most breathtaking wildlife experiences and create memories that last a lifetime.
          </p>
        </section>
      </section>

      {/* Description Section */}
      <section className="container mx-auto px-4 mb-4 rounded-md">
        <article className="bg-white rounded-2xl shadow-lg p-4 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-primary">Our Safari Packages</h2>
          <p className="text-[15px] md:text-[15px] text-gray-700 mb-4">
            At Dawnlight Journeys, we curate exceptional safari experiences that combine adventure, wildlife encounters, and cultural immersion. Our carefully designed packages take you through Uganda and Rwanda's most spectacular landscapes and wildlife reserves.
          </p>
          <p className="text-[15px] md:text-[15px] text-gray-700 mb-4">
            From tracking mountain gorillas in their natural habitat to witnessing the Big Five on thrilling game drives, each safari is crafted to provide an unforgettable journey. Our expert guides ensure your safety while maximizing wildlife viewing opportunities.
          </p>
          <p className="text-[15px] md:text-[15px] text-gray-700">
            Whether you're seeking a short wildlife excursion or an extended adventure, our diverse range of packages caters to all preferences and durations. Each safari includes comfortable accommodations, experienced guides, and all necessary permits.
          </p>
        </article>
      </section>

      {/* Safari Cards */}
      <section className="container grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-4">
        {safariPackages.map((safari) => (
          <article
            key={safari.id}
            className="group rounded-2xl overflow-hidden shadow-xl border bg-white hover:scale-[1.02] transition-transform flex flex-col"
          >
            <figure className="relative h-56 overflow-hidden">
              <img
                src={safari.image}
                alt={safari.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <figcaption className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4">
                <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-[15px] font-semibold shadow">
                  {safari.duration}
                </span>
              </figcaption>
            </figure>
            <header className="p-6 pb-0">
              <h2 className="text-2xl font-bold mb-1 text-primary group-hover:underline">{safari.title}</h2>
              <p className="text-[15px] text-muted-foreground mb-1">{safari.location}</p>
            </header>
            <section className="p-6 pt-2 flex-1 flex flex-col">
              <p className="mb-4 flex-1 text-[15px] text-gray-700">{safari.description}</p>
              <CustomButton variant="primary" size="sm" href={safari.url} className="w-full mb-4">
                View Details
              </CustomButton>
              <SafariFAQ faqs={safari.faqs} />
            </section>
          </article>
        ))}
      </section>
    </main>
  );
}