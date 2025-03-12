import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const experiences = [
  {
    id: 1,
    title: "Stargazing",
    description: "Lie on a blanket, behold the beauty of your surrounds, and contemplate space and your place in it when you go stargazing.",
    image: "https://images.unsplash.com/photo-1608178398319-48f814d0750c",
    locations: ["Botswana", "Namibia", "Tanzania", "Zimbabwe"]
  },
  {
    id: 2,
    title: "Wildlife Photography",
    description: "Capture extraordinary moments in the wild, from big cats on the hunt to birds in flight, guided by expert wildlife photographers.",
    image: "https://images.unsplash.com/photo-1547970979-5a1670695357",
    locations: ["South Africa", "Kenya", "Botswana"]
  },
  {
    id: 3,
    title: "Hot Air Ballooning",
    description: "Drift silently above vast plains and watch wildlife from a unique perspective as the golden morning light bathes the landscape.",
    image: "https://images.unsplash.com/photo-1453872302360-eed3c5f8ff66",
    locations: ["Kenya", "Tanzania", "Namibia"]
  },
  {
    id: 4,
    title: "Cultural Encounters",
    description: "Connect with local communities, learn about ancient traditions, and participate in authentic cultural experiences and ceremonies.",
    image: "https://images.unsplash.com/photo-1516657362083-6f63398c2f8b",
    locations: ["Rwanda", "Zambia", "Zimbabwe", "Kenya"]
  },
  {
    id: 5,
    title: "Canoeing Expeditions",
    description: "Paddle through tranquil waterways, coming face-to-face with hippos, elephants and other wildlife in their natural habitat.",
    image: "https://images.unsplash.com/photo-1544551763-92ab472cad5d",
    locations: ["Zambia", "Botswana", "Zimbabwe"]
  }
];

const purposeCategories = [
  {
    id: 1,
    title: "DESTINATIONS",
    description: "Our accommodation is both luxurious and authentic. We promise unrivalled comfort and exclusivity while staying true to the vibrant soul and spirit of each, unique destination.",
    heading: "Iconic wild destinations",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    cta: "Explore Destinations",
    link: "/destinations"
  },
  {
    id: 2,
    title: "WILDLIFE",
    description: "Our camps and lodges are located in prime wildlife areas, offering exceptional game viewing opportunities. From the Big Five in Southern Africa to the Great Migration in East Africa.",
    heading: "Extraordinary wildlife",
    image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d",
    cta: "Discover Wildlife",
    link: "/wildlife"
  },
  {
    id: 3,
    title: "GUIDES",
    description: "Our expert guides have unrivaled knowledge of the Dawnlight journey areas where we operate, ensuring you have the most enriching and educational safari experience possible.",
    heading: "Experienced safari guides",
    image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3",
    cta: "Meet Our Guides",
    link: "/guides"
  },
  {
    id: 4,
    title: "ARCHITECTURE",
    description: "Each of our camps and lodges is designed to blend seamlessly with its natural surroundings, using sustainable materials and practices to minimize environmental impact.",
    heading: "Sustainable luxury",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    cta: "View Our Architecture",
    link: "/architecture"
  },
  {
    id: 5,
    title: "CULTURE",
    description: "Immerse yourself in local cultures and traditions, learning from communities that have lived in harmony with nature for generations. Our cultural experiences provide authentic insights.",
    heading: "Cultural immersion",
    image: "https://images.unsplash.com/photo-1590845947670-c009801ffa74",
    cta: "Explore Cultures",
    link: "/culture"
  },
  {
    id: 6,
    title: "TRAVEL",
    description: "Our seamless travel arrangements ensure you enjoy a stress-free safari experience from start to finish, with private transfers, charter flights, and personalized itineraries.",
    heading: "Seamless travel experience",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828",
    cta: "Plan Your Journey",
    link: "/travel"
  },
  {
    id: 7,
    title: "IMPACT",
    description: "By choosing Dawnlight journey, you're directly contributing to conservation efforts and community development projects across Africa, leaving a positive footprint on the places you visit.",
    heading: "Conservation in action",
    image: "https://images.unsplash.com/photo-1513197684433-c3356682cf95",
    cta: "Learn About Our Impact",
    link: "/impact"
  }
];

const ExperienceSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeCategoryId, setActiveCategoryId] = useState(1);
  const totalSlides = experiences.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const prevIndex = currentSlide === 0 ? totalSlides - 1 : currentSlide - 1;
  const nextIndex = currentSlide === totalSlides - 1 ? 0 : currentSlide + 1;

  const activeCategory = purposeCategories.find(cat => cat.id === activeCategoryId) || purposeCategories[0];

  return (
    <>
      <section className="relative bg-black text-white py-12 overflow-hidden">
        <div className="max-w-[1200px] mx-auto mb-12 px-8">
          <p className="text-[#FF5C28]/90 uppercase tracking-widest text-sm mb-3">OUR EXPERIENCES</p>
          
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="md:w-[55%]">
              <h2 className="font-heading text-5xl md:text-6xl mb-6">
                Experience real, raw nature
              </h2>
              
              <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-xl">
                Travelling is about more than the places you visit and the things you'll see. 
                It's about people, culture, wildlife, history, and experiencing something 
                you've never done before. With Dawnlight journey you'll walk, boat, barge, float, fly, 
                drive, ride, trek, track and discover a world of adventures.
              </p>
            </div>
            
            <div className="flex items-center mt-8 md:mt-0">
              <Button 
                variant="outline"
                className="rounded-full border-[#FF5C28] text-[#FF5C28] hover:bg-[#FF5C28] hover:text-white group"
                size="lg"
              >
                <span>EXPLORE ALL EXPERIENCES</span>
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="max-w-[1200px] mx-auto px-8">
          <Separator className="bg-white/20 mb-12" />
        </div>
        
        <div className="relative w-full max-w-[100vw]">
          <div className="mx-auto w-[65%] relative">
            <div className="absolute left-[-50%] top-1/2 -translate-y-1/2 w-[35%] h-[500px] opacity-70 overflow-visible">
              <div className="w-[500px] h-[500px] overflow-hidden rounded-full border-8 border-black/80">
                <img 
                  src={experiences[prevIndex].image} 
                  alt={`Preview of ${experiences[prevIndex].title}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="absolute right-[-35%] top-1/2 -translate-y-1/2 w-[35%] h-[500px] opacity-70 overflow-visible">
              <div className="w-[500px] h-[500px] overflow-hidden rounded-full border-8 border-black/80">
                <img 
                  src={experiences[nextIndex].image} 
                  alt={`Preview of ${experiences[nextIndex].title}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="relative">
              <div className="flex flex-col lg:flex-row items-center">
                <div className="relative w-[500px] h-[500px] z-20">
                  <div className="w-[500px] h-[500px] overflow-hidden rounded-full border-8 border-black">
                    <img 
                      src={experiences[currentSlide].image} 
                      alt={experiences[currentSlide].title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="relative w-[500px] ml-[-100px] z-10">
                  <div className="bg-[#0A3531] p-10 min-h-[450px] flex flex-col justify-between">
                    <div className="mt-8 ml-16">
                      <h2 className="font-heading text-4xl lg:text-5xl mb-6">{experiences[currentSlide].title}</h2>
                      <p className="text-white/80 mb-8 text-base leading-relaxed max-w-lg">
                        {experiences[currentSlide].description}
                      </p>
                      
                      <a 
                        href={`/experiences/${experiences[currentSlide].title.toLowerCase().replace(/\s+/g, '-')}`} 
                        className="inline-flex items-center text-[#FF5C28] hover:text-[#FF7040] group"
                      >
                        <div className="w-8 h-8 rounded-full border border-[#FF5C28] flex items-center justify-center mr-3 group-hover:bg-[#FF5C28] group-hover:text-white transition-all">
                          <ArrowRight size={16} />
                        </div>
                        <span className="uppercase text-xs font-medium tracking-wider">View Experience</span>
                      </a>
                    </div>
                    
                    <div className="mt-auto pt-6 ml-16 flex items-center space-x-2 text-white/80">
                      <MapPin size={16} />
                      <p className="text-xs">
                        {experiences[currentSlide].locations.join(', ')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between items-center mt-8 px-8 w-[65%] mx-auto">
            <div className="flex items-center space-x-4">
              <button 
                onClick={prevSlide}
                className="p-2 text-[#FF5C28] hover:text-white transition-colors"
                aria-label="Previous slide"
              >
                <ArrowLeft size={24} />
              </button>
              <button 
                onClick={nextSlide}
                className="p-2 text-[#FF5C28] hover:text-white transition-colors"
                aria-label="Next slide"
              >
                <ArrowRight size={24} />
              </button>
            </div>
            
            <div className="text-xl">
              {String(currentSlide + 1).padStart(2, '0')}/{String(totalSlides).padStart(2, '0')}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#221F26] text-white py-16">
        <div className="container mx-auto px-8">
          <div className="text-center mb-10">
            <p className="uppercase tracking-widest text-sm mb-3">TRAVEL WITH PURPOSE</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-16">
            <div>
              <h2 className="font-heading text-5xl md:text-6xl mb-6">
                Why travel with Dawnlight journey?
              </h2>
            </div>
            <div>
              <p className="text-white/80 text-base md:text-lg leading-relaxed">
                Our accommodation is both luxurious and authentic. We promise unrivalled comfort and 
                exclusivity while staying true to the vibrant soul and spirit of each, unique destination. 
                Our private game viewing areas have limits on guest numbers, meaning fewer vehicles and people, 
                with more intimate and up-close encounters with wildlife in their natural habitat.
              </p>
            </div>
          </div>

          <div className="mb-0 border-b-0 pb-0">
            <div className="flex flex-wrap justify-center space-x-6 mb-0">
              {purposeCategories.map((category) => (
                <div key={category.id} className="relative">
                  <button 
                    className={`uppercase tracking-wider text-sm pb-4 relative ${
                      category.id === activeCategoryId 
                        ? 'text-[#FF5C28]' 
                        : 'text-white/70 hover:text-white'
                    }`}
                    onClick={() => setActiveCategoryId(category.id)}
                  >
                    {category.title}
                    <div 
                      className={`absolute bottom-0 left-0 w-full h-0.5 transform transition-all duration-500 ease-in-out ${
                        category.id === activeCategoryId 
                          ? 'bg-[#FF5C28] scale-x-100' 
                          : 'bg-transparent scale-x-0'
                      }`}
                      style={{
                        transformOrigin: category.id === activeCategoryId ? 'left' : 'right'
                      }}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <Separator className="bg-white/20 mt-0" />
          
          <div className="mt-16 flex justify-center relative">
            <div className="w-full max-w-5xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div className="h-[400px] overflow-hidden rounded-sm mx-auto w-full">
                  <img 
                    src={activeCategory.image} 
                    alt={activeCategory.heading} 
                    className="w-full h-full object-cover transition-all duration-500 animate-[fadeIn_0.5s_ease]"
                  />
                </div>
                <div className="flex flex-col justify-center mx-auto text-center md:text-left">
                  <h3 className="font-heading text-4xl md:text-5xl mb-6 animate-[fadeUp_0.4s_ease]">
                    {activeCategory.heading}
                  </h3>
                  <p className="text-white/80 text-base mb-6 animate-[fadeUp_0.5s_ease]">
                    {activeCategory.description}
                  </p>
                  <div className="flex justify-center md:justify-start">
                    <a 
                      href={activeCategory.link} 
                      className="inline-flex items-center text-[#FF5C28] hover:text-[#FF7040] group animate-[fadeUp_0.6s_ease]"
                    >
                      <div className="w-8 h-8 rounded-full border border-[#FF5C28] flex items-center justify-center mr-3 group-hover:bg-[#FF5C28] group-hover:text-white transition-all">
                        <ArrowRight size={16} />
                      </div>
                      <span className="uppercase text-xs font-medium tracking-wider">{activeCategory.cta}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full flex justify-between items-center px-4">
              <button 
                className="p-2 text-[#FF5C28] hover:text-white transition-colors bg-[#221F26]/80 rounded-full"
                onClick={() => setActiveCategoryId(prev => prev === 1 ? purposeCategories.length : prev - 1)}
                aria-label="Previous category"
              >
                <ArrowLeft size={20} />
              </button>
              <button 
                className="p-2 text-[#FF5C28] hover:text-white transition-colors bg-[#221F26]/80 rounded-full"
                onClick={() => setActiveCategoryId(prev => prev === purposeCategories.length ? 1 : prev + 1)}
                aria-label="Next category"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ExperienceSlider;
