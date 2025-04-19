import { useState } from 'react';
import { ArrowLeft, ArrowRight, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ExperienceSliderProps } from '@/types/experience';

const ExperienceCard = ({ experience }: { experience: ExperienceSliderProps['experiences'][0] }) => (
  <div className="relative w-[500px] h-[500px] z-20">
    <div className="w-[500px] h-[500px] overflow-hidden rounded-full border-8 border-black">
      <img 
        src={experience?.image} 
        alt={experience?.title} 
        className="w-full h-full object-cover"
      />
    </div>
  </div>
);

const ExperienceContent = ({ experience }: { experience: ExperienceSliderProps['experiences'][0] }) => (
  <div className="relative w-[500px] ml-[-100px] z-10">
    <div className="bg-[#0A3531] p-10 min-h-[450px] flex flex-col justify-between">
      <div className="mt-8 ml-16">
        <h2 className="font-heading text-4xl lg:text-5xl mb-6">{experience?.title}</h2>
        <p className="text-white/80 mb-8 text-base leading-relaxed max-w-lg">
          {experience?.description}
        </p>
        
        <a 
          href={`/experiences/${experience?.title?.toLowerCase().replace(/\s+/g, '-')}`} 
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
            {experience?.locations?.join(', ')}
        </p>
      </div>
    </div>
  </div>
);

const PurposeSection = ({ 
  categories, 
  activeCategoryId, 
  setActiveCategoryId 
}: { 
  categories: ExperienceSliderProps['purposeCategories'];
  activeCategoryId: number;
  setActiveCategoryId: (id: number) => void;
}) => {
  const activeCategory = categories.find(cat => cat.id === activeCategoryId) || categories[0];

  return (
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
            {categories.map((category) => (
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
                  src={activeCategory?.image} 
                  alt={activeCategory?.heading} 
                  className="w-full h-full object-cover transition-all duration-500 animate-[fadeIn_0.5s_ease]"
                />
              </div>
              <div className="flex flex-col justify-center mx-auto text-center md:text-left">
                <h3 className="font-heading text-4xl md:text-5xl mb-6 animate-[fadeUp_0.4s_ease]">
                  {activeCategory?.heading}
                </h3>
                <p className="text-white/80 text-base mb-6 animate-[fadeUp_0.5s_ease]">
                  {activeCategory?.description}
                </p>
                <div className="flex justify-center md:justify-start">
                  <a 
                    href={activeCategory?.link} 
                    className="inline-flex items-center text-[#FF5C28] hover:text-[#FF7040] group animate-[fadeUp_0.6s_ease]"
                  >
                    <div className="w-8 h-8 rounded-full border border-[#FF5C28] flex items-center justify-center mr-3 group-hover:bg-[#FF5C28] group-hover:text-white transition-all">
                      <ArrowRight size={16} />
                    </div>
                    <span className="uppercase text-xs font-medium tracking-wider">{activeCategory?.cta}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full flex justify-between items-center px-4">
            <button 
              className="p-2 text-[#FF5C28] hover:text-white transition-colors bg-[#221F26]/80 rounded-full"
              onClick={() => setActiveCategoryId(activeCategoryId === 1 ? categories.length : activeCategoryId - 1)}
              aria-label="Previous category"
            >
              <ArrowLeft size={20} />
            </button>
            <button 
              className="p-2 text-[#FF5C28] hover:text-white transition-colors bg-[#221F26]/80 rounded-full"
              onClick={() => setActiveCategoryId(activeCategoryId === categories.length ? 1 : activeCategoryId + 1)}
              aria-label="Next category"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const ExperienceSlider = ({
  experiences,
  purposeCategories,
  showPurposeSection = true,
  title = "Experience real, raw nature",
  subtitle = "OUR EXPERIENCES",
  description = "Travelling is about more than the places you visit and the things you'll see. It's about people, culture, wildlife, history, and experiencing something you've never done before. With Dawnlight journey you'll walk, boat, barge, float, fly, drive, ride, trek, track and discover a world of adventures.",
  ctaText = "EXPLORE ALL EXPERIENCES",
  ctaLink = "/experiences"
}: ExperienceSliderProps) => {
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

  return (
    <>
      <section className="relative bg-black text-white py-12 overflow-hidden">
        <div className="max-w-[1200px] mx-auto mb-12 px-8">
          <p className="text-[#FF5C28]/90 uppercase tracking-widest text-sm mb-3">{subtitle}</p>
          
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="md:w-[55%]">
              <h2 className="font-heading text-5xl md:text-6xl mb-6">
                {title}
              </h2>

              <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-xl">
                {description}
              </p>
            </div>

            <nav className="flex items-center mt-8 md:mt-0">
              <Button
                variant="outline"
                className="rounded-full border-[#FF5C28] text-[#FF5C28] hover:bg-[#FF5C28] hover:text-white group"
                size="lg"
                onClick={() => window.location.href = ctaLink}
              >
                <span>{ctaText}</span>
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
              </Button>
            </nav>
          </div>
        </div>

        <article className="max-w-[1200px] mx-auto px-8">
          <Separator className="bg-white/20 mb-12" />
        </article>

        <article className="relative w-full max-w-[100vw]">
          <article className="mx-auto w-[65%] relative">
            <figure className="absolute left-[-50%] top-1/2 -translate-y-1/2 w-[35%] h-[500px] opacity-70 overflow-visible">
              <article className="w-[500px] h-[500px] overflow-hidden rounded-full border-8 border-black/80">
                <img
                  src={experiences[prevIndex]?.image}
                  alt={`Preview of ${experiences[prevIndex]?.title}`}
                  className="w-full h-full object-cover"
                />
              </article>
            </figure>

            <figure className="absolute right-[-35%] top-1/2 -translate-y-1/2 w-[35%] h-[500px] opacity-70 overflow-visible">
              <article className="w-[500px] h-[500px] overflow-hidden rounded-full border-8 border-black/80">
                <img
                  src={experiences[nextIndex]?.image}
                  alt={`Preview of ${experiences[nextIndex]?.title}`}
                  className="w-full h-full object-cover"
                />
              </article>
            </figure>

            <div className="relative">
              <div className="flex flex-col lg:flex-row items-center">
                <ExperienceCard experience={experiences[currentSlide]} />
                <ExperienceContent experience={experiences[currentSlide]} />
              </div>
            </div>
          </article>
          
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

            <p className="text-xl">
              {String(currentSlide + 1).padStart(2, '0')}/
              {String(totalSlides).padStart(2, '0')}
            </p>
          </div>
        </article>
      </section>

      {showPurposeSection && (
        <PurposeSection 
          categories={purposeCategories}
          activeCategoryId={activeCategoryId}
          setActiveCategoryId={setActiveCategoryId}
        />
      )}
    </>
  );
};

export default ExperienceSlider;
