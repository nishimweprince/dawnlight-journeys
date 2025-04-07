import React from 'react';

interface TravelExperience {
  category: 'SOLO' | 'FRIENDS' | 'GROUP';
  title: string;
  description: string;
  image: string;
  nights: number;
  camps: number;
  price: number;
}

interface TravelExperiencesProps {
  title: string;
  description: string;
  experiences: TravelExperience[];
}

const TravelCard: React.FC<TravelExperience> = ({
  category,
  title,
  description,
  image,
  nights,
  camps,
  price,
}) => (
  <div className="relative w-full h-[400px] mb-8">
    {/* Full width image background */}
    <div className="absolute inset-0 w-full h-full">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />
    </div>
    
    {/* Category label */}
    <div className="absolute top-8 left-8 bg-transparent border border-white px-6 py-2 text-sm tracking-wider text-white">
      {category}
    </div>

    {/* Content overlay */}
    <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-8 max-w-[500px] mr-8">
      <h3 className="font-heading text-3xl mb-4">{title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed text-sm">{description}</p>
      
      <div className="flex justify-between items-start mb-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
            <span className="text-gray-600 text-sm">{nights} nights</span>
          </div>
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-600 text-sm">{camps} camps</span>
          </div>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-500 mb-1">From</p>
          <p className="font-heading text-xl mb-1">USD {price.toLocaleString()}</p>
          <p className="text-xs text-gray-500">per person</p>
        </div>
      </div>
      
      <button className="w-full bg-[#FF5C00] text-white py-3 px-6 hover:bg-[#E65200] transition-colors font-medium tracking-wider text-sm">
        EXPLORE JOURNEY
      </button>
    </div>
  </div>
);

const TravelExperiences: React.FC<TravelExperiencesProps> = ({
  title,
  description,
  experiences,
}) => {
  return (
    <section className="py-24 px-8 md:px-16 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-gray-500 tracking-widest mb-4 text-sm">TRAVEL WITH US</p>
          <h2 className="font-heading text-4xl md:text-5xl mb-8">{title}</h2>
          <p className="text-gray-600 max-w-3xl leading-relaxed">{description}</p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <TravelCard key={index} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelExperiences; 