import { useEffect, useState } from 'react';
import OverlayDestinations from './menus/OverlayDestinations';
import { Link, useNavigate } from 'react-router-dom';
import { faArrowRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import OverlayTours from './menus/OverlayTours';
import OverlaySafaris from './menus/OverlaySafaris';
import Button from '@/components/inputs/Button';

export interface NavbarOverlayProps {
  isOpen?: boolean;
  setIsOpen?: (isOpen: boolean) => void;
}

const NavbarOverlay = ({ isOpen = false, setIsOpen }: NavbarOverlayProps) => {
  // STATE VARIABLES
  const [menuList] = useState([
    {
      label: 'Destinations',
      submenu: true,
    },
    {
      label: 'Tours',
      submenu: true,
    },
    {
      label: 'Safaris',
      submenu: true,
    },
    {
      label: 'About',
      route: '/about',
    },
    {
      label: 'Regions',
      route: '/africa',
      submenu: [
        { label: 'East Africa', route: '/africa/east' },
        { label: 'Southern Africa', route: '/africa/south' },
        { label: 'Central Africa', route: '/africa/central' },
      ]
    },
    {
      label: 'Countries',
      submenu: [
        { label: 'Kenya', route: '/africa/kenya' },
        { label: 'Tanzania', route: '/africa/tanzania' },
        { label: 'Uganda', route: '/africa/uganda' },
        { label: 'Rwanda', route: '/africa/rwanda' },
        { label: 'South Africa', route: '/africa/south-africa' },
        { label: 'Botswana', route: '/africa/botswana' },
        { label: 'Namibia', route: '/africa/namibia' },
        { label: 'Zimbabwe', route: '/africa/zimbabwe' },
      ]
    },
    {
      label: 'Contact',
      route: '/contact',
    },
  ]);

  // NAVIGATION
  const navigate = useNavigate();

  // STATE VARIABLES
  const [selectedMenu, setSelectedMenu] = useState<string | undefined>(undefined);
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
              <div key={index} className="flex flex-col gap-2">
                <Link
                  to={menu?.route || `#`}
                  className="text-white flex items-center gap-3 justify-between uppercase text-[16px] font-regular py-2 border-b-[.5px] border-slate-200 hover:border-primary hover:border-b-[1.5px] transition-all"
                  onMouseEnter={(e) => {
                    e.preventDefault();
                    if (menu.submenu && screenWidth > 768) {
                      setSelectedMenu(menu.label);
                    }
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    if (menu.submenu === true) {
                      setSelectedMenu(menu.label);
                    } else if (menu.route) {
                      if (menu?.route === '/contact') {
                        const newsletterSection = document.getElementById('newsletter');
                        if (newsletterSection) {
                          newsletterSection.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start',
                            inline: 'nearest',
                          }); 
                        }
                      } else {
                        navigate(menu.route);
                      }
                      if (setIsOpen) setIsOpen(false);
                    }
                  }}
                >
                  {menu.label}
                  {(menu.submenu || selectedMenu === menu?.label) && (
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="ml-2 text-primary"
                    />
                  )}
                </Link>
                {/* Show submenu items directly on mobile */}
                {menu.submenu && Array.isArray(menu.submenu) && screenWidth <= 768 && (
                  <div className="pl-4 flex flex-col gap-2">
                    {menu.submenu.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem.route}
                        className="text-white/80 hover:text-white text-[14px] py-1"
                        onClick={() => {
                          if (setIsOpen) setIsOpen(false);
                        }}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
          <Button
            onClick={() => {
              const newsletterSection = document.getElementById('newsletter');
              if (newsletterSection) {
                if (setIsOpen) setIsOpen(false);
                newsletterSection.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                  inline: 'nearest',
                });
              }
            }}
            className="min-md:hidden bg-black text-white py-2 px-4 text-center rounded"
          >
            Craft Your Experiences
          </Button>
        </nav>
        
        {/* Submenu Content */}
        <section
          className={`w-full px-6 max-md:px-0 ${
            selectedMenu ? 'max-md:flex max-md:flex-col' : 'max-md:hidden'
          }`}
        >
          {selectedMenu && (
            <>
              <Link
                className="items-center gap-2 text-white px-6 py-4 hidden max-md:flex"
                to="#"
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedMenu(undefined);
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
          {selectedMenu && menuList.find(m => m.label === selectedMenu)?.submenu && Array.isArray(menuList.find(m => m.label === selectedMenu)?.submenu) && (
            <div className="grid grid-cols-2 gap-4 p-6">
              {(menuList.find(m => m.label === selectedMenu)?.submenu as { label: string; route: string }[]).map((item, index) => (
                <Link
                  key={index}
                  to={item.route}
                  className="text-white/80 hover:text-white text-[16px] py-2"
                  onClick={() => {
                    if (setIsOpen) setIsOpen(false);
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </section>
      </section>
    </main>
  );
};

export default NavbarOverlay;
