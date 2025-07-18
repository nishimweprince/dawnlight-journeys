import React, { forwardRef, HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";
import Link from "next/link";

const flatButtonVariants = cva(
  // Base flat design styles - no shadows, gradients, or 3D effects
  "inline-flex items-center justify-center rounded-xs text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-0 shadow-none",
  {
    variants: {
      variant: {
        // Flat primary button with brand colors
        primary: "bg-primary text-white hover:bg-primary/90 focus:bg-primary/90",
        // Flat secondary button
        secondary: "bg-secondary text-white hover:bg-secondary/90 focus:bg-secondary/90",
        // Flat outline button
        outline: "border border-gray-300 bg-transparent text-gray-700 hover:bg-gray-50 focus:bg-gray-50",
        // Flat ghost button
        ghost: "bg-transparent text-gray-700 hover:bg-gray-100 focus:bg-gray-100",
        // Flat link button
        link: "bg-transparent text-orange-600 hover:text-orange-700 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3 py-1.5",
        lg: "h-11 px-8 py-2.5",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface FlatButtonProps 
  extends HTMLAttributes<HTMLButtonElement>, 
  VariantProps<typeof flatButtonVariants> {
  href?: string;
  children?: React.ReactNode;
}

const FlatButton = forwardRef<HTMLButtonElement, FlatButtonProps>(
  ({ className, variant, size, href, ...props }, ref) => {
    if (href) {
      return (
        <Link 
          href={href} 
          className={cn(flatButtonVariants({ variant, size, className }))}
        >
          {props.children}
        </Link>
      );
    }

    return (
      <button 
        className={cn(flatButtonVariants({ variant, size, className }))} 
        ref={ref} 
        {...props} 
      />
    );
  }
);

FlatButton.displayName = "FlatButton";

export { FlatButton, flatButtonVariants };