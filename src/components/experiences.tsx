'use client';

import type React from "react"
import { CustomButton } from "./ui/custom-button"
import Link from "next/link"
import { experiences as allExperiences } from "../constants/experiences"
import { motion } from "framer-motion"

const experiences = allExperiences.slice(0, 4)

export function Experiences() {
  return (
    <section id="experiences" className="py-8 md:py-12 bg-primary">
      <div className="container">
        {/* Section Header */}
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight uppercase mb-4 text-white">
            East African Hidden Treasures
          </h2>
          <hr className="w-24 h-1 bg-white mx-auto border-0" />
        </header>

        {/* Alternating Rows */}
        <div className="space-y-12 md:space-y-16">
          {experiences.map((experience, index) => {
            const Icon = experience.icon
            const isEven = index % 2 === 1

            const imageVariants = {
              hidden: { opacity: 0, x: isEven ? 100 : -100 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as any }
              }
            }

            const textVariants = {
              hidden: { opacity: 0, x: isEven ? -100 : 100 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as any, delay: 0.2 }
              }
            }

            return (
              <article
                key={experience.id}
                className="grid lg:grid-cols-2 gap-6 md:gap-8 items-center"
              >
                {/* Image Column */}
                <motion.figure
                  className={`relative overflow-hidden rounded-xl group ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={imageVariants}
                >
                  <img
                    src={experience.image}
                    alt={experience.title}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm rounded-full p-3 w-12 h-12 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                </motion.figure>

                {/* Text Column */}
                <motion.section
                  className={`space-y-4 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={textVariants}
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    {experience.title}
                  </h3>
                  <p className="text-white/90 text-base md:text-lg leading-relaxed">
                    {experience.description}
                  </p>
                  <Link
                    href={experience.url}
                    className="inline-flex items-center gap-2 text-white font-semibold hover:underline hover:gap-3 transition-all text-sm md:text-base group/link"
                  >
                    Learn more
                    <ArrowRight className="h-5 w-5 transition-transform group-hover/link:translate-x-1" aria-hidden="true" />
                  </Link>
                </motion.section>
              </article>
            )
          })}
        </div>

        {/* Footer CTA */}
        <footer className="flex justify-center mt-12">
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
