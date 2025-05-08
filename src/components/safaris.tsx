import { ArrowRight } from "lucide-react"
import { CustomButton } from "./ui/custom-button"

const safariPackages = [
  {
    id: 1,
    title: "Gorilla Trekking Adventure",
    location: "Bwindi Impenetrable Forest, Uganda",
    duration: "5 days",
    image: "/assets/safaris/gorilla-trekking.jpg",
    description: "Get up close with endangered mountain gorillas in their natural habitat.",
    url: "/safaris",
  },
  {
    id: 2,
    title: "Rwanda Wildlife Safari",
    location: "Akagera National Park, Rwanda",
    duration: "7 days",
    image: "/assets/safaris/wildlife-sararis.jpg",
    description: "Experience the Big Five and stunning landscapes in Rwanda's premier national park.",
    url: "/safaris/rwanda-wildlife",
  },
  {
    id: 3,
    title: "Uganda Primate Experience",
    location: "Kibale Forest, Uganda",
    duration: "6 days",
    image: "/assets/safaris/uganda-primate-experience.jpg",
    description: "Track chimpanzees and other primates in the lush forests of Uganda.",
    url: "/safaris/uganda-primates",
  },
]

export function Safaris() {
  return (
    <section id="safaris" className="py-16 md:py-24 bg-muted/50">
      <main className="container">
        <header className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <section>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Safari Packages</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Carefully crafted itineraries to give you the ultimate African wildlife experience.
            </p>
          </section>
          <CustomButton variant="link" href="/safaris" className="mt-4 md:mt-0 flex items-center gap-2">
            View all packages <ArrowRight className="h-4 w-4" />
          </CustomButton>
        </header>

        <article className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {safariPackages.map((safari) => (
            <figure
              key={safari.id}
              className="group bg-background rounded-xl overflow-hidden border shadow-sm hover:shadow-md transition-shadow"
            >
              <section className="relative overflow-hidden">
                <img
                  src={safari.image || "/placeholder.svg"}
                  alt={safari.title}
                  className="w-full aspect-[3/2] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {safari.duration}
                </span>
              </section>
              <figcaption className="p-6">
                <p className="text-sm text-muted-foreground mb-2">{safari.location}</p>
                <p className="mb-4">{safari.description}</p>
                <CustomButton variant="secondary" size="sm" href={safari.url} className="w-full">
                  View Details
                </CustomButton>
              </figcaption>
            </figure>
          ))}
        </article>
      </main>
    </section>
  )
}
