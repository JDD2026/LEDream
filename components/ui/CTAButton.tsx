"use client";

import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type CTAVariant = "primary" | "secondary" | "outline";
export type CTASize = "sm" | "md" | "lg";

export interface CTAButtonProps extends Omit<ButtonProps, "variant" | "size"> {
  /**
   * Button text
   */
  text: string;
  /**
   * Link href (if provided, renders as Link)
   */
  href?: string;
  /**
   * External link (opens in new tab)
   * @default false
   */
  external?: boolean;
  /**
   * Button variant
   * @default "primary"
   */
  variant?: CTAVariant;
  /**
   * Button size
   * @default "md"
   */
  size?: CTASize;
  /**
   * Optional icon component (from lucide-react)
   */
  icon?: LucideIcon;
  /**
   * Icon position
   * @default "right"
   */
  iconPosition?: "left" | "right";
  /**
   * Loading state
   * @default false
   */
  loading?: boolean;
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * CTAButton Component
 * 
 * Primary call-to-action button with neon glow effects.
 * Supports internal links, external links, and button actions.
 * 
 * @example
 * ```tsx
 * <CTAButton 
 *   text="Book Consultation" 
 *   href="https://tally.so/r/b5ZZE7"
 *   variant="primary"
 *   external
 *   icon={ArrowRight}
 * />
 * ```
 */
export function CTAButton({
  text,
  href,
  external = false,
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "right",
  loading = false,
  className,
  onClick,
  ...props
}: CTAButtonProps) {
  const variantClasses = {
    primary:
      "bg-neon-blue text-dark-black border-neon-blue hover:bg-neon-blue-light hover:shadow-neon-blue font-semibold",
    secondary:
      "bg-transparent text-neon-blue border-2 border-neon-blue hover:bg-neon-blue hover:text-dark-black hover:shadow-neon-blue font-semibold",
    outline:
      "bg-transparent text-neutral-white border-2 border-neutral-white/30 hover:border-neon-blue hover:text-neon-blue hover:shadow-neon-blue font-semibold",
  };

  const sizeClasses = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-6 text-base",
    lg: "h-12 px-8 text-lg",
  };

  const buttonContent = (
    <>
      {Icon && iconPosition === "left" && (
        <Icon className="h-4 w-4 md:h-5 md:w-5" />
      )}
      {loading ? "Loading..." : text}
      {Icon && iconPosition === "right" && (
        <Icon className="h-4 w-4 md:h-5 md:w-5" />
      )}
    </>
  );

  const buttonClasses = cn(
    "transition-all duration-normal",
    "hover:scale-105 focus:scale-105",
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if (href) {
    if (external) {
      return (
        <Button
          asChild
          className={buttonClasses}
          disabled={loading}
          {...props}
        >
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2"
          >
            {buttonContent}
          </a>
        </Button>
      );
    }

    return (
      <Button asChild className={buttonClasses} disabled={loading} {...props}>
        <Link href={href} className="inline-flex items-center gap-2">
          {buttonContent}
        </Link>
      </Button>
    );
  }

  return (
    <Button
      className={buttonClasses}
      onClick={onClick}
      disabled={loading}
      {...props}
    >
      {buttonContent}
    </Button>
  );
}

