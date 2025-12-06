import { CustomButton } from "./ui/custom-button"

export function Destinations() {
  return (
    <section id="destinations" className="py-8 md:py-12">
      <div className="container">
        {/* Centered Header */}
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight uppercase text-foreground mb-4">
            Discover Rwanda & Uganda
          </h2>
          <hr className="w-24 h-1 bg-primary mx-auto border-0" />
        </header>

        {/* Two-Column Layout: Text Left | Image Right */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* LEFT: Text Content */}
          <article className="space-y-6 order-2 lg:order-1">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Explore East Africa's Hidden Gems
              </h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Journey through Rwanda's lush thousand hills and Uganda's wild savannas.
                From tracking mountain gorillas in Volcanoes National Park to witnessing
                the Big Five in Queen Elizabeth National Park, every moment is an adventure.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Experience vibrant cultures, pristine landscapes, and unforgettable wildlife
                encounters in two of Africa's most captivating destinations.
              </p>
            </div>

            {/* Feature Highlights */}
            <ul className="space-y-3 list-none">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </span>
                <span className="text-foreground font-medium">Mountain Gorilla Trekking</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </span>
                <span className="text-foreground font-medium">Big Five Wildlife Safaris</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </span>
                <span className="text-foreground font-medium">Cultural Immersion Experiences</span>
              </li>
            </ul>

            {/* CTA Button */}
            <div className="pt-2">
              <CustomButton
                variant="primary"
                size="lg"
                href="/destinations"
                className="inline-flex items-center gap-2"
              >
                View All Destinations
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </CustomButton>
            </div>
          </article>

          {/* RIGHT: Hero Image */}
          <figure className="relative overflow-hidden rounded-xl group order-1 lg:order-2">
            <img
              src="/assets/destinations/rwanda-tourism.jpg"
              alt="Rwanda and Uganda tourism destinations featuring mountain gorillas and wildlife"
              className="w-full aspect-[4/3] lg:aspect-[4/3] max-w-md mx-auto object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </figure>
        </div>
      </div>
    </section>
  )
}
