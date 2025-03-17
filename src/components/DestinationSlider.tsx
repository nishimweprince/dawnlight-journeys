import React, { useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import useEmblaCarousel from 'embla-carousel-react';

const destinations = [
  {
    id: 1,
    name: "ZAMBIA",
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=1920",
  },
  {
    id: 2,
    name: "BOTSWANA",
    image: "https://images.unsplash.com/photo-1547970810-dc1eac37d174?q=80&w=1920",
  },
  {
    id: 3,
    name: "RWANDA",
    image: "https://images.unsplash.com/photo-1519659528534-7fd733a832a0?q=80&w=1920",
  },
  {
    id: 4,
    name: "NAMIBIA",
    image: "https://images.unsplash.com/photo-1527489377706-5bf97e608852?q=80&w=1920",
  },
  {
    id: 5,
    name: "ZIMBABWE",
    image: "https://images.unsplash.com/photo-1547970979-5a1670695357?q=80&w=1920",
  },
];

const DestinationSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    if (emblaApi) {
      const interval = setInterval(() => {
        emblaApi.scrollNext();
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [emblaApi]);

  return (
    <section className="relative bg-[#B5A69C] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-6">
          <h2 className="font-heading text-5xl md:text-6xl text-white">
            Our Iconic Destinations
          </h2>
          <p className="text-white/90 max-w-3xl mx-auto text-lg">
            We operate in 8 African countries, with 60+ camps promising exclusive, private wild game viewing,
            unrivalled style, comfort and a range of activities for a full immersion in nature and local culture.
          </p>
          <a
            href="/destinations"
            className="inline-flex items-center space-x-2 text-white border border-white/30 px-6 py-3 hover:bg-white/10 transition-colors"
          >
            EXPLORE DESTINATIONS MAP
          </a>
        </div>

        <div className="mt-12">
          <Carousel ref={emblaRef} className="w-full">
            <CarouselContent>
              {destinations.map((destination) => (
                <CarouselItem key={destination.id} className="basis-full">
                  <div className="relative h-[70vh] w-full">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-full object-cover brightness-75"
                    />
                    <h3 className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white font-heading text-7xl tracking-widest">
                      {destination.name}
                    </h3>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="flex justify-center space-x-4 mt-8">
            {destinations.map((destination) => (
              <button
                key={destination.id}
                className="text-white text-sm tracking-wider hover:text-white/70 transition-colors"
              >
                {destination.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationSlider;