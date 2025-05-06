import type React from "react"
import { Camera, Coffee, Compass, Users } from "lucide-react"
import { CustomButton } from "./ui/custom-button"

const experiences = [
  {
    id: 1,
    title: "Wildlife Photography",
    icon: Camera,
    description: "Capture stunning images of Africa's incredible wildlife with expert guidance.",
    url: "/experiences/photography",
  },
  {
    id: 2,
    title: "Cultural Immersion",
    icon: Users,
    description: "Connect with local communities and experience authentic African traditions.",
    url: "/experiences/cultural",
  },
  {
    id: 3,
    title: "Adventure Trekking",
    icon: Compass,
    description: "Explore breathtaking landscapes on foot with experienced local guides.",
    url: "/experiences/trekking",
  },
  {
    id: 4,
    title: "Culinary Experiences",
    icon: Coffee,
    description: "Taste authentic African cuisine and learn traditional cooking methods.",
    url: "/experiences/culinary",
  },
]

export function Experiences() {
  return (
    <section id="experiences" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Unforgettable Experiences</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Go beyond the ordinary safari with our curated experiences that connect you with the heart of Africa.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {experiences.map((experience) => {
            const Icon = experience.icon

            return (
              <div key={experience.id} className="bg-muted/30 rounded-xl p-6 hover:bg-muted/50 transition-colors">
                <div className="bg-primary/10 text-primary rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">{experience.title}</h3>
                <p className="text-muted-foreground mb-4">{experience.description}</p>
                <a href={experience.url} className="text-primary font-medium hover:underline inline-flex items-center">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            )
          })}
        </div>

        <div className="bg-muted rounded-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">Create Your Custom Experience</h3>
              <p className="mb-6">
                Looking for something unique? We specialize in creating custom experiences tailored to your interests,
                timeframe, and budget.
              </p>
              <CustomButton variant="primary" size="lg" href="https://wa.me/1234567890" className="self-start">
                Contact Us to Customize
              </CustomButton>
            </div>
            <div className="relative min-h-[300px]">
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="Custom Safari Experience"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ArrowRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}
