import { useParams } from "react-router-dom";
import CountryInfoSlider from "@/components/CountryInfoSlider";
import Footer from "@/components/Footer";
import ExperienceSlider from "@/components/ExperienceSlider";
import TravelExperiences from "@/components/TravelExperiences";
import { experiences, purposeCategories } from "@/data/experiences";
import { akageraExperiences } from "@/data/travelExperiences";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FeaturedStories from "@/components/FeaturedStories";
import NewsletterForm from "@/components/NewsLetter";
import { useRef, useState } from "react";
import { useEffect } from "react";
import Layout from "@/containers/layout/Layout";

// Region data type definition
type RegionInfo = {
  title: string;
  subtitle: string;
  heroImage: string;
  description: string;
};

type RegionData = {
  [key: string]: RegionInfo;
};

// Region data - this would typically come from an API
const regionData: RegionData = {
  east_africa: {
    title: "East Africa",
    subtitle: "DISCOVER AFRICA",
    heroImage:
      "https://images.unsplash.com/photo-1519659528534-7fd733a832a0?q=80&w=1920",
    description:
      "A region of diverse landscapes, from the Serengeti plains to the snow-capped peaks of Kilimanjaro, East Africa offers some of the continent's most iconic safari experiences.",
  },
  southern_africa: {
    title: "Southern Africa",
    subtitle: "DISCOVER AFRICA",
    heroImage:
      "https://images.unsplash.com/photo-1469041797191-50ace28483c3?q=80&w=1920",
    description:
      "Home to the Okavango Delta, Victoria Falls, and the Namib Desert, Southern Africa boasts some of Africa's most spectacular natural wonders and wildlife viewing opportunities.",
  },
  central_africa: {
    title: "Central Africa",
    subtitle: "DISCOVER AFRICA",
    heroImage:
      "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=1920",
    description:
      "A region of dense rainforests and unique wildlife, Central Africa is home to the world's second-largest rainforest and offers extraordinary gorilla trekking experiences.",
  },
  akagera_national_park: {
    title: "Akagera National Park",
    subtitle: "DISCOVER RWANDA",
    heroImage:
      "https://images.unsplash.com/photo-1519659528534-7fd733a832a0?q=80&w=1920",
    description:
      "A stunning savannah landscape in Rwanda's east, Akagera National Park is a conservation success story. Home to the Big Five and diverse birdlife, this park features rolling hills, lakes, and wetlands along the Akagera River.",
  },
  // Default data for any other region ID
  default: {
    title: "African Safari",
    subtitle: "DISCOVER AFRICA",
    heroImage:
      "https://images.unsplash.com/photo-1469041797191-50ace28483c3?q=80&w=1920",
    description:
      "Experience the untamed beauty of Africa with our tailor-made safaris across the continent's most stunning dawnlight journey areas, from savannahs to rainforests.",
  },
};

// Region-specific FAQ content
const regionFAQContent: { [key: string]: string } = {
  east_africa: `East Africa is renowned for its incredible wildlife viewing opportunities and diverse landscapes. The best time to visit is during the dry seasons (June to October and January to February) when wildlife congregates around water sources. You'll need essential vaccinations including Yellow Fever, and we recommend consulting with a travel health specialist before your trip. The region offers various accommodation options from luxury lodges to tented camps, each providing unique experiences of the African dawnlight journey.`,

  southern_africa: `Southern Africa offers diverse experiences from the Okavango Delta to Victoria Falls. The dry winter season (May to October) is ideal for safaris, while summer brings lush landscapes and excellent bird watching. The region features world-class accommodations ranging from luxury lodges to mobile camping experiences. Each destination has specific visa requirements, and we'll guide you through the necessary preparations for your journey.`,

  central_africa: `Central Africa is home to extraordinary wildlife experiences, particularly gorilla trekking. The best times to visit are during the dry seasons (June to September and December to February). Gorilla permits should be secured well in advance. The region offers unique accommodations from luxury lodges to eco-friendly camps. We provide comprehensive guidance on physical preparation and necessary equipment for your adventure.`,

  akagera_national_park: `Akagera National Park is best visited during the dry season (June to August) for optimal wildlife viewing. The park offers various activities including game drives, boat safaris, and bird watching. Accommodation options range from luxury lodges to tented camps, all providing excellent views of the park's diverse landscapes. We recommend a 2-3 day stay to fully experience the park's offerings and increase chances of spotting the Big Five.`,

  default: `Africa offers incredible safari experiences across its diverse regions. The best time to visit depends on your chosen destination and interests. We provide comprehensive pre-trip guidance, including vaccination requirements and visa assistance. Our accommodations range from luxury lodges to tented camps, each chosen for their location and commitment to sustainable tourism. Your safety and comfort are our top priorities throughout your African adventure.`,
};

