import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import CountryInfoSlider from "@/components/CountryInfoSlider";
import ExperienceSlider from "@/components/ExperienceSlider";
import { experiences, purposeCategories } from "@/data/experiences";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import NewsletterForm from "@/components/NewsLetter";
import FeaturedStories from "@/components/FeaturedStories";

// Country data - this would typically come from an API
type CountryInfo = {
  title: string;
  subtitle: string;
  heroImage: string;
  description: string;
};

type CountryData = {
  [key: string]: CountryInfo;
};

const countryData: CountryData = {
  rwanda: {
    title: "Rwanda",
    subtitle: "DISCOVER AFRICA",
    heroImage:
      "https://images.unsplash.com/photo-1519659528534-7fd733a832a0?q=80&w=1920",
    description:
      "An increasingly rare dawnlight journey and a land of staggering beauty, Rwanda is home to half the world's mountain gorillas and a vast savannah teeming with iconic wildlife.",
  },
  botswana: {
    title: "Botswana",
    subtitle: "DISCOVER AFRICA",
    heroImage:
      "https://images.unsplash.com/photo-1469041797191-50ace28483c3?q=80&w=1920",
    description:
      "A pristine dawnlight journey of floodplains, deltas, and savannahs, Botswana offers some of Africa's most spectacular wildlife viewing in an untouched and carefully managed environment.",
  },
  namibia: {
    title: "Namibia",
    subtitle: "DISCOVER AFRICA",
    heroImage:
      "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=1920",
    description:
      "A land of stark beauty and dramatic contrasts, Namibia's desert landscapes, towering dunes, and unique wildlife offer one of Africa's most distinctive safari experiences.",
  },
  zambia: {
    title: "Zambia",
    subtitle: "DISCOVER AFRICA",
    heroImage:
      "https://images.unsplash.com/photo-1469041797191-50ace28483c3?q=80&w=1920",
    description:
      "The birthplace of the walking safari, Zambia offers authentic dawnlight journey experiences with exceptional guiding in some of Africa's most untouched national parks.",
  },
  // Default data for any other country ID
  default: {
    title: "African Safari",
    subtitle: "DISCOVER AFRICA",
    heroImage:
      "https://images.unsplash.com/photo-1469041797191-50ace28483c3?q=80&w=1920",
    description:
      "Experience the untamed beauty of Africa with our tailor-made safaris across the continent's most stunning dawnlight journey areas, from savannahs to rainforests.",
  },
};

