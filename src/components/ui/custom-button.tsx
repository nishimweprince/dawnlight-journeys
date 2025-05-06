import React, { forwardRef, HTMLAttributes } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-[#4A6741] text-white hover:bg-[#3A5331] shadow-md border border-[#4A6741]",
        secondary: "bg-[#D9B166] text-[#3A2E1C] hover:bg-[#C9A156] shadow-sm",
        outline: "border border-white/80 bg-transparent text-white hover:bg-white/10",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
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
      <a href={href} className={cn(buttonVariants({ variant, size, className }))}>
        {props.children}
      </a>
    )
  }

  return <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
})
CustomButton.displayName = "CustomButton"

export { CustomButton, buttonVariants }
