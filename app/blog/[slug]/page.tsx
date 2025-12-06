import React from 'react';
import { Footer } from '@/src/components/footer';
import { CustomButton } from '@/src/components/ui/custom-button';
import { safariPackages } from '@/src/constants/safaris';
import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  
  // Define blog posts with their metadata
  const blogPosts = {
    'gorilla-trekking-guide': {
      title: 'The Ultimate Guide to Gorilla Trekking in Rwanda',
      description: 'Discover everything you need to know about gorilla trekking in Rwanda, from permits and packing tips to the best time to visit and what to expect on your adventure.',
      keywords: [
        'gorilla trekking rwanda',
        'mountain gorilla trekking',
        'volcanoes national park',
        'rwanda gorilla trekking',
        'gorilla trekking guide',
        'gorilla trekking tips',
        'gorilla trekking packing list',
        'gorilla trekking permits',
        'gorilla trekking best time',
        'gorilla trekking cost',
        'gorilla trekking duration',
        'gorilla trekking difficulty',
        'gorilla trekking fitness',
        'gorilla trekking clothing',
        'gorilla trekking equipment',
        'gorilla trekking photography',
        'gorilla trekking rules',
        'gorilla trekking etiquette',
        'gorilla trekking safety',
        'gorilla trekking health',
        'gorilla trekking vaccination',
        'gorilla trekking insurance',
        'gorilla trekking booking',
        'gorilla trekking operator',
        'gorilla trekking company',
        'gorilla trekking agency',
        'gorilla trekking guide',
        'gorilla trekking expert',
        'gorilla trekking tour',
        'gorilla trekking package',
        'gorilla trekking safari',
        'gorilla trekking adventure',
        'gorilla trekking experience',
        'gorilla trekking journey',
        'gorilla trekking trip',
        'gorilla trekking holiday',
        'gorilla trekking vacation',
        'gorilla trekking rwanda guide',
        'gorilla trekking rwanda tips',
        'gorilla trekking rwanda packing',
        'gorilla trekking rwanda permits',
        'gorilla trekking rwanda best time',
        'gorilla trekking rwanda cost',
        'gorilla trekking rwanda duration',
        'gorilla trekking rwanda difficulty',
        'gorilla trekking rwanda fitness',
        'gorilla trekking rwanda clothing',
        'gorilla trekking rwanda equipment',
        'gorilla trekking rwanda photography',
        'gorilla trekking rwanda rules',
        'gorilla trekking rwanda etiquette',
        'gorilla trekking rwanda safety',
        'gorilla trekking rwanda health',
        'gorilla trekking rwanda vaccination',
        'gorilla trekking rwanda insurance',
        'gorilla trekking rwanda booking',
        'gorilla trekking rwanda operator',
        'gorilla trekking rwanda company',
        'gorilla trekking rwanda agency',
        'gorilla trekking rwanda guide',
        'gorilla trekking rwanda expert',
        'gorilla trekking rwanda tour',
        'gorilla trekking rwanda package',
        'gorilla trekking rwanda safari',
        'gorilla trekking rwanda adventure',
        'gorilla trekking rwanda experience',
        'gorilla trekking rwanda journey',
        'gorilla trekking rwanda trip',
        'gorilla trekking rwanda holiday',
        'gorilla trekking rwanda vacation',
        'safari',
        'uganda',
        'rwanda',
        'africa',
        'wildlife',
        'adventure',
        'travel',
        'tour',
        'nature',
        'conservation',
        'eco-tourism',
        'cultural tour',
        'wildlife photography',
        'bird watching',
        'mountain gorilla',
        'chimpanzee',
        'big five',
        'national park',
        'nature reserve',
        'wildlife sanctuary',
        'conservation area',
        'protected area',
        'biodiversity',
        'endangered species',
        'wildlife conservation',
        'sustainable tourism',
        'responsible travel',
        'eco-friendly tourism',
        'green tourism',
        'nature tourism',
        'wildlife tourism',
        'adventure tourism',
        'cultural tourism',
        'heritage tourism',
        'indigenous tourism',
        'community tourism',
        'local tourism',
        'authentic tourism',
        'traditional tourism',
        'tribal tourism',
        'african tourism',
        'east african tourism',
        'african adventure',
        'african wildlife',
        'african culture',
        'african heritage',
        'african tradition',
        'african experience',
        'african journey',
        'african safari',
        'african tour',
        'african holiday',
        'african vacation',
        'african trip',
        'african operator',
        'african company',
        'african agency',
        'african guide',
        'african expert',
        'dawnlight journeys',
      ],
      image: 'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/gorilla-trekking-guide_blog',
    },
    'top-5-uganda-safaris': {
      title: 'Top 5 Safari Experiences in Uganda',
      description: 'Uganda is a land of breathtaking wildlife and adventure. Explore our top 5 safari experiences, including chimpanzee tracking, boat safaris, and more.',
      keywords: [
        'uganda safari experiences',
        'uganda wildlife safari',
        'uganda chimpanzee tracking',
        'uganda gorilla trekking',
        'uganda boat safari',
        'uganda game drive',
        'uganda national park',
        'uganda wildlife tour',
        'uganda safari package',
        'uganda safari operator',
        'uganda safari company',
        'uganda safari agency',
        'uganda safari guide',
        'uganda safari expert',
        'uganda safari tour',
        'uganda safari adventure',
        'uganda safari experience',
        'uganda safari journey',
        'uganda safari trip',
        'uganda safari holiday',
        'uganda safari vacation',
        'uganda safari booking',
        'uganda safari planning',
        'uganda safari consultation',
        'uganda safari expert',
        'uganda safari travel',
        'uganda safari tourism',
        'uganda safari destination',
        'uganda safari location',
        'uganda safari site',
        'uganda safari place',
        'uganda safari area',
        'uganda safari region',
        'uganda safari zone',
        'uganda safari territory',
        'uganda safari country',
        'uganda safari nation',
        'uganda safari state',
        'uganda safari province',
        'uganda safari district',
        'uganda safari county',
        'uganda safari city',
        'uganda safari town',
        'uganda safari village',
        'uganda safari settlement',
        'uganda safari community',
        'uganda safari population',
        'uganda safari people',
        'uganda safari culture',
        'uganda safari tradition',
        'uganda safari heritage',
        'uganda safari history',
        'uganda safari background',
        'uganda safari context',
        'uganda safari environment',
        'uganda safari ecosystem',
        'uganda safari habitat',
        'uganda safari landscape',
        'uganda safari scenery',
        'uganda safari view',
        'uganda safari vista',
        'uganda safari panorama',
        'uganda safari outlook',
        'uganda safari perspective',
        'uganda safari angle',
        'uganda safari position',
        'uganda safari location',
        'uganda safari spot',
        'uganda safari site',
        'uganda safari place',
        'uganda safari area',
        'uganda safari region',
        'uganda safari zone',
        'uganda safari territory',
        'uganda safari country',
        'uganda safari nation',
        'uganda safari state',
        'uganda safari province',
        'uganda safari district',
        'uganda safari county',
        'uganda safari city',
        'uganda safari town',
        'uganda safari village',
        'uganda safari settlement',
        'uganda safari community',
        'uganda safari population',
        'uganda safari people',
        'uganda safari culture',
        'uganda safari tradition',
        'uganda safari heritage',
        'uganda safari history',
        'uganda safari background',
        'uganda safari context',
        'uganda safari environment',
        'uganda safari ecosystem',
        'uganda safari habitat',
        'uganda safari landscape',
        'uganda safari scenery',
        'uganda safari view',
        'uganda safari vista',
        'uganda safari panorama',
        'uganda safari outlook',
        'uganda safari perspective',
        'uganda safari angle',
        'uganda safari position',
        'safari',
        'uganda',
        'rwanda',
        'africa',
        'wildlife',
        'adventure',
        'travel',
        'tour',
        'nature',
        'conservation',
        'eco-tourism',
        'cultural tour',
        'wildlife photography',
        'bird watching',
        'mountain gorilla',
        'chimpanzee',
        'big five',
        'national park',
        'nature reserve',
        'wildlife sanctuary',
        'conservation area',
        'protected area',
        'biodiversity',
        'endangered species',
        'wildlife conservation',
        'sustainable tourism',
        'responsible travel',
        'eco-friendly tourism',
        'green tourism',
        'nature tourism',
        'wildlife tourism',
        'adventure tourism',
        'cultural tourism',
        'heritage tourism',
        'indigenous tourism',
        'community tourism',
        'local tourism',
        'authentic tourism',
        'traditional tourism',
        'tribal tourism',
        'african tourism',
        'east african tourism',
        'african adventure',
        'african wildlife',
        'african culture',
        'african heritage',
        'african tradition',
        'african experience',
        'african journey',
        'african safari',
        'african tour',
        'african holiday',
        'african vacation',
        'african trip',
        'african operator',
        'african company',
        'african agency',
        'african guide',
        'african expert',
        'dawnlight journeys',
      ],
      image: 'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/uganda-safari-experiences_blog',
    },
    'cultural-encounters-east-africa': {
      title: 'Cultural Encounters: Meeting the People of East Africa',
      description: "Go beyond the wildlife and discover the rich cultures, traditions, and hospitality of East Africa's diverse communities.",
      keywords: [
        'east africa cultural encounters',
        'east africa cultural tour',
        'east africa cultural experience',
        'east africa cultural immersion',
        'east africa cultural heritage',
        'east africa cultural tradition',
        'east africa cultural background',
        'east africa cultural history',
        'east africa cultural context',
        'east africa cultural environment',
        'east africa cultural ecosystem',
        'east africa cultural habitat',
        'east africa cultural landscape',
        'east africa cultural scenery',
        'east africa cultural view',
        'east africa cultural vista',
        'east africa cultural panorama',
        'east africa cultural outlook',
        'east africa cultural perspective',
        'east africa cultural angle',
        'east africa cultural position',
        'east africa cultural location',
        'east africa cultural spot',
        'east africa cultural site',
        'east africa cultural place',
        'east africa cultural area',
        'east africa cultural region',
        'east africa cultural zone',
        'east africa cultural territory',
        'east africa cultural country',
        'east africa cultural nation',
        'east africa cultural state',
        'east africa cultural province',
        'east africa cultural district',
        'east africa cultural county',
        'east africa cultural city',
        'east africa cultural town',
        'east africa cultural village',
        'east africa cultural settlement',
        'east africa cultural community',
        'east africa cultural population',
        'east africa cultural people',
        'east africa cultural culture',
        'east africa cultural tradition',
        'east africa cultural heritage',
        'east africa cultural history',
        'east africa cultural background',
        'east africa cultural context',
        'east africa cultural environment',
        'east africa cultural ecosystem',
        'east africa cultural habitat',
        'east africa cultural landscape',
        'east africa cultural scenery',
        'east africa cultural view',
        'east africa cultural vista',
        'east africa cultural panorama',
        'east africa cultural outlook',
        'east africa cultural perspective',
        'east africa cultural angle',
        'east africa cultural position',
        'safari',
        'uganda',
        'rwanda',
        'africa',
        'wildlife',
        'adventure',
        'travel',
        'tour',
        'nature',
        'conservation',
        'eco-tourism',
        'cultural tour',
        'wildlife photography',
        'bird watching',
        'mountain gorilla',
        'chimpanzee',
        'big five',
        'national park',
        'nature reserve',
        'wildlife sanctuary',
        'conservation area',
        'protected area',
        'biodiversity',
        'endangered species',
        'wildlife conservation',
        'sustainable tourism',
        'responsible travel',
        'eco-friendly tourism',
        'green tourism',
        'nature tourism',
        'wildlife tourism',
        'adventure tourism',
        'cultural tourism',
        'heritage tourism',
        'indigenous tourism',
        'community tourism',
        'local tourism',
        'authentic tourism',
        'traditional tourism',
        'tribal tourism',
        'african tourism',
        'east african tourism',
        'african adventure',
        'african wildlife',
        'african culture',
        'african heritage',
        'african tradition',
        'african experience',
        'african journey',
        'african safari',
        'african tour',
        'african holiday',
        'african vacation',
        'african trip',
        'african operator',
        'african company',
        'african agency',
        'african guide',
        'african expert',
        'dawnlight journeys',
      ],
      image: 'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/cultural-encounters_blog',
    },
  };

  const blogPost = blogPosts[slug as keyof typeof blogPosts];

  if (!blogPost) {
    return {
      title: 'Blog Post Not Found | Dawnlight Journeys',
      description: 'Blog post not found.',
    };
  }

  return {
    title: `${blogPost.title} | Dawnlight Journeys Blog`,
    description: blogPost.description,
    keywords: blogPost.keywords,
    openGraph: {
      title: `${blogPost.title} | Dawnlight Journeys Blog`,
      description: blogPost.description,
      images: [
        {
          url: blogPost.image,
          width: 1200,
          height: 630,
          alt: blogPost.title,
        },
      ],
      type: 'article',
      url: `https://dawnlightjourneysrwanda.com/blog/${slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${blogPost.title} | Dawnlight Journeys Blog`,
      description: blogPost.description,
      images: [blogPost.image],
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-snippet': -1,
        'max-image-preview': 'large',
        'max-video-preview': -1,
      },
    },
    alternates: {
      canonical: `https://dawnlightjourneysrwanda.com/blog/${slug}`,
    },
  };
}

