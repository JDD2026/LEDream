"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project as PortfolioProject } from "@/content/types";

// Legacy interface for backward compatibility
export interface Project {
  title: string;
  description: string;
  category: string;
  image: string;
  imageAlt?: string;
  videoUrl?: string;
  href?: string;
}

export interface ProjectCardProps {
  /**
   * Project data object (portfolio or legacy format)
   */
  project: PortfolioProject | Project;
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * ProjectCard Component
 * 
 * Portfolio project display card with image, category badge, and hover effects.
 * 
 * @example
 * ```tsx
 * <ProjectCard 
 *   project={{
 *     title: "Project Name",
 *     description: "Project description",
 *     category: "Residential",
 *     image: "/projects/project1.jpg",
 *     href: "/portfolio/project1"
 *   }}
 * />
 * ```
 */
export function ProjectCard({
  project,
  className,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Check if it's a portfolio project (has images array) or legacy (has image string)
  const isPortfolioProject = "images" in project;
  const imageSrc = isPortfolioProject
    ? project.images[0] || "/placeholder.jpg"
    : project.image;
  const imageAlt = "imageAlt" in project ? project.imageAlt : project.title;
  const categoryDisplay =
    isPortfolioProject && project.category
      ? project.category.charAt(0).toUpperCase() + project.category.slice(1)
      : project.category;

  // Check if video URL is YouTube (not local file)
  const getYouTubeUrl = (videoUrl?: string): string | null => {
    if (!videoUrl || videoUrl.startsWith("/") || videoUrl === "TBD") {
      return null;
    }
    // Extract YouTube video ID
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = videoUrl.match(regExp);
    if (match && match[2] && match[2].length === 11) {
      return `https://www.youtube.com/watch?v=${match[2]}`;
    }
    // If it's already a YouTube URL, return as is
    if (videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be")) {
      return videoUrl;
    }
    return null;
  };

  const youtubeUrl = isPortfolioProject && "videoUrl" in project
    ? getYouTubeUrl(project.videoUrl)
    : null;
  const externalLink = isPortfolioProject && "externalLink" in project
    ? project.externalLink
    : null;
  const externalLinkLabel = isPortfolioProject && "externalLinkLabel" in project
    ? project.externalLinkLabel || "View Gallery"
    : "View Gallery";

  return (
    <div
      className={cn(
        "group bg-dark-brick rounded-lg overflow-hidden",
        "transition-all duration-normal",
        "hover:scale-[1.02] hover:shadow-lg hover:-translate-y-1",
        "flex flex-col h-full",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden bg-dark-navy flex-shrink-0">
        <Image
          src={imageSrc}
          alt={imageAlt || project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={cn(
            "object-cover transition-all duration-normal",
            isHovered && "brightness-110 scale-105"
          )}
        />
        {/* Neon Frame Overlay - subtle by default, intensifies on hover */}
        <div
          className={cn(
            "absolute inset-0 border-2 border-neon-blue/20 transition-all duration-normal",
            isHovered && "border-neon-blue shadow-neon-blue"
          )}
        />
        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-dark-black/80 backdrop-blur-sm text-neon-blue text-xs font-semibold px-3 py-1 rounded-full border border-neon-blue/50">
            {categoryDisplay}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col min-h-0">
        <h3 className="text-h4 text-neutral-white font-heading mb-2">
          {project.title}
        </h3>
        <p className="text-neutral-white/70 text-sm line-clamp-2 mb-4">
          {project.description}
        </p>
        
        {/* Action Buttons */}
        <div className="flex flex-col gap-2 mt-auto">
          {youtubeUrl && (
            <a
              href={youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm font-semibold transition-all duration-normal border-2 border-neon-blue/30 hover:border-neon-blue bg-transparent text-neon-blue hover:bg-neon-blue hover:text-dark-black"
            >
              <Play className="h-4 w-4" />
              Watch Video
            </a>
          )}
          {externalLink && (
            <a
              href={externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm font-semibold transition-all duration-normal border-2 border-neon-blue/30 hover:border-neon-blue bg-transparent text-neon-blue hover:bg-neon-blue hover:text-dark-black"
            >
              <ExternalLink className="h-4 w-4" />
              {externalLinkLabel}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

