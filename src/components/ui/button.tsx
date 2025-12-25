import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold font-body ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-purple-light shadow-elegant hover:shadow-luxury hover:scale-[1.02]",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border-2 border-input bg-background hover:bg-accent hover:text-accent-foreground hover:border-accent",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent/10 hover:text-accent",
        link: "text-primary underline-offset-4 hover:underline",
        // Premium DGF Variants
        accent: "bg-gradient-to-r from-orange to-orange-light text-accent-foreground font-bold shadow-glow-orange hover:shadow-[0_15px_50px_hsl(30_95%_55%_/_0.5)] hover:scale-[1.03] animate-pulse-glow",
        hero: "bg-primary/90 backdrop-blur-md text-primary-foreground border border-primary-foreground/20 hover:bg-primary hover:shadow-luxury",
        "hero-outline": "bg-transparent border-2 border-primary-foreground/80 text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold",
        premium: "bg-gradient-to-r from-purple-dark via-primary to-purple-light text-primary-foreground shadow-glow-purple hover:shadow-[0_15px_50px_hsl(270_60%_35%_/_0.5)] hover:scale-[1.03]",
        "premium-outline": "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground shadow-elegant hover:shadow-luxury",
        glass: "glass text-primary-foreground hover:bg-white/20",
      },
      size: {
        default: "h-11 px-5 py-2",
        sm: "h-9 rounded-lg px-4",
        lg: "h-13 rounded-xl px-8 text-base",
        xl: "h-16 rounded-2xl px-12 text-lg",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