const CountryDetail = () => {
  const { country } = useParams<{ country: string }>();
  const countryInfo =
    country && countryData[country.toLowerCase()]
      ? countryData[country.toLowerCase()]
      : countryData.default;

  // Filter experiences for the current country
  const countryExperiences = experiences.filter(exp => 
    exp.locations.some(loc => loc.toLowerCase() === countryInfo.title.toLowerCase())
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [country]);
  const wildRef = useRef(null);
  const [isWildVisible, setIsWildVisible] = useState(false);
  const readyRef = useRef(null);
  const [isReadyVisible, setIsReadyVisible] = useState(false);

  useEffect(() => {
  

    const wildObserver = new IntersectionObserver(
      ([entry]) => {
        setIsWildVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3,
      }
    );

    const readyObserver = new IntersectionObserver(
      ([entry]) => {
        setIsReadyVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3,
      }
    );



    if (wildRef.current) {
      wildObserver.observe(wildRef.current);
    }

    if (readyRef.current) {
      readyObserver.observe(readyRef.current);
    }

    return () => {
  
      if (wildRef.current) {
        wildObserver.unobserve(wildRef.current);
      }
      if (readyRef.current) {
        readyObserver.unobserve(readyRef.current);
      }
    };
  }, []);



  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="relative h-screen">
        <Navigation />
        <img
          src={countryInfo.heroImage}
          alt={countryInfo.title}
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col justify-end pb-32 px-8 md:px-16 lg:px-24">
          <div className="max-w-5xl">
            <p className="text-white tracking-widest mb-4">
              {countryInfo.subtitle}
            </p>
            <h1 className="font-heading text-6xl md:text-7xl lg:text-8xl text-white mb-6">
              {countryInfo.title}
            </h1>
            <div className="w-24 h-0.5 bg-white mb-8"></div>
            <p className="text-white text-lg md:text-xl max-w-2xl">
              {countryInfo.description}
            </p>
          </div>
        </div>
      </div>

      <CountryInfoSlider />

      {/* FAQ Section */}
      <section className="py-32 px-6 lg:px-0 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <h2 className="text-[#9B9B9B] tracking-[0.2em] uppercase mb-6 text-lg">FAQ</h2>
            <h3 className="font-heading text-6xl lg:text-8xl text-[#0A3531]">General</h3>
          </div>
          
          <div className="max-w-4xl">
            <Accordion type="single" collapsible className="space-y-12">
              <AccordionItem value="item-1" className="border-b border-gray-200 pb-6">
                <AccordionTrigger className="text-3xl font-heading text-[#0A3531] hover:no-underline [&[data-state=open]>svg]:rotate-180">
                  What is the best time to visit {countryInfo.title}?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-lg mt-6">
                  The best time to visit {countryInfo.title} is during the dry season (June to September) when wildlife viewing is at its peak. However, each season offers unique experiences and photographic opportunities.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-b border-gray-200 pb-6">
                <AccordionTrigger className="text-3xl font-heading text-[#0A3531] hover:no-underline [&[data-state=open]>svg]:rotate-180">
                  How long should I stay in {countryInfo.title}?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-lg mt-6">
                  We recommend a minimum of 7-10 days to fully experience {countryInfo.title}'s highlights. This allows time for wildlife viewing, cultural experiences, and relaxation between activities.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-b border-gray-200 pb-6">
                <AccordionTrigger className="text-3xl font-heading text-[#0A3531] hover:no-underline [&[data-state=open]>svg]:rotate-180">
                  What type of accommodation is available?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-lg mt-6">
                  {countryInfo.title} offers a range of accommodations from luxury lodges to tented camps, each chosen for their location, comfort, and commitment to sustainable tourism.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Experience Slider Section */}
      <ExperienceSlider 
        experiences={countryExperiences}
        purposeCategories={purposeCategories}
        showPurposeSection={false}
        title={`Experience ${countryInfo.title}`}
        subtitle="AVAILABLE EXPERIENCES"
        description={`Discover the unique experiences that await you in ${countryInfo.title}. From wildlife encounters to cultural immersions, each experience is carefully curated to showcase the best of this remarkable destination.`}
        ctaText="VIEW ALL EXPERIENCES"
        ctaLink={`/experiences?country=${countryInfo.title.toLowerCase()}`}
      />

      <section className="relative min-h-screen bg-[#0A3531] py-24 px-6 lg:px-0">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-up">
            <p className="text-[#9B9B9B] tracking-[0.2em] uppercase">
              We are Dawnlight journey
            </p>

            <h2 className="font-heading text-5xl lg:text-7xl leading-tight">
              Discover Earth's ultimate, untamed places
            </h2>

            <div className="space-y-6 text-gray-300">
              <p className="text-lg leading-relaxed">
                As the world's leading conservation and hospitality company, we
                are the proud custodians of our planet's most significant wild
                places, each chosen to be part of our Collection for a specific
                purpose and all linked to protecting the land and life that
                exists there.
              </p>

              <p className="text-lg leading-relaxed">
                Our destinations are vast, remote and untamed, and represent
                true Dawnlight journey. With access to over 6 million acres of
                private land, we offer intimate wildlife encounters and
                experiences that will leave you changed forever.
              </p>
            </div>
          </div>

          <div className="relative h-[600px] w-full animate-fade-in">
            <img
              src="https://images.unsplash.com/photo-1493962853295-0fd70327578a"
              alt="Cheetah in natural habitat"
              className="object-cover w-full h-full"
            />
            <span className="absolute -left-12 bottom-0 transform -rotate-90 text-xs tracking-[0.3em] text-gray-400">
              #WEREDawnlight journey
            </span>
          </div>
        </div>
        <section className="relative py-32 bg-[#0A3531]">
          <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8 px-6">
            <div className="col-span-7 relative">
              <div className="absolute top-0 right-0 w-[500px] h-[400px]">
                <img
                  src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51"
                  alt="People planting trees"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 right-[200px] w-[400px] h-[300px]">
                <img
                  src="https://images.unsplash.com/photo-1594708767771-a7502209ff51"
                  alt="Community engagement"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="col-span-5">
              <h2 className="font-heading text-5xl lg:text-6xl mb-8">
                Journey to the Land of a Thousand Hills
              </h2>

              <p className="text-white/80 text-lg leading-relaxed mb-12">
                Easily traversed, Rwanda is one of Africa's most thrilling
                destinations – promising unique wildlife encounters, stunning
                landscapes, and warm, proud people. A land of astonishing
                beauty, Rwanda has risen phoenix-like from its troubled history.
                Today the tiny country of nearly 13 million people is Africa's
                economic poster child, a model of reconciliation, regeneration
                and sustainability.
              </p>

              <a
                href="/impact"
                className="inline-flex items-center space-x-2 group"
              >
                <div className="w-12 h-12 rounded-full border-2 border-[#FF5C28] flex items-center justify-center group-hover:bg-[#FF5C28] transition-colors duration-300">
                  <ArrowRight className="w-6 h-6 text-[#FF5C28] group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-[#FF5C28] uppercase tracking-wider text-sm font-medium">
                  READ ABOUT OUR IMPACT
                </span>
              </a>
            </div>
          </div>
        </section>
      </section>

      {/* Featured Stories Section */}
      <FeaturedStories
        stories={[
          {
            image: "https://images.unsplash.com/photo-1519659528534-7fd733a832a0",
            imageAlt: "Safari camp construction",
            title: "How we build our safari camps",
            description: "Learn about our sustainable approach to building safari camps in remote African locations.",
            link: "#"
          },
          {
            image: "https://images.unsplash.com/photo-1584486379634-d6cfb4e50db3",
            imageAlt: "Mountain gorilla",
            title: "Observations of a gorilla trek",
            description: "Experience the magical moments of encountering mountain gorillas in their natural habitat.",
            link: "#",
            aspectRatio: "3/4"
          },
          {
            image: "https://images.unsplash.com/photo-1516426122078-c23e76319801",
            imageAlt: "Evening gathering",
            title: "dawnlight journey newsletter – December 2024",
            description: "Stay updated with our latest conservation efforts and dawnlight journey experiences.",
            link: "#"
          }
        ]}
        title={`Featured stories from ${countryInfo.title}`}
      />

      <section
        ref={wildRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div
          className={`absolute inset-0 bg-cover bg-center transition-all duration-1000`}
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1469041797191-50ace28483c3')",
            transform: isWildVisible ? "scale(1)" : "scale(1.1)",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, 
              rgba(0,0,0,0.3) 0%,
              rgba(0,0,0,0.5) 50%,
              rgba(0,0,0,0.7) 100%
            )`,
            opacity: isWildVisible ? 1 : 0,
            transition: "opacity 1000ms ease-in-out",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div
            className={`transition-all duration-1000 transform ${
              isWildVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-lg tracking-widest mb-4">
              TWO BRANDS. ONE PURPOSE.
            </p>

            <h2 className="font-heading text-5xl md:text-7xl mb-8">
              It's wild out
              <br />
              there. Go
              <br />
              prepared.
            </h2>

            <p className="text-lg leading-relaxed mb-12 max-w-3xl mx-auto">
              To celebrate the planet and its people with a range of gear
              inspired by nature and made from waste. Dawnlight journey & Sealand. From
              surf to safari. From mountains to marsh lands. The urban
              Dawnlight journey just got more conscious. Gear up with this limited
              edition collection available in a variety of sizes and three
              distinct colour ways to suit every kind of wild.
            </p>

            <button className="bg-[#FF5C28] hover:bg-[#FF5C28]/90 px-8 py-6 text-white uppercase tracking-wider text-sm font-medium">
              GEAR UP
            </button>
          </div>
        </div>
      </section>
      <section 
        ref={readyRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div 
          className={`absolute inset-0 bg-cover bg-center transition-all duration-1000`}
          style={{ 
            backgroundImage: "url('/lovable-uploads/794e38bd-892f-466c-9232-e40253ba7595.png')",
            transform: isReadyVisible ? 'scale(1)' : 'scale(1.1)'
          }}
        />
        
        <div className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, 
              rgba(0,0,0,0.5) 0%,
              rgba(0,0,0,0.6) 50%,
              rgba(0,0,0,0.7) 100%
            )`,
            opacity: isReadyVisible ? 1 : 0,
            transition: 'opacity 1000ms ease-in-out'
          }}
        />
        
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <div className={`transition-all duration-1000 transform ${
            isReadyVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}>
            <p className="text-[#CCCCCC] tracking-[0.25em] uppercase text-sm mb-10">
              LET'S PLAN YOUR NEXT JOURNEY
            </p>
            
            <h2 className="font-heading text-7xl md:text-9xl mb-12 tracking-wider">
              READY?
            </h2>
            
            <p className="text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
              When we say we're there every step of the way, we mean it, literally. From planning the perfect circuit, to private inter-camp transfers on Dawnlight journey Air, and easing you through Customs. We're with you on the ground, at your side, 24-7, from start to finish. Ready to take the road less travelled? Contact our Travel Designers to plan an unforgettable journey.
            </p>

            <button className="bg-[#FF5C28] hover:bg-[#FF5C28]/90 px-8 py-6 text-white uppercase tracking-wider text-sm font-medium">
              ENQUIRE NOW
            </button>
          </div>
        </div>
      </section>
      <div className="relative">
        <div className="absolute left-0 right-0 top-[-150px] z-10 flex justify-center">
          <NewsletterForm />
        </div>
        
        <Footer />
      </div>
    </div>
  );
};

export default CountryDetail;
