import { useMemo } from 'react';
import { Link } from 'react-router-dom';

const OverlaySafaris = () => {
  // STATE VARIABLES
  const menuList = useMemo(() => {
    return [
      {
        label: 'Rwanda Gorilla Trekking',
        route: '/rwanda-gorilla-trekking',
      },
      {
        label: `Rwanda Northern Safari`,
        route: '/rwanda-northern-safari',
      },
    ];
  }, []);

  return (
    <section className="w-full grid grid-rows-2 gap-8 px-6 py-2">
      {menuList?.map((menu, index) => {
        return (
          <Link key={index} to={menu?.route} className="text-white hover:underline hover:decoration-primary hover:underline-offset-4">
            {menu.label}
          </Link>
        );
      })}
    </section>
  );
};

export default OverlaySafaris;
