"use client";

import { useState, useMemo } from "react";
import { ProjectCard } from "./ProjectCard";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import type { Project } from "@/content/types";
import { Diamond } from "lucide-react";

export type ProjectCategory = "all" | "residential" | "commercial" | "event";

export interface ProjectGridProps {
  /**
   * Array of projects to display
   */
  projects: Project[];
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
 * ProjectGrid Component
 * 
 * Responsive grid layout for portfolio projects with category filtering.
 * Includes filter bar and animated grid transitions.
 * 
 * @example
 * ```tsx
 * <ProjectGrid 
 *   projects={projects}
 *   onProjectClick={(project) => openModal(project)}
 * />
 * ```
 */
export function ProjectGrid({
  projects,
  loading = false,
  className,
}: ProjectGridProps) {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");

  const categories: { value: ProjectCategory; label: string }[] = [
    { value: "all", label: "All" },
    { value: "residential", label: "Residential" },
    { value: "commercial", label: "Commercial" },
    { value: "event", label: "Events" },
  ];

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") {
      return projects;
    }
    return projects.filter(
      (project) => project.category === activeFilter
    );
  }, [projects, activeFilter]);

  const handleFilterChange = (category: ProjectCategory) => {
    setActiveFilter(category);
  };

  if (loading) {
    return (
      <div className={cn("space-y-8", className)}>
        {/* Filter Bar Skeleton */}
        <div className="flex flex-wrap gap-4 justify-center">
          {categories.map((category) => (
            <Skeleton key={category.value} className="h-10 w-24" />
          ))}
        </div>
        {/* Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <Skeleton key={i} className="aspect-video rounded-lg" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={cn("space-y-8", className)}>
      {/* Filter Bar */}
      <div className="sticky top-0 z-40 bg-dark-black/95 backdrop-blur-sm py-4 -mx-4 px-4 md:static md:bg-transparent md:backdrop-blur-none md:py-0 md:mx-0">
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
          {categories.map((category, index) => (
            <div key={category.value} className="flex items-center gap-2 md:gap-4">
              <button
                onClick={() => handleFilterChange(category.value)}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-semibold transition-all duration-normal",
                  "min-h-[44px] min-w-[80px]",
                  activeFilter === category.value
                    ? "bg-neon-blue text-dark-black shadow-neon-blue"
                    : "bg-transparent text-neutral-white border-2 border-neon-blue/30 hover:border-neon-blue/60 hover:text-neon-blue"
                )}
                aria-pressed={activeFilter === category.value}
                aria-label={`Filter by ${category.label}`}
              >
                {category.label}
              </button>
              {index < categories.length - 1 && (
                <Diamond className="h-3 w-3 text-neon-blue/30 hidden md:block" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-neutral-white/60 text-lg mb-4">
            No projects in this category yet
          </p>
          <p className="text-neutral-white/40 text-sm">
            Check back soon for new additions to our portfolio
          </p>
        </div>
      ) : (
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
          role="list"
        >
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              role="listitem"
              className="animate-fade-in h-full"
              style={{
                animationDelay: `${index * 50}ms`,
                animationFillMode: "both",
              }}
            >
              <ProjectCard
                project={project}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

