import { CustomButton } from "./ui/custom-button"

export function Destinations() {
  return (
    <section id="destinations" className="py-12 md:py-16 bg-white">
      <div className="container">
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight uppercase text-foreground mb-4">Rwanda-Uganda Populars</h2>
          <hr className="w-24 h-1 bg-primary mx-auto border-0" />
        </header>

        <ul className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center list-none">
          <li className="group relative overflow-hidden rounded-xl">
            <figure>
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
          </li>

          <li className="group relative overflow-hidden rounded-xl">
            <figure>
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
          </li>
        </ul>
      </div>
    </section>
  )
}
