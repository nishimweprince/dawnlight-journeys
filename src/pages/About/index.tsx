import TimeLine from '../../components/TimeLine';
import Footer from '../../components/Footer';
import ConservationSection from './ConservationSection';
import NewsletterForm from '@/components/NewsLetter';
import { useEffect, useRef, useState,  } from 'react';
import Layout from '@/containers/layout/Layout';

const About = () => {
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
      <div className="min-h-screen bg-black">
        
      {/* Hero Section */}
      <section className="relative w-full h-[400px] bg-[#0A3531]">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            <div className="flex flex-col justify-center">
              <span className="text-[#E09D57] font-light tracking-wider text-sm mb-4">
                40 YEARS OF...
              </span>
              <h1 className="font-heading text-5xl md:text-6xl text-white mb-6">
                Our Story
              </h1>
            </div>
            
            <div className="text-white/80 text-sm leading-relaxed">
              <p>
                What started with a passionate pair of Botswana guides in 1983 is 
                now a world-leading conservation and hospitality company, 
                responsible for protecting and sharing over 5.6 million acres (2.3 
                million hectares) of dawnlight journey across our planet. We focus on 
                conservation, community development and making our own 
                operations more sustainable.
              </p>
            </div>
          </div>
        </div>
        
        {/* Optional: Add a subtle dark gradient overlay at the bottom for text readability */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#0A3531]/50 to-transparent"></div>
      </section>
      <TimeLine />
      <ConservationSection />
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
      </div>
    </Layout>
  );
};

export default About;
