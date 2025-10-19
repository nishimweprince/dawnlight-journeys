import { ArrowRight } from "lucide-react"
import { CustomButton } from "./ui/custom-button"
import { safariPackages } from "../constants/safaris"

export function Safaris() {
  return (
    <section id="safaris" className="py-12 md:py-16">
      <div className="container flex flex-col gap-8">
        <header className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight uppercase mb-4 text-primary">Best Seller Safaris</h2>
          <hr className="w-24 h-1 bg-primary mx-auto border-0" />
        </header>

        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 list-none">
          {safariPackages.slice(0, 6).map((safari) => (
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
        <footer className="flex justify-center mt-4">
          <CustomButton
            size="lg"
            href="/safaris"
            variant="primary"
            className="flex items-center gap-2"
          >
            View all safaris
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </CustomButton>
        </footer>
      </div>
    </section>
  )
}
