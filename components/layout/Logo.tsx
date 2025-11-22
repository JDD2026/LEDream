"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

/**
 * LEDream Logo Component
 * Video logo with PNG fallback for browsers that don't support video
 */
export function Logo({ className, size = "md" }: LogoProps) {
  // Use local video logo file
  const logoVideoUrl = "/LEDream-Video-logo.mp4";
  const [useFallback, setUseFallback] = useState(false);

  const sizeClasses = {
    sm: "h-[30px] w-auto",
    md: "h-[40px] md:h-[50px] w-auto",
    lg: "h-[50px] md:h-[60px] w-auto",
    xl: "h-[60px] md:h-[80px] w-auto",
  };

  const handleVideoError = () => {
    setUseFallback(true);
  };

  return (
    <Link
      href="/"
      className={cn(
        "inline-block transition-all duration-normal",
        "hover:scale-105 hover:brightness-110",
        "focus:outline-none focus:ring-2 focus:ring-neon-blue focus:ring-offset-2 focus:ring-offset-dark-black rounded-sm",
        sizeClasses[size],
        className
      )}
      aria-label="LEDream Home"
    >
      {useFallback ? (
        <Image
          src="/LEDream logo.png"
          alt="LEDream Logo"
          width={200}
          height={60}
          className={cn("h-full w-auto object-contain", sizeClasses[size])}
          priority
        />
      ) : (
        <video
          src={logoVideoUrl}
          autoPlay
          loop
          muted
          playsInline
          onError={handleVideoError}
          className={cn("h-full w-auto object-contain", sizeClasses[size])}
          aria-hidden="true"
        />
      )}
    </Link>
  );
}

