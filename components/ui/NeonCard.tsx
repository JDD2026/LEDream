"use client";

import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type NeonCardVariant = "blue" | "purple" | "magenta" | "green";

export interface NeonCardProps {
  /**
   * Neon color variant for border glow
   * @default "blue"
   */
  variant?: NeonCardVariant;
  /**
   * Card title
   */
  title?: string;
  /**
   * Card description
   */
  description?: string;
  /**
   * Optional icon component (from lucide-react)
   */
  icon?: LucideIcon;
  /**
   * Additional CSS classes
   */
  className?: string;
  /**
   * Child content
   */
  children?: React.ReactNode;
  /**
   * Click handler
   */
  onClick?: () => void;
}

/**
 * NeonCard Component
 * 
 * Card with subtle neon border glow. Clean, professional styling inspired by LED Strip Studio.
 * 
 * @example
 * ```tsx
 * <NeonCard 
 *   variant="blue" 
 *   title="Feature" 
 *   description="Description text"
 *   icon={Sparkles}
 * >
 *   Additional content
 * </NeonCard>
 * ```
 */
export function NeonCard({
  variant = "blue",
  title,
  description,
  icon: Icon,
  className,
  children,
  onClick,
}: NeonCardProps) {
  const variantClasses = {
    blue: "border-neon-blue shadow-neon-blue",
    purple: "border-neon-purple shadow-neon-purple",
    magenta: "border-neon-magenta shadow-neon-magenta",
    green: "border-neon-green shadow-neon-green",
  };

  const iconColorClasses = {
    blue: "text-neon-blue",
    purple: "text-neon-purple",
    magenta: "text-neon-magenta",
    green: "text-neon-green",
  };

  return (
    <div
      className={cn(
        "bg-dark-brick border-2 rounded-lg p-6 md:p-8",
        "transition-all duration-normal",
        "hover:scale-[1.02] hover:shadow-lg",
        variantClasses[variant],
        onClick && "cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      {Icon && (
        <div className="mb-4">
          <Icon className={cn("h-8 w-8", iconColorClasses[variant])} />
        </div>
      )}
      {title && (
        <h3 className="text-h3 text-neutral-white mb-2 font-heading">
          {title}
        </h3>
      )}
      {description && (
        <p className="text-neutral-white/80 text-sm leading-relaxed mb-4">
          {description}
        </p>
      )}
      {children}
    </div>
  );
}