function RegionDetails() {
  const { region } = useParams<{ region: string }>();
  const regionInfo =
    region && regionData[region.toLowerCase()]
      ? regionData[region.toLowerCase()]
      : regionData.default;

  const faqContent =
    region && regionFAQContent[region.toLowerCase()]
      ? regionFAQContent[region.toLowerCase()]
      : regionFAQContent.default;

  const readyRef = useRef(null);
  const [isReadyVisible, setIsReadyVisible] = useState(false);

  useEffect(() => {
    const readyObserver = new IntersectionObserver(
      ([entry]) => {
        setIsReadyVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3,
      }
    );

    if (readyRef.current) {
      readyObserver.observe(readyRef.current);
    }

    return () => {
      if (readyRef.current) {
        readyObserver.unobserve(readyRef.current);
      }
    };
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative h-screen">
        <img
          src={regionInfo.heroImage}
          alt={regionInfo.title}
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col justify-end pb-32 px-8 md:px-16 lg:px-24">
          <div className="max-w-5xl">
            <p className="text-white tracking-widest mb-4">
              {regionInfo.subtitle}
            </p>
            <h1 className="font-heading text-6xl md:text-7xl lg:text-8xl text-white mb-6">
              {regionInfo.title}
            </h1>
            <div className="w-24 h-0.5 bg-white mb-8"></div>
            <p className="text-white text-lg md:text-xl max-w-2xl">
              {regionInfo.description}
            </p>
          </div>
        </div>
      </div>


      <section className="relative py-24 bg-[#0A3531] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-12 gap-12">
            {/* Text content positioned on the left */}
            <div className="col-span-5">
              <h2 className="font-heading text-5xl lg:text-6xl text-white mb-8">
                Akagera National Park
              </h2>
              <p className="text-white/80 text-lg leading-relaxed">
                Wake up to a soundtrack of birdsong and wildlife, and feel the
                pulsing beat of this iconic Rwandan region. Go in search of
                Akagera's exceptional animals: lions, rhinos, leopards, hippos
                and elephants are just some of the species that call the park
                home. All yours to discover from Magashi, our luxurious safari
                camp situated on the shore of Lake Rwanyakazinga.
              </p>
            </div>
            {/* Images positioned on the right */}
            <div className="col-span-7 relative h-[600px]">
              {/* Main large image - Safari tent by the lake */}
              <div className="absolute right-0 w-full h-[400px]">
                <img
                  src="https://images.unsplash.com/photo-1516426122078-c23e76319801"
                  alt="Luxury safari camp at Lake Rwanyakazinga"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Overlapping lion image positioned on the right */}
              <div className="absolute bottom-0 right-[-100px] w-[350px] h-[300px]">
                <img
                  src="https://images.unsplash.com/photo-1549366021-9f761d450615"
                  alt="Lion in Akagera"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}


      <CountryInfoSlider />
      <ExperienceSlider
        experiences={experiences}
        purposeCategories={purposeCategories}
        showPurposeSection={false}
      />

      <TravelExperiences {...akageraExperiences} />
      <section className="py-32 px-6 lg:px-0 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <h2 className="text-[#9B9B9B] tracking-[0.2em] uppercase mb-6 text-lg">
              FAQ
            </h2>
          </div>

          <div className="max-w-4xl">
            <Accordion type="single" collapsible className="space-y-12">
              <AccordionItem
                value="general"
                className="border-b border-gray-200 pb-6"
              >
                <AccordionTrigger className="text-3xl font-heading text-[#0A3531] hover:no-underline [&[data-state=open]>svg]:rotate-180">
                  General
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-lg mt-6">
                  {faqContent}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
      <FeaturedStories
        stories={[
          {
            image:
              "https://images.unsplash.com/photo-1519659528534-7fd733a832a0",
            imageAlt: "Safari camp construction",
            title: "How we build our safari camps",
            description:
              "Learn about our sustainable approach to building safari camps in remote African locations.",
            link: "#",
          },
          {
            image:
              "https://images.unsplash.com/photo-1584486379634-d6cfb4e50db3",
            imageAlt: "Mountain gorilla",
            title: "Observations of a gorilla trek",
            description:
              "Experience the magical moments of encountering mountain gorillas in their natural habitat.",
            link: "#",
            aspectRatio: "3/4",
          },
          {
            image:
              "https://images.unsplash.com/photo-1516426122078-c23e76319801",
            imageAlt: "Evening gathering",
            title: "dawnlight journey newsletter – December 2024",
            description:
              "Stay updated with our latest conservation efforts and dawnlight journey experiences.",
            link: "#",
          },
        ]}
        title={`Featured stories from ${regionInfo.title}`}
      />
      <section
        ref={readyRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div
          className={`absolute inset-0 bg-cover bg-center transition-all duration-1000`}
          style={{
            backgroundImage:
              "url('/lovable-uploads/794e38bd-892f-466c-9232-e40253ba7595.png')",
            transform: isReadyVisible ? "scale(1)" : "scale(1.1)",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, 
              rgba(0,0,0,0.5) 0%,
              rgba(0,0,0,0.6) 50%,
              rgba(0,0,0,0.7) 100%
            )`,
            opacity: isReadyVisible ? 1 : 0,
            transition: "opacity 1000ms ease-in-out",
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <div
            className={`transition-all duration-1000 transform ${
              isReadyVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-[#CCCCCC] tracking-[0.25em] uppercase text-sm mb-10">
              LET'S PLAN YOUR NEXT JOURNEY
            </p>

            <h2 className="font-heading text-7xl md:text-9xl mb-12 tracking-wider">
              READY?
            </h2>

            <p className="text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
              When we say we're there every step of the way, we mean it,
              literally. From planning the perfect circuit, to private
              inter-camp transfers on Dawnlight journey Air, and easing you
              through Customs. We're with you on the ground, at your side, 24-7,
              from start to finish. Ready to take the road less travelled?
              Contact our Travel Designers to plan an unforgettable journey.
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
    </Layout>
  );
}

export default RegionDetails;
