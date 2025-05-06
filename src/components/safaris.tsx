import { ArrowRight } from "lucide-react"
import { CustomButton } from "./ui/custom-button"

const safariPackages = [
  {
    id: 1,
    title: "Gorilla Trekking Adventure",
    location: "Bwindi Impenetrable Forest, Uganda",
    duration: "5 days",
    image: "/placeholder.svg?height=400&width=600",
    description: "Get up close with endangered mountain gorillas in their natural habitat.",
    url: "/safaris/gorilla-trekking",
  },
  {
    id: 2,
    title: "Rwanda Wildlife Safari",
    location: "Akagera National Park, Rwanda",
    duration: "7 days",
    image: "/placeholder.svg?height=400&width=600",
    description: "Experience the Big Five and stunning landscapes in Rwanda's premier national park.",
    url: "/safaris/rwanda-wildlife",
  },
  {
    id: 3,
    title: "Uganda Primate Experience",
    location: "Kibale Forest, Uganda",
    duration: "6 days",
    image: "/placeholder.svg?height=400&width=600",
    description: "Track chimpanzees and other primates in the lush forests of Uganda.",
    url: "/safaris/uganda-primates",
  },
]

export function Safaris() {
  return (
    <section id="safaris" className="py-16 md:py-24 bg-muted/50">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Safari Packages</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Carefully crafted itineraries to give you the ultimate African wildlife experience.
            </p>
          </div>
          <CustomButton variant="link" href="/safaris" className="mt-4 md:mt-0 flex items-center gap-2">
            View all packages <ArrowRight className="h-4 w-4" />
          </CustomButton>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {safariPackages.map((safari) => (
            <div
              key={safari.id}
              className="group bg-background rounded-xl overflow-hidden border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative overflow-hidden">
                <img
                  src={safari.image || "/placeholder.svg"}
                  alt={safari.title}
                  className="w-full aspect-[3/2] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {safari.duration}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{safari.title}</h3>
                  <span className="text-lg font-bold text-primary">{safari.price}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{safari.location}</p>
                <p className="mb-4">{safari.description}</p>
                <CustomButton variant="secondary" size="sm" href={safari.url} className="w-full">
                  View Details
                </CustomButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
