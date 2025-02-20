import { Heading } from '@/components/inputs/TextInputs';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';

const OverlayTours = () => {
  // STATE VARIABLES
  const menuList = useMemo(
    () => [
      {
        label: `Akagera National Park`,
        subMenu: [
          {
            label: '1 Day Akagera National Park Safari',
            route: '/tours/akagera-national-park-safari',
          },
          {
            label: '2 Day Rwanda Gorilla Safari',
            route: '/tours/rwanda-gorilla-safari',
          },
          {
            label: '3 Day Uganda Safari',
            route: '/tours/uganda-safari',
          },
        ],
      },
      {
        label: `Nyungwe National Park`,
        subMenu: [
          {
            label: '1 Day Nyungwe National Park Safari',
            route: '/tours/nyungwe-national-park-safari',
          },
          {
            label: '2 Day Rwanda Gorilla Safari',
            route: '/tours/rwanda-gorilla-safari',
          },
          {
            label: '3 Day Uganda Safari',
            route: '/tours/uganda-safari',
          },
        ],
      },
    ],
    []
  );

  return (
    <section className="w-full grid grid-rows-2 gap-8 px-6 py-2">
      {menuList?.map((menu, index, arr) => {
        return (
          <menu className="w-full flex flex-col gap-5">
            <Heading>{menu.label}</Heading>
            <ul className="w-full flex flex-col gap-4">
              {menu.subMenu?.map((subMenu, index) => (
                <Link
                  to={subMenu.route}
                  key={index}
                  className="text-white hover:underline hover:decoration-primary hover:underline-offset-4"
                >
                  {subMenu.label}
                </Link>
              ))}
            </ul>
            {index !== arr.length - 1 && (
              <hr className="w-[100%] border-t-[1px] border-primary" />
            )}
          </menu>
        );
      })}
    </section>
  );
};

export default OverlayTours;
