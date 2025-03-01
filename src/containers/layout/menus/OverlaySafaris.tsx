import { safariMenuList } from '@/constants/navbar.constants';
import { capitalizeString } from '@/helpers/strings.helper';
import { Link } from 'react-router-dom';

const OverlaySafaris = () => {
  // STATE VARIABLES

  return (
    <section className="w-full grid grid-rows-2 gap-8 px-6 py-2">
      {safariMenuList?.map((menu, index) => {
        return (
          <Link
            key={index}
            to={menu?.route}
            className="text-white hover:underline hover:decoration-primary hover:underline-offset-4"
          >
            {capitalizeString(menu?.label)}
          </Link>
        );
      })}
    </section>
  );
};

export default OverlaySafaris;
