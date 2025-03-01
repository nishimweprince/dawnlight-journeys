import { useEffect, useState } from 'react';
import OverlayDestinations from './menus/OverlayDestinations';
import { Link } from 'react-router-dom';
import { faArrowRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import OverlayTours from './menus/OverlayTours';
import OverlaySafaris from './menus/OverlaySafaris';

export interface NavbarOverlayProps {
  isOpen?: boolean;
}

const NavbarOverlay = ({ isOpen = false }: NavbarOverlayProps) => {
  // STATE VARIABLES
  const [menuList] = useState([
    {
      label: 'Destinations',
    },
    {
      label: `Tours`,
    },
    {
      label: `Safaris`,
    },
    {
      label: `About`,
      route: `/about`,
    },
    {
      label: `Contact`,
      route: `/contact`,
    },
  ]);

  // STATE VARIABLES
  const [selectedMenu, setSelectedMenu] = useState<string | undefined>(
    undefined
  );
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  // GET SCREEN WIDTH
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main
      className={`${
        isOpen ? 'opacity-100' : 'hidden'
      } transition-all duration-300 w-[100vw] text-white min-h-[100vh] flex flex-col gap-4 bg-black/95 absolute top-25 left-0 right-0 bottom-0 z-[10000]`}
    >
      <section className="w-[70%] max-md:w-[90%] mx-auto flex items-start py-12 justify-center">
        <nav
          className={`max-lg:w-[50%] max-md:w-[70%] max-sm:w-[90%] w-[30%] flex flex-col gap-10 ${
            selectedMenu ? 'max-md:hidden' : 'max-md:flex'
          }`}
        >
          {menuList.map((menu, index) => {
            return (
              <Link
                to={menu?.route || `#`}
                key={index}
                className="text-white flex items-center gap-3 justify-between uppercase text-[16px] font-regular py-2 border-b-[.5px] border-slate-200 hover:border-primary hover:border-b-[1.5px] transition-all"
                onMouseEnter={(e) => {
                  e.preventDefault();
                  if (!menu?.route && screenWidth > 768) {
                    setSelectedMenu(menu.label);
                  } else {
                    setSelectedMenu(undefined);
                  }
                }}
                onClick={(e) => {
                  e.preventDefault();
                  if (!menu?.route) {
                    setSelectedMenu(menu.label);
                  } else {
                    setSelectedMenu(undefined);
                  }
                }}
              >
                {menu.label}
                {selectedMenu === menu?.label && (
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="ml-2 text-primary"
                  />
                )}
              </Link>
            );
          })}
        </nav>
        <section
          className={`w-full px-6 max-md:px-0 ${
            selectedMenu ? 'max-md:flex max-md:flex-col' : 'max-md:hidden'
          }`}
        >
          {selectedMenu && (
            <>
              <Link
                className="flex items-center gap-2 text-white px-6 py-4"
                to={`#`}
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedMenu('');
                }}
              >
                <FontAwesomeIcon icon={faChevronLeft} className="text-[13px]" />
                <p className="text-[15px]">Back</p>
              </Link>
              <hr className="border-gray-600 mb-3 w-[93%] mx-auto" />
            </>
          )}
          {selectedMenu === 'Destinations' && <OverlayDestinations />}
          {selectedMenu === 'Tours' && <OverlayTours />}
          {selectedMenu === 'Safaris' && <OverlaySafaris />}
        </section>
      </section>
    </main>
  );
};

export default NavbarOverlay;
