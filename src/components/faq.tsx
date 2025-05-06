"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What is the best time to visit Rwanda and Uganda?",
    answer:
      "The best time to visit Rwanda and Uganda is during the dry seasons from June to September and December to February. These periods offer the best conditions for gorilla trekking and wildlife viewing.",
  },
  {
    question: "Do I need a visa to visit Rwanda and Uganda?",
    answer:
      "Yes, most visitors need a visa to enter Rwanda and Uganda. You can apply for an e-visa online before your trip or get a visa on arrival at the airport. For both countries, you'll need a valid passport with at least 6 months validity.",
  },
  {
    question: "How physically demanding is gorilla trekking?",
    answer:
      "Gorilla trekking can be moderately to highly physically demanding, depending on where the gorillas are located on the day of your trek. Treks can last from 30 minutes to 6+ hours through dense forest and steep terrain. A reasonable level of fitness is recommended.",
  },
  {
    question: "What vaccinations do I need for Rwanda and Uganda?",
    answer:
      "Yellow fever vaccination is mandatory for entry into both Rwanda and Uganda. Other recommended vaccinations include hepatitis A and B, typhoid, tetanus, and polio. Malaria prophylaxis is also strongly advised.",
  },
  {
    question: "Can I customize my safari itinerary?",
    answer:
      "We specialize in creating custom itineraries tailored to your interests, timeframe, and budget. Contact us to start planning your personalized African adventure.",
  },
  {
    question: "What is included in the safari packages?",
    answer:
      "Our safari packages typically include accommodation, meals as specified, transportation, park entrance fees, guided activities, and the services of an experienced guide. International flights, visas, travel insurance, and personal expenses are usually not included.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about traveling to Rwanda and Uganda.
          </p>
        </div>

        <div className="max-w-3xl mx-auto divide-y">
          {faqs.map((faq, index) => (
            <div key={index} className="py-5">
              <button className="flex w-full justify-between items-center text-left" onClick={() => toggleFaq(index)}>
                <h3 className="text-lg font-medium">{faq.question}</h3>
                <ChevronDown
                  className={`h-5 w-5 text-muted-foreground transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`mt-2 transition-all duration-300 overflow-hidden ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
