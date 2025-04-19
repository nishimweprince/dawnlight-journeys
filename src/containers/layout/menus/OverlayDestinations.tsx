import { useMemo } from 'react';
import { Link } from 'react-router-dom';

const OverlayDestinations = () => {
  const menuList = useMemo(
    () => [
      {
        label: 'Rwanda',
        route: '/africa/rwanda',
      },
    ],
    []
  );

  return (
    <section className="w-full flex flex-col gap-4 px-6 py-2">
      {menuList?.map((menu, index) => (
        <Link
          to={menu?.route}
          key={index}
          className="text-white hover:underline hover:decoration-primary hover:underline-offset-4"
        >
          {menu.label}
        </Link>
      ))}
    </section>
  );
};

export default OverlayDestinations;
