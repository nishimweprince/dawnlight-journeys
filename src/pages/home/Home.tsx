import React, { useEffect, useRef, useState } from "react";
import Navigation from "@/components/Navigation";
import { ArrowRight, Link } from "lucide-react";
import DestinationSlider from "@/components/DestinationSlider";
import ExperienceSlider from "@/components/ExperienceSlider";
import Footer from "@/components/Footer";
import NewsletterForm from "@/components/NewsLetter";
import { experiences, purposeCategories } from "@/data/experiences";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isWildVisible, setIsWildVisible] = useState(false);
  const [isReadyVisible, setIsReadyVisible] = useState(false);
  const journeyRef = useRef(null);
  const wildRef = useRef(null);
  const readyRef = useRef(null);

  useEffect(() => {
    const journeyObserver = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3,
      }
    );

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

    if (journeyRef.current) {
      journeyObserver.observe(journeyRef.current);
    }

    if (wildRef.current) {
      wildObserver.observe(wildRef.current);
    }

    if (readyRef.current) {
      readyObserver.observe(readyRef.current);
    }

    return () => {
      if ((journeyRef as unknown as React.RefObject<HTMLElement>).current) {
        journeyObserver.unobserve(
          (journeyRef as unknown as React.RefObject<HTMLElement>).current
        );
      }
      if ((wildRef as unknown as React.RefObject<HTMLElement>).current) {
        wildObserver.unobserve(
          (wildRef as unknown as React.RefObject<HTMLElement>).current
        );
      }
      if ((readyRef as unknown as React.RefObject<HTMLElement>).current) {
        readyObserver.unobserve(
          (readyRef as unknown as React.RefObject<HTMLElement>).current
        );
      }
    };
  }, []);

  return (
    <main className="min-h-screen bg-primary text-white">
      <Navigation />

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center">
        <figure
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1469041797191-50ace28483c3')",
            backgroundPosition: 'center',
            filter: 'brightness(0.7)',
          }}
        />

        <label className="relative z-10 text-center px-4 animate-fade-up">
          <p className="text-lg mb-4 tracking-widest">WELCOME TO</p>
          <h1 className="font-heading text-6xl md:text-8xl mb-8">
            Dawnlight journey
          </h1>
          <Link
            to="/destinations"
            className="inline-flex items-center space-x-2 text-lg hover:text-accent transition-colors"
          >
            <span>Explore Our Destinations</span>
            <ArrowRight size={20} />
          </Link>
        </label>

        <address className="absolute bottom-12 left-12 text-sm tracking-wider">
          19.2228° S, 22.7999° E
        </address>
      </header>

      <section className="relative min-h-screen bg-[#0A3531] py-24 px-6 lg:px-0">
        <article className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <article className="space-y-8 animate-fade-up">
            <p className="text-[#9B9B9B] tracking-[0.2em] uppercase">
              We are Dawnlight journey
            </p>

            <h2 className="font-heading text-5xl lg:text-7xl leading-tight">
              Discover Earth's ultimate, untamed places
            </h2>

            <article className="space-y-6 text-gray-300">
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
            </article>
          </article>

          <figure className="relative h-[600px] w-full animate-fade-in">
            <img
              src="https://images.unsplash.com/photo-1493962853295-0fd70327578a"
              alt="Cheetah in natural habitat"
              className="object-cover w-full h-full"
            />
            <span className="absolute -left-12 bottom-0 transform -rotate-90 text-xs tracking-[0.3em] text-gray-400">
              #WEREDawnlight journey
            </span>
          </figure>
        </article>
      </section>
      <DestinationSlider />

      <section
        ref={journeyRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <figure
          className={`absolute inset-0 bg-cover bg-center transition-all duration-1000`}
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1465379944081-7f47de8d74ac')",
            transform: isVisible ? 'scale(1)' : 'scale(1.1)',
          }}
        />

        <figure
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, 
              rgba(0,0,0,0.3) 0%,
              rgba(0,0,0,0.5) 50%,
              rgba(0,0,0,0.7) 100%
            )`,
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 1000ms ease-in-out',
          }}
        />

        <article className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <article
            className={`transition-all duration-1000 transform ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <p className="text-lg tracking-widest mb-4">
              OUR CUSTOM-DESIGNED JOURNEYS
            </p>

            <h2 className="font-heading text-5xl md:text-7xl mb-8">
              Tailor-made itineraries for every traveller
            </h2>

            <p className="text-lg leading-relaxed mb-12 max-w-3xl mx-auto">
              We're excited to take you on a journey to experience sights and
              sounds found nowhere else on Earth. Unique scenery, wildlife, and
              cultures are waiting to be revealed, and we at Dawnlight journey
              can't wait to share them with you. Our custom-designed journeys
              are intended to inspire but can be tailor-made to suit your every
              need. It's time to let your safari dreams run wild.
            </p>

            <Link
              to="/journeys"
              className="inline-flex items-center space-x-2 bg-accent hover:bg-accent/90 px-6 py-3 text-white uppercase tracking-wider text-sm font-medium group"
            >
              <span>EXPLORE OUR JOURNEYS</span>
              <ArrowRight
                size={20}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </article>
        </article>
      </section>
      <ExperienceSlider experiences={experiences} purposeCategories={purposeCategories} />
      <section className="relative py-32 bg-[#0A3531]">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8 px-6">
          <div className="col-span-5">
            <h2 className="font-heading text-5xl lg:text-6xl mb-8">
              Our impact ethos
            </h2>

            <p className="text-white/80 text-lg leading-relaxed mb-12">
              Our journeys change lives. Not just yours but also those of our
              staff, communities, and the ecosystems we impact. We restore
              Dawnlight journey through low-volume high-value conservation tourism. Our
              purpose is a shared one. To ensure upliftment of local communities
              with help from guests, partners, donors, governments, and
              researchers. Our ambitions are bold. Our model is responsible,
              sustainable, inspiring.
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
        </div>
      </section>
      <section
        ref={wildRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <figure
          className={`absolute inset-0 bg-cover bg-center transition-all duration-1000`}
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1469041797191-50ace28483c3')",
            transform: isWildVisible ? 'scale(1)' : 'scale(1.1)',
          }}
        />

        <figure
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, 
              rgba(0,0,0,0.3) 0%,
              rgba(0,0,0,0.5) 50%,
              rgba(0,0,0,0.7) 100%
            )`,
            opacity: isWildVisible ? 1 : 0,
            transition: 'opacity 1000ms ease-in-out',
          }}
        />

        <article className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <article
            className={`transition-all duration-1000 transform ${
              isWildVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
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
              inspired by nature and made from waste. Dawnlight journey &
              Sealand. From surf to safari. From mountains to marsh lands. The
              urban Dawnlight journey just got more conscious. Gear up with this
              limited edition collection available in a variety of sizes and
              three distinct colour ways to suit every kind of wild.
            </p>

            <Link
              to="/gear"
              className="bg-[#FF5C28] hover:bg-[#FF5C28]/90 px-8 py-6 text-white uppercase tracking-wider text-sm font-medium"
            >
              GEAR UP
            </Link>
          </article>
        </article>
      </section>
      <section
        ref={readyRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <figure
          className={`absolute inset-0 bg-cover bg-center transition-all duration-1000`}
          style={{
            backgroundImage:
              "url('/lovable-uploads/794e38bd-892f-466c-9232-e40253ba7595.png')",
            transform: isReadyVisible ? 'scale(1)' : 'scale(1.1)',
          }}
        />

        <figure
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, 
              rgba(0,0,0,0.5) 0%,
              rgba(0,0,0,0.6) 50%,
              rgba(0,0,0,0.7) 100%
            )`,
            opacity: isReadyVisible ? 1 : 0,
            transition: 'opacity 1000ms ease-in-out',
          }}
        />

        <article className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <article
            className={`transition-all duration-1000 transform ${
              isReadyVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
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

            <Link
              to="/contact"
              className="bg-[#FF5C28] hover:bg-[#FF5C28]/90 px-8 py-6 text-white uppercase tracking-wider text-sm font-medium"
            >
              ENQUIRE NOW
            </Link>
          </article>
        </article>
      </section>

      <div className="relative">
        <div className="absolute left-0 right-0 top-[-150px] z-10 flex justify-center">
          <NewsletterForm />
        </div>

        <article className="pt-120">
          <Footer />
        </article>
      </div>
    </main>
  );
};

export default Index;