export default function BlogSinglePage() {
  const images = safariPackages.flatMap((safari) => safari.images);

  // Function to get a random image from the images array
  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };

  return (
    <>
      <main className="min-h-screen bg-background">
        <meta name="robots" content="noindex" />
        {/* Article Container */}
        <article className="max-w-4xl mx-auto px-4 py-8">
          {/* Article Header */}
          <header className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              The Ultimate Guide to Gorilla Trekking in Rwanda
            </h1>
            <section className="flex items-center space-x-4 mb-8">
              <section className="flex items-center space-x-3">
                <figure className="w-12 h-12 bg-gray-300 rounded-full"></figure>
                <section>
                  <p className="font-medium text-gray-900">
                    By Dawnlight Journeys
                  </p>
                  <p className="text-sm text-gray-600">in Travel & Adventure</p>
                </section>
              </section>
            </section>
            <section className="flex items-center space-x-4 text-sm text-gray-500 mb-8">
              <time>Dec 15, 2024</time>
              <span>•</span>
              <span>10 min read</span>
              <span>•</span>
              <nav className="flex items-center space-x-2">
                <button className="flex items-center space-x-1 hover:text-gray-700">
                  <span>👏</span>
                  <span>0</span>
                </button>
                <button className="flex items-center space-x-1 hover:text-gray-700">
                  <span>💬</span>
                  <span>0</span>
                </button>
                <button className="flex items-center space-x-1 hover:text-gray-700">
                  <span>🔖</span>
                </button>
              </nav>
            </section>
          </header>

          {/* Hero Image */}
          <figure className="mb-12">
            <img
              src={getRandomImage()}
              alt="Gorilla Trekking Rwanda"
              className="w-full h-96 object-cover rounded-lg"
            />
          </figure>

          {/* Article Content */}
          <section className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Rwanda, the land of a thousand hills, offers one of the most
              unforgettable wildlife experiences on earth: gorilla trekking.
              Nestled in the lush Volcanoes National Park, this adventure brings
              you face-to-face with endangered mountain gorillas in their
              natural habitat.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              What is Gorilla Trekking?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Gorilla trekking is a guided hiking experience that takes you into
              the natural habitat of mountain gorillas. These gentle giants,
              which share 98% of their DNA with humans, are found only in the
              dense forests of Rwanda, Uganda, and the Democratic Republic of
              Congo.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Why Choose Rwanda for Gorilla Trekking?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Rwanda has emerged as the premier destination for gorilla
              trekking, offering unparalleled access to these magnificent
              creatures while maintaining strict conservation standards.
            </p>

            {/* Architecture Diagram Style Section */}
            <section className="bg-gray-50 p-8 rounded-lg my-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Traditional vs. Modern Approach
              </h3>
              <section className="grid md:grid-cols-2 gap-8">
                <article className="bg-white p-6 rounded-lg border">
                  <h4 className="font-bold text-gray-900 mb-3">
                    Traditional Safari
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center space-x-2">
                      <span className="w-3 h-3 bg-red-400 rounded-full"></span>
                      <span>Generic tour packages</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-3 h-3 bg-red-400 rounded-full"></span>
                      <span>Limited customization</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-3 h-3 bg-red-400 rounded-full"></span>
                      <span>One-size-fits-all approach</span>
                    </li>
                  </ul>
                </article>
                <article className="bg-white p-6 rounded-lg border">
                  <h4 className="font-bold text-gray-900 mb-3">
                    Dawnlight Journeys
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center space-x-2">
                      <span className="w-3 h-3 bg-green-400 rounded-full"></span>
                      <span>Personalized experiences</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-3 h-3 bg-green-400 rounded-full"></span>
                      <span>Expert local guides</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-3 h-3 bg-green-400 rounded-full"></span>
                      <span>Tailored to your needs</span>
                    </li>
                  </ul>
                </article>
              </section>
            </section>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              How to Get a Gorilla Trekking Permit
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Permits are required and should be booked well in advance, as only
              a limited number are issued each day. The Rwanda Development Board
              manages the process, and permits cost around $1,500 per person.
              This fee supports conservation and local communities.
            </p>

            <figure>
              <img
                src={getRandomImage()}
                alt="Mountain Gorillas in Rwanda"
                className="w-full rounded-lg shadow-md my-8"
              />
            </figure>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              What to Expect on the Trek
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Treks can last from 1 to 6 hours, depending on the gorillas'
              location. Expect to hike through dense forest and steep terrain.
              Once you find a gorilla family, you'll have one magical hour to
              observe and photograph them up close.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Packing Tips
            </h2>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-8">
              <li>Sturdy hiking boots with good ankle support</li>
              <li>
                Long-sleeved shirts and trousers to protect from stinging
                nettles
              </li>
              <li>Waterproof rain jacket (weather can change quickly)</li>
              <li>Gloves for handling vegetation</li>
              <li>Camera with extra batteries (no flash allowed)</li>
              <li>Small backpack with water and snacks</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Best Time to Visit
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The dry seasons (June–September and December–February) are ideal
              for trekking, offering the best trail conditions and visibility.
              However, gorilla trekking is available year-round, and each season
              offers unique experiences.
            </p>

            <figure>
              <img
                src={getRandomImage()}
                alt="Gorilla Trekking Experience"
                className="w-full rounded-lg shadow-md my-8"
              />
            </figure>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Why Choose Rwanda?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Rwanda is renowned for its safety, hospitality, and commitment to
              conservation. Beyond gorilla trekking, you can explore vibrant
              culture, stunning lakes, and other wildlife adventures. The
              country's dedication to sustainable tourism ensures that your
              visit contributes to conservation efforts.
            </p>

            {/* Summary Section */}
            <aside className="bg-blue-50 border border-blue-200 rounded-lg p-8 my-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Summary</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Gorilla trekking in Rwanda offers an unparalleled wildlife
                experience that combines adventure with conservation. With
                proper planning, the right gear, and expert guidance, you can
                enjoy one of the most memorable wildlife encounters on the
                planet.
              </p>
            </aside>
          </section>

          {/* Article Footer */}
          <footer className="mt-16 pt-8 border-t border-gray-200">
            <section className="flex items-center justify-between mb-8">
              <nav className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-50">
                  <span>👏</span>
                  <span>Clap</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-50">
                  <span>💬</span>
                  <span>Comment</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-50">
                  <span>🔖</span>
                  <span>Bookmark</span>
                </button>
              </nav>
              <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-50">
                <span>📤</span>
                <span>Share</span>
              </button>
            </section>

            <section className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-4">
                Plan Your Adventure
              </h3>
              <p className="text-gray-700 mb-4">
                Ready to experience the magic of gorilla trekking? Contact our
                expert team to start planning your unforgettable journey.
              </p>
              <CustomButton variant="primary" size="lg" href="/contact">
                Start Planning Your Trip
              </CustomButton>
            </section>
          </footer>
          <nav className="w-full flex justify-start items-center mt-5">
            <CustomButton variant="secondary" size="default" href="/blog">
              Back
            </CustomButton>
          </nav>
        </article>
      </main>
    </>
  );
}
