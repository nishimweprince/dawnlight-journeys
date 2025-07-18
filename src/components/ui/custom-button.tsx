import React, { forwardRef, HTMLAttributes } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"
import Link from "next/link"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-xs text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-primary/90 border border-primary",
        secondary: "bg-white !text-primary hover:bg-primary/90 border border-primary hover:!text-white",
        outline: "border border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
)

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  href?: string
  children?: React.ReactNode
}

const CustomButton = forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, href, ...props }, ref) => {
  if (href) {
    return (
      <Link href={href} className={cn(buttonVariants({ variant, size, className }))}>
        {props.children}
      </Link>
    )
  }

  return <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
})
CustomButton.displayName = "CustomButton"

export { CustomButton, buttonVariants }
