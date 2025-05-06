import { CustomButton } from "./ui/custom-button"

export function Destinations() {
  return (
    <section id="destinations" className="py-16 md:py-24 bg-background">
      <main className="container">
        <header className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Destinations</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore the breathtaking landscapes and wildlife of Rwanda and Uganda, home to some of Africa's most
            incredible natural wonders.
          </p>
        </header>

        <article className="grid md:grid-cols-2 gap-8">
          {/* Rwanda */}
          <figure className="group relative overflow-hidden rounded-xl">
            <img
              src="/assets/destinations/rwanda-tourism.jpg"
              alt="Rwanda"
              className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <figcaption className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-2xl font-bold text-white mb-2">Rwanda</h3>
              <p className="text-white/90 mb-4">
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
              alt="Uganda"
              className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <figcaption className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-2xl font-bold text-white mb-2">Uganda</h3>
              <p className="text-white/90 mb-4">
                The pearl of Africa with diverse wildlife, including gorillas, chimpanzees, and the Big Five.
              </p>
              <CustomButton variant="primary" size="sm" href="/destinations/uganda">
                Discover Uganda
              </CustomButton>
            </figcaption>
          </figure>
        </article>
      </main>
    </section>
  )
}
