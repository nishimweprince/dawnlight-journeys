import { safariMenuList } from '@/constants/navbar.constants';
import { capitalizeString } from '@/helpers/strings.helper';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const SafarisSection = () => {
  // STATE VARIABLES
  const [selectedSafari, setSelectedSafari] = useState<string>('');

  return (
    <section className="block pt-32 px-6 md:px-12 lg:px-24 text-center bg-[#B6A28E]">
      <h1 className="text-5xl md:text-6xl lg:text-7xl text-white font-serif mb-8">
        Our Remarkable Safaris
      </h1>
      <p className="text-white/90 max-w-3xl mx-auto text-lg mb-12">
        We specialize in Rwanda's most incredible safaris, offering gorilla
        trekking experiences and northern wildlife adventures, providing
        exclusive viewing opportunities with unrivalled comfort and immersion in
        Rwanda's nature and culture.
      </p>
      <Link
        to={`/safaris`}
        className="text-white w-fit flex mx-auto items-center justify-center self-center gap-2 text-xl uppercase hover:transition-colors cursor-pointer"
      >
        EXPLORE SAFARIS
        <FontAwesomeIcon
          icon={faArrowRight}
          className="border-[2px] text-primary border-primary font-medium rounded-full p-2 px-[9.2px]"
        />
      </Link>

      {/* Destinations List */}
      <menu className="mt-20 flex flex-wrap justify-center gap-8 text-white/80">
        {safariMenuList?.map((destination, index) => {
          return (
            <>
              <Link
                to={`#`}
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedSafari(destination?.label);
                }}
                className="hover:text-white text-xl uppercase hover:transition-colors cursor-pointer"
              >
                {capitalizeString(destination?.label)}
              </Link>
              {index < safariMenuList.length - 1 && (
                <span className="text-white/80 text-xl">•</span>
              )}
            </>
          );
        })}
      </menu>
      <figure className="w-full h-full flex flex-col gap-4 py-12">
        {['RWANDA_GORILLA_TREKKING', ''].includes(selectedSafari) && (
          <img
            src={`/images/gorilla-trekking.jpg`}
            alt={selectedSafari}
            className="w-full h-full object-cover rounded-lg max-h-[500px]"
          />
        )}
        {selectedSafari === 'RWANDA_NORTHERN_PARK' && (
          <img
            src={`/images/rwanda-northern-park.jpg`}
            alt={selectedSafari}
            className="w-full h-full object-cover rounded-lg max-h-[500px]"
          />
        )}
      </figure>
    </section>
  );
};

export default SafarisSection;
