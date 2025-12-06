"use client";

import { cn } from "@/lib/utils";

export type NeonColor = "red" | "blue" | "purple" | "magenta" | "green" | "multicolor";
export type GlowIntensity = "subtle" | "medium" | "strong";

export interface NeonTextProps {
  /**
   * Text content to display
   */
  text: string;
  /**
   * Neon color variant
   * @default "blue"
   */
  color?: NeonColor;
  /**
   * Glow intensity level
   * @default "medium"
   */
  intensity?: GlowIntensity;
  /**
   * Enable pulsing animation
   * @default false
   */
  animated?: boolean;
  /**
   * Additional CSS classes
   */
  className?: string;
  /**
   * HTML tag to use
   * @default "span"
   */
  as?: "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

/**
 * NeonText Component
 * 
 * Animated text with neon glow effect. Use sparingly for headlines and key elements.
 * 
 * @example
 * ```tsx
 * <NeonText 
 *   text="LEDream" 
 *   color="multicolor" 
 *   intensity="strong" 
 *   animated 
 *   as="h1" 
 * />
 * ```
 */
export function NeonText({
  text,
  color = "blue",
  intensity = "medium",
  animated = false,
  className,
  as: Component = "span",
}: NeonTextProps) {
  const colorClasses = {
    red: "neon-text-red",
    blue: "neon-text-blue",
    purple: "neon-text-purple",
    magenta: "neon-text-magenta",
    green: "neon-text-green",
    multicolor: "neon-text-multicolor",
  };

  const intensityClasses = {
    subtle: "text-shadow-neon-subtle",
    medium: "text-shadow-neon-medium",
    strong: "text-shadow-neon-strong",
  };

  return (
    <Component
      className={cn(
        "font-heading font-bold",
        colorClasses[color],
        intensityClasses[intensity],
        animated && "animate-glow-pulse-slow",
        animated && "will-change-[text-shadow] gpu-accelerated",
        "transition-all duration-normal",
        className
      )}
      style={animated ? { 
        transform: 'translateZ(0)',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        textRendering: 'optimizeLegibility',
        backfaceVisibility: 'hidden'
      } : undefined}
    >
      {text}
    </Component>
  );
}

