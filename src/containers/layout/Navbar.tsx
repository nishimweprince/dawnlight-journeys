import { Link } from 'react-router-dom';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@/components/inputs/Button';
import NavbarOverlay from './NavbarOverlay';
import { useState } from 'react';

const Navbar = () => {
  // STATE VARIABLES
  const [isOverlayOpen, setIsOverlayOpen] = useState<boolean>(false);

  return (
    <header
      className={`w-full flex items-center justify-center h-25 backdrop-blur-xs fixed top-0 left-0 right-0 z-[10000] ${
        isOverlayOpen ? 'bg-black' : 'bg-black/50'
      }`}
    >
      <nav className="w-[90%] max-md:w-[90%] mx-auto flex items-center gap-3 justify-between">
        <div className="flex items-center gap-4">
          <Link
            to={`#`}
            className="text-white flex items-center uppercase"
            onClick={(e) => {
              e.preventDefault();
              setIsOverlayOpen(!isOverlayOpen);
            }}
          >
            <figure className="p-2 px-3 max-md:p-3 max-md:px-[11.5px] rounded-full border border-white hover:bg-primary hover:border-primary hover:text-white transition-all">
              <FontAwesomeIcon
                icon={isOverlayOpen ? faXmark : faBars}
                className="h-4 w-4 max-md:h-6 max-md:w-6"
              />
            </figure>
          </Link>
          <Link to={`/`} className="text-white flex items-center uppercase">
            Dawnlight Journey
          </Link>
        </div>
        <Button to='/africa/rwanda' onClick={(e) => {
          e.preventDefault();
          const newsletterSection = document.getElementById('newsletter');
          if (newsletterSection) {
            newsletterSection.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
            setTimeout(() => {
              newsletterSection.scrollIntoView({ behavior: 'smooth' });
            }, 300);
          }
        }} className="max-md:hidden bg-black text-white py-2 px-4 rounded text-center">Plan Your Journey</Button>
      </nav>
      <NavbarOverlay setIsOpen={setIsOverlayOpen} isOpen={isOverlayOpen} />
    </header>
  );
};

export default Navbar;
