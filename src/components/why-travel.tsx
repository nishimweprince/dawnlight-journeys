import { Award, Users, Shield, Clock, Headphones, Sparkles } from 'lucide-react';

const features = [
  {
    id: 1,
    icon: Award,
    title: '24-HOUR TRIP PLANNING',
    description: 'Our expert team works around the clock to plan every detail of your safari adventure, ensuring a seamless and unforgettable experience from start to finish.'
  },
  {
    id: 2,
    icon: Users,
    title: 'BOOKING GORILLA PERMITS',
    description: 'We handle all the complexities of securing gorilla trekking permits in Rwanda and Uganda, guaranteeing your once-in-a-lifetime encounter with mountain gorillas.'
  },
  {
    id: 3,
    icon: Shield,
    title: 'HASSLE-FREE',
    description: 'From accommodation to transportation, we take care of everything so you can focus on creating memories and experiencing the wonders of Africa.'
  },
  {
    id: 4,
    icon: Clock,
    title: 'INSTANT PAYMENT PROOF',
    description: 'Receive immediate confirmation and payment receipts for all your bookings, providing peace of mind and transparency throughout your journey.'
  },
  {
    id: 5,
    icon: Headphones,
    title: '24X7 CUSTOMER SUPPORT',
    description: 'Our dedicated support team is available 24/7 to assist you before, during, and after your safari, ensuring you always have help when you need it.'
  },
  {
    id: 6,
    icon: Sparkles,
    title: 'FLEXIBLE',
    description: 'We offer customizable itineraries tailored to your preferences, budget, and schedule, making your African adventure truly unique and personal.'
  }
];

export function WhyTravel() {
  return (
    <section className="py-8 md:py-12 bg-primary">
      <div className="container">
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight mb-4">
            Why Travel With Dawnlight Journeys?
          </h2>
          <hr className="w-24 h-1 bg-white mx-auto border-0" />
        </header>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 list-none">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <li key={feature.id} className="text-white flex items-start gap-4">
                <figure className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-white" aria-hidden="true" />
                </figure>
                <section>
                  <h3 className="font-bold text-sm md:text-base mb-2 uppercase tracking-wide">
                    {feature.title}
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </section>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
