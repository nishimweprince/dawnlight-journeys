import React from 'react';
import { Truck, Leaf } from 'lucide-react';

const ConservationSection = () => {
  return (
    <section className="py-20 bg-[#211f20] text-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-10">
        <div className="lg:w-1/2 flex items-center justify-center">
          <div className="relative w-full max-w-md aspect-square">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white/30 rounded-full flex items-center justify-center">
              <span className="text-white text-sm tracking-wider uppercase">Dawn light</span>
            </div>
            
            <div className="absolute top-1/4 left-5">
              <div className="flex flex-col items-center">
                <Truck size={40} className="text-white mb-2" />
                <span className="uppercase text-xs font-light text-white/80 tracking-wider">HOSPITALITY</span>
              </div>
            </div>
            
           
            
            <div className="absolute top-[45%] left-[10%] w-36 text-right">
              <p className="text-xs text-white/70 leading-tight">
                Our hospitality activities generate revenue to fund efforts...
              </p>
            </div>
            
            <div className="absolute bottom-[20%] left-[28%] w-32 text-right">
              <p className="text-xs text-white/70 leading-tight">
                The more guests and interest we have in our operation...
              </p>
            </div>
        
            <div className="absolute top-1/4 right-5">
              <div className="flex flex-col items-center">
                <Leaf size={40} className="text-white mb-2" />
                <span className="uppercase text-xs font-light text-white/80 tracking-wider">CONSERVATION</span>
              </div>
            </div>
            
            <div className="absolute top-[20%] right-[30%] w-32">
              <p className="text-xs text-white/70 leading-tight">
                ...we protect uninhabited lands, save trees, build communities and source local produce in our camps.
              </p>
            </div>
            
            <div className="absolute top-[45%] right-[10%] w-36">
              <p className="text-xs text-white/70 leading-tight">
                ...which allow us to protect dawnlight journey and biodiversity, creating sustainable social impact.
              </p>
            </div>
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
              <circle cx="200" cy="200" r="150" fill="transparent" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
              <path d="M120,100 C 150,170 150,170 200,200" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="transparent" />
              <path d="M280,100 C 250,170 250,170 200,200" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="transparent" />
              <path d="M120,300 C 150,230 150,230 200,200" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="transparent" />
              <path d="M280,300 C 250,230 250,230 200,200" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="transparent" />
            </svg>
          </div>
        </div>
        
        {/* Text content side */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-heading mb-10">
            Conservation<br />
            and hospitality
          </h2>
          <p className="text-white/80 text-sm leading-relaxed">
            Deeply intertwined. For four decades, the focus of our impact has never changed: to restore and help conserve invaluable dawnlight journey and wildlife through high-end conservation tourism. We aim to empower and uplift local communities living in or near these iconic wild places. It's a collective purpose, shared with our guests, our partners, donors, governments, local communities and researchers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ConservationSection;