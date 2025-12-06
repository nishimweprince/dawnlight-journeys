import { CustomButton } from "./ui/custom-button"
import { safariPackages } from "../constants/safaris"

export function Safaris() {
  // Group safaris by destination
  const safarisByDestination = safariPackages.reduce(
    (acc, safari) => {
      if (!acc[safari.destination]) {
        acc[safari.destination] = []
      }
      acc[safari.destination].push(safari)
      return acc
    },
    {} as Record<string, typeof safariPackages>
  )

  // Get unique destinations and sort them
  const destinations = Object.keys(safarisByDestination).sort()

  return (
    <section id="safaris" className="py-8 md:py-12">
      <div className="container flex flex-col gap-12">
        <header className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight uppercase mb-4 text-primary">Best Seller Safaris</h2>
          <hr className="w-24 h-1 bg-primary mx-auto border-0" />
        </header>

        {destinations.map((destination) => {
          const destinationSafaris = safarisByDestination[destination].slice(0, 3)
          
          if (destinationSafaris.length === 0) return null

          return (
            <div key={destination} className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                Best Seller Safaris - {destination}
              </h3>
              <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 list-none">
                {destinationSafaris.map((safari) => (
                  <li key={safari.id} className="group bg-gray-900 rounded-lg overflow-hidden hover:shadow-xl transition-all">
                    <figure>
                      <img
                        src={safari.image || "/assets/common/placeholder.svg"}
                        alt={safari.title}
                        className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <figcaption className="p-5 bg-white">
                        <h3 className="font-bold text-lg mb-2 text-foreground">{safari.title}</h3>
                        <address className="text-sm text-muted-foreground mb-2 not-italic">{safari.location}</address>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                          {safari.description}
                        </p>
                        <footer className="flex items-center justify-between">
                          <time className="text-sm font-semibold text-primary">{safari.duration}</time>
                          <CustomButton variant="primary" size="sm" href={safari.url}>
                            View Details
                          </CustomButton>
                        </footer>
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </section>
  )
}
