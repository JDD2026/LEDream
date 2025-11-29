"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { VideoEmbed } from "@/components/ui/VideoEmbed";
import { CTAButton } from "@/components/ui/CTAButton";
import { NeonText } from "@/components/animations/NeonText";
import { cn } from "@/lib/utils";
import type { Project } from "@/content/types";
import { contactInfo } from "@/content/site";

export interface ProjectDetailModalProps {
  /**
   * Current project to display
   */
  project: Project | null;
  /**
   * All projects for navigation
   */
  allProjects: Project[];
  /**
   * Open state
   */
  open: boolean;
  /**
   * Close handler
   */
  onClose: () => void;
}

/**
 * ProjectDetailModal Component
 * 
 * Full-screen modal for displaying detailed project information with
 * video, images, and navigation between projects.
 * 
 * @example
 * ```tsx
 * <ProjectDetailModal
 *   project={selectedProject}
 *   allProjects={projects}
 *   open={isOpen}
 *   onClose={() => setIsOpen(false)}
 * />
 * ```
 */
export function ProjectDetailModal({
  project,
  allProjects,
  open,
  onClose,
}: ProjectDetailModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) return null;

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < allProjects.length - 1;

  const previousProject = hasPrevious ? allProjects[currentIndex - 1] : null;
  const nextProject = hasNext ? allProjects[currentIndex + 1] : null;

  // Reset image index when project changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [project.id]);

  // Keyboard navigation
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft" && hasPrevious) {
        handlePrevious();
      } else if (e.key === "ArrowRight" && hasNext) {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [open, hasPrevious, hasNext, project.id]);

  const handlePrevious = () => {
    if (previousProject) {
      setCurrentImageIndex(0);
      // Dispatch custom event for parent to handle
      const event = new CustomEvent("navigateProject", {
        detail: { projectId: previousProject.id },
      });
      window.dispatchEvent(event);
    }
  };

  const handleNext = () => {
    if (nextProject) {
      setCurrentImageIndex(0);
      // Dispatch custom event for parent to handle
      const event = new CustomEvent("navigateProject", {
        detail: { projectId: nextProject.id },
      });
      window.dispatchEvent(event);
    }
  };

  const categoryDisplay =
    project.category.charAt(0).toUpperCase() + project.category.slice(1);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        className="max-w-[1200px] w-full p-0 gap-0 max-h-[95vh] overflow-hidden"
        showCloseButton={false}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className={cn(
            "absolute right-4 top-4 z-50 rounded-sm opacity-70",
            "ring-offset-background transition-opacity",
            "hover:opacity-100 focus:outline-none focus:ring-2",
            "focus:ring-neon-blue focus:ring-offset-2",
            "text-neutral-white hover:text-neon-blue",
            "h-10 w-10 flex items-center justify-center",
            "bg-dark-black/80 backdrop-blur-sm rounded-full border border-neon-blue/30"
          )}
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Navigation Arrows */}
        {hasPrevious && (
          <button
            onClick={handlePrevious}
            className={cn(
              "absolute left-4 top-1/2 -translate-y-1/2 z-50",
              "h-12 w-12 flex items-center justify-center",
              "bg-dark-black/80 backdrop-blur-sm rounded-full",
              "border border-neon-blue/30 text-neon-blue",
              "hover:bg-neon-blue hover:text-dark-black",
              "transition-all duration-normal",
              "focus:outline-none focus:ring-2 focus:ring-neon-blue"
            )}
            aria-label="Previous project"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
        )}

        {hasNext && (
          <button
            onClick={handleNext}
            className={cn(
              "absolute right-4 top-1/2 -translate-y-1/2 z-50",
              "h-12 w-12 flex items-center justify-center",
              "bg-dark-black/80 backdrop-blur-sm rounded-full",
              "border border-neon-blue/30 text-neon-blue",
              "hover:bg-neon-blue hover:text-dark-black",
              "transition-all duration-normal",
              "focus:outline-none focus:ring-2 focus:ring-neon-blue"
            )}
            aria-label="Next project"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        )}

        {/* Scrollable Content */}
        <div className="overflow-y-auto max-h-[95vh]">
          {/* Header Section */}
          <div className="p-6 md:p-8 border-b border-neon-blue/20">
            <DialogHeader>
              <DialogTitle className="text-left">
                <NeonText
                  text={project.title}
                  color="blue"
                  intensity="medium"
                  as="h1"
                  className="text-2xl md:text-3xl lg:text-4xl mb-4"
                />
              </DialogTitle>
            </DialogHeader>

            {/* Category and Tags */}
            <div className="flex flex-wrap items-center gap-3 mt-4">
              <span className="bg-neon-blue/20 text-neon-blue text-xs font-semibold px-3 py-1 rounded-full border border-neon-blue/50">
                {categoryDisplay}
              </span>
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-dark-navy text-neutral-white/70 text-xs px-3 py-1 rounded-full border border-neutral-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Client and Location */}
            {(project.client || project.location) && (
              <div className="mt-4 space-y-1 text-sm text-neutral-white/60">
                {project.client && <p>Client: {project.client}</p>}
                {project.location && <p>Location: {project.location}</p>}
              </div>
            )}
          </div>

          {/* Video Section */}
          {project.videoUrl && (
            <div className="p-6 md:p-8 border-b border-neon-blue/20">
              <VideoEmbed
                videoUrl={project.videoUrl}
                title={project.title}
                lazy={false}
              />
            </div>
          )}

          {/* Description */}
          <div className="p-6 md:p-8 border-b border-neon-blue/20">
            <p className="text-neutral-white/80 leading-relaxed text-base md:text-lg">
              {project.description}
            </p>
            {/* External Link */}
            {project.externalLink && (
              <div className="mt-6">
                <CTAButton
                  text={project.externalLinkLabel || "View Gallery"}
                  href={project.externalLink}
                  external
                  variant="secondary"
                  size="md"
                />
              </div>
            )}
          </div>

          {/* Image Gallery */}
          {project.images && project.images.length > 0 && (
            <div className="p-6 md:p-8 border-b border-neon-blue/20">
              <h3 className="text-h4 text-neutral-white font-heading mb-4">
                Project Gallery
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.images.map((image, index) => (
                  <div
                    key={index}
                    className={cn(
                      "relative aspect-video rounded-lg overflow-hidden",
                      "border-2 border-neon-blue/30",
                      "transition-all duration-normal",
                      "hover:border-neon-blue hover:shadow-neon-blue"
                    )}
                  >
                    <Image
                      src={image}
                      alt={`${project.title} - Image ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Highlights */}
          <div className="p-6 md:p-8 border-b border-neon-blue/20">
            <h3 className="text-h4 text-neutral-white font-heading mb-4">
              Key Highlights
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Sparkles className="h-5 w-5 text-neon-blue mt-0.5 flex-shrink-0" />
                <span className="text-neutral-white/80">
                  Custom LED installation tailored to your space
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Sparkles className="h-5 w-5 text-neon-blue mt-0.5 flex-shrink-0" />
                <span className="text-neutral-white/80">
                  Immersive design that transforms your environment
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Sparkles className="h-5 w-5 text-neon-blue mt-0.5 flex-shrink-0" />
                <span className="text-neutral-white/80">
                  Professional installation and support
                </span>
              </li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="p-6 md:p-8 bg-gradient-to-br from-dark-navy via-dark-brick to-dark-navy">
            <div className="text-center space-y-6">
              <div>
                <h3 className="text-h3 text-neutral-white font-heading mb-2">
                  Inspired by this project?
                </h3>
                <p className="text-neutral-white/70">
                  Every project begins with a vision. Let's bring yours to life.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CTAButton
                  text="Start Your Journey"
                  href={contactInfo.consultationForm}
                  external
                  variant="primary"
                  size="lg"
                />
                <CTAButton
                  text="View Our Services"
                  href="/services"
                  variant="secondary"
                  size="lg"
                />
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

