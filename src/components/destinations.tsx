import { CustomButton } from "./ui/custom-button"

export function Destinations() {
  return (
    <section id="destinations" className="py-8 md:py-12 lg:py-16 bg-background">
      <main className="container">
        <section className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Header Section */}
          <header className="text-center lg:text-left space-y-6 lg:space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Our Destinations</h2>
            <section className="space-y-4">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Explore the breathtaking landscapes and wildlife of Rwanda and Uganda, home to some of Africa's most
                incredible natural wonders. From the misty mountains of Rwanda to the diverse ecosystems of Uganda,
                each destination offers unique experiences that will leave you with memories to last a lifetime.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Discover pristine national parks, encounter majestic mountain gorillas in their natural habitat, 
                and immerse yourself in rich cultural traditions. Whether you're seeking adventure, wildlife photography, 
                or peaceful nature retreats, our carefully curated destinations provide the perfect backdrop for 
                unforgettable African safari experiences.
              </p>
            </section>
            <nav aria-label="View all destinations">
              <CustomButton variant="primary" size="lg" href="/destinations">
                View all destinations
              </CustomButton>
            </nav>
          </header>

          {/* Destination Cards Section */}
          <aside className="space-y-4 md:space-y-6 max-w-[90%] mx-auto">
            {/* Rwanda */}
            <figure className="group relative overflow-hidden rounded-xl">
              <img
                src="/assets/destinations/rwanda-tourism.jpg"
                alt="Rwanda tourism destination featuring mountain gorillas and scenic landscapes"
                className="w-full aspect-[2/1] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <figcaption className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4">
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">Rwanda</h3>
                <p className="text-white/90 mb-3 text-sm">
                  The land of a thousand hills, home to mountain gorillas and stunning landscapes.
                </p>
                <CustomButton variant="primary" size="sm" href="/destinations/rwanda">
                  Discover Rwanda
                </CustomButton>
              </figcaption>
            </figure>

            {/* Uganda */}
            <figure className="group relative overflow-hidden rounded-xl">
              <img
                src="/assets/destinations/uganda-tourism.jpg"
                alt="Uganda tourism destination featuring diverse wildlife including gorillas and the Big Five"
                className="w-full aspect-[2/1] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <figcaption className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4">
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">Uganda</h3>
                <p className="text-white/90 mb-3 text-sm">
                  The pearl of Africa with diverse wildlife, including gorillas, chimpanzees, and the Big Five.
                </p>
                <CustomButton variant="primary" size="sm" href="/destinations/uganda">
                  Discover Uganda
                </CustomButton>
              </figcaption>
            </figure>
          </aside>
        </section>
      </main>
    </section>
  )
}
