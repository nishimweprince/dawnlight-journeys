import { MouseEventHandler, ReactNode } from 'react';
import { Link } from 'react-router-dom';

export interface ButtonProps {
  to?: string;
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler;
}

const Button = ({ to = `#`, children, className, onClick }: ButtonProps) => {
  return (
    <Link
      to={to}
      className={`bg-primary text-white px-4 py-2 rounded-[1px] uppercase hover:bg-primary/80 hover:text-white transition-all ${className}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Button;
