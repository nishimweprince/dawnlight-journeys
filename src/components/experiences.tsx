import type React from "react"
import { CustomButton } from "./ui/custom-button"
import Link from "next/link"
import { experiences as allExperiences } from "../constants/experiences"

// Display only first 4 experiences on homepage
const experiences = allExperiences.slice(0, 4)

export function Experiences() {
  return (
    <section id="experiences" className="py-12 md:py-16 bg-primary">
      <div className="container">
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight uppercase mb-4 text-white">Rwanda & Uganda Safari Experiences</h2>
          <hr className="w-24 h-1 bg-primary mx-auto border-0" />
        </header>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 list-none">
          {experiences.map((experience) => {
            const Icon = experience.icon

            return (
              <li key={experience.id} className="bg-white overflow-hidden rounded-lg hover:shadow-xl transition-all group">
                <figure className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={experience.image}
                    alt={experience.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-primary/90 backdrop-blur-sm rounded-full p-2 w-10 h-10 flex items-center justify-center mb-2">
                      <Icon className="h-5 w-5 text-white" aria-hidden="true" />
                    </div>
                  </div>
                </figure>
                <section className="p-6">
                  <h3 className="text-lg font-bold mb-3 text-foreground">{experience.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-3">{experience.description}</p>
                  <Link href={experience.url} className="text-primary font-semibold hover:underline inline-flex items-center text-sm">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                  </Link>
                </section>
              </li>
            )
          })}
        </ul>

        <footer className="flex justify-center mt-4">
          <CustomButton
            variant="secondary"
            size="lg"
            href="/experiences"
            className="flex items-center gap-2 hover:!bg-white/90 hover:!text-primary"
          >
            Discover More Experiences
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </CustomButton>
        </footer>
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
