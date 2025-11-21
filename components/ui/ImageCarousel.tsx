"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImageCarouselProps {
  images: string[];
  className?: string;
}

export function ImageCarousel({ images, className }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = useCallback((index: number) => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const containerWidth = container.clientWidth;
    const isDesktop = window.innerWidth >= 1024;
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
    
    let scrollTo: number;
    
    if (isDesktop) {
      // Desktop: 3 images visible, each takes 1/3 of width
      scrollTo = (containerWidth / 3) * index;
    } else if (isTablet) {
      // Tablet: 1 image visible with partial prev/next, each image is 80% width
      scrollTo = (containerWidth * 0.8) * index;
    } else {
      // Mobile: 1 image visible, full width
      scrollTo = containerWidth * index;
    }
    
    container.scrollTo({ left: scrollTo, behavior: 'smooth' });
  }, []);

  // Handle scroll to update current index
  const handleScroll = () => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const scrollLeft = container.scrollLeft;
    const containerWidth = container.clientWidth;
    const isDesktop = window.innerWidth >= 1024;
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
    
    let index: number;
    
    if (isDesktop) {
      index = Math.round(scrollLeft / (containerWidth / 3));
    } else if (isTablet) {
      index = Math.round(scrollLeft / (containerWidth * 0.8));
    } else {
      index = Math.round(scrollLeft / containerWidth);
    }
    
    setCurrentIndex(index);
  };

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % images.length;
        scrollToIndex(next);
        return next;
      });
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [images.length, scrollToIndex]);

  return (
    <div className={cn("relative w-full", className)}>
      <div
        ref={containerRef}
        className="flex snap-x snap-mandatory overflow-x-auto scrollbar-hide scroll-smooth"
        onScroll={handleScroll}
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className={cn(
              "relative flex-shrink-0 snap-center",
              // Mobile: full width, 1 image
              "w-full",
              // Tablet: 80% width, 1 image with partial prev/next visible
              "md:w-4/5",
              // Desktop: 1/3 width, 3 images visible
              "lg:w-1/3"
            )}
          >
            <div className="relative mx-2 md:mx-4 lg:mx-2">
              <div className="relative w-full aspect-[16/9] overflow-hidden rounded-sm border-2 border-neutral-white/20 hover:border-neutral-white/40 transition-colors">
                <img
                  src={src}
                  alt={`LEDream installation ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              currentIndex === index
                ? "bg-neon-blue w-8"
                : "bg-neutral-white/30 hover:bg-neutral-white/50"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

