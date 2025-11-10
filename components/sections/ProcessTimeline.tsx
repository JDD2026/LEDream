"use client";

import { useState } from "react";
import {
  MessageSquare,
  Wrench,
  GraduationCap,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import type { ProcessStep } from "@/content/types";
import { cn } from "@/lib/utils";
import { FadeInOnScroll } from "@/components/ui/FadeInOnScroll";

interface ProcessTimelineProps {
  steps: ProcessStep[];
  className?: string;
}

const iconMap = {
  consultation: MessageSquare,
  installation: Wrench,
  training: GraduationCap,
};

const stepColors = {
  1: "blue",
  2: "purple",
  3: "magenta",
} as const;

/**
 * ProcessTimeline Component
 * 
 * Displays a vertical timeline on mobile and horizontal/vertical on desktop
 * with connecting lines, step cards, and expandable "What to expect" sections.
 */
export function ProcessTimeline({ steps, className }: ProcessTimelineProps) {
  const [expandedSteps, setExpandedSteps] = useState<Set<number>>(new Set());

  const toggleStep = (stepNumber: number) => {
    const newExpanded = new Set(expandedSteps);
    if (newExpanded.has(stepNumber)) {
      newExpanded.delete(stepNumber);
    } else {
      newExpanded.add(stepNumber);
    }
    setExpandedSteps(newExpanded);
  };

  return (
    <div className={cn("relative", className)}>
      {/* Desktop: Horizontal Timeline */}
      <div className="hidden lg:block">
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-magenta opacity-30" />
          
          <div className="grid grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = iconMap[step.icon];
              const color = stepColors[step.step as keyof typeof stepColors] || "blue";
              const isExpanded = expandedSteps.has(step.step);
              const isLast = index === steps.length - 1;

              return (
                <FadeInOnScroll key={step.step} delay={index * 150}>
                  <div className="relative">
                    {/* Step Card */}
                    <div
                      className={cn(
                        "bg-dark-brick border-2 rounded-lg p-6 md:p-8",
                        "transition-all duration-normal",
                        "hover:scale-[1.02] hover:shadow-lg",
                        color === "blue" && "border-neon-blue shadow-neon-blue/20",
                        color === "purple" && "border-neon-purple shadow-neon-purple/20",
                        color === "magenta" && "border-neon-magenta shadow-neon-magenta/20"
                      )}
                    >
                      {/* Step Number */}
                      <div className="flex items-center justify-between mb-4">
                        <div
                          className={cn(
                            "text-6xl font-black leading-none",
                            color === "blue" && "text-neon-blue",
                            color === "purple" && "text-neon-purple",
                            color === "magenta" && "text-neon-magenta"
                          )}
                        >
                          {String(step.step).padStart(2, "0")}
                        </div>
                        {/* Icon */}
                        <div
                          className={cn(
                            "p-3 rounded-lg border-2",
                            color === "blue" && "border-neon-blue/30 bg-neon-blue/10",
                            color === "purple" && "border-neon-purple/30 bg-neon-purple/10",
                            color === "magenta" && "border-neon-magenta/30 bg-neon-magenta/10"
                          )}
                        >
                          <Icon
                            className={cn(
                              "h-6 w-6",
                              color === "blue" && "text-neon-blue",
                              color === "purple" && "text-neon-purple",
                              color === "magenta" && "text-neon-magenta"
                            )}
                          />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-h4 text-neutral-white font-heading mb-3">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-neutral-white/80 text-sm leading-relaxed mb-4">
                        {step.description}
                      </p>

                      {/* Timeline Badge */}
                      {step.timeline && (
                        <div
                          className={cn(
                            "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4",
                            color === "blue" && "bg-neon-blue/20 text-neon-blue border border-neon-blue/30",
                            color === "purple" && "bg-neon-purple/20 text-neon-purple border border-neon-purple/30",
                            color === "magenta" && "bg-neon-magenta/20 text-neon-magenta border border-neon-magenta/30"
                          )}
                        >
                          <span>{step.timeline}</span>
                        </div>
                      )}

                      {/* What to Expect Toggle */}
                      {step.whatToExpect && step.whatToExpect.length > 0 && (
                        <div>
                          <button
                            onClick={() => toggleStep(step.step)}
                            className={cn(
                              "flex items-center gap-2 text-sm font-semibold transition-colors",
                              "hover:text-neon-blue focus:outline-none",
                              color === "blue" && "text-neon-blue",
                              color === "purple" && "text-neon-purple",
                              color === "magenta" && "text-neon-magenta"
                            )}
                          >
                            <span>What to expect</span>
                            {isExpanded ? (
                              <ChevronUp className="h-4 w-4" />
                            ) : (
                              <ChevronDown className="h-4 w-4" />
                            )}
                          </button>

                          {/* Expandable Content */}
                          <div
                            className={cn(
                              "overflow-hidden transition-all duration-300",
                              isExpanded ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
                            )}
                          >
                            <ul className="space-y-2">
                              {step.whatToExpect.map((item, itemIndex) => (
                                <li
                                  key={itemIndex}
                                  className="flex items-start gap-3 text-sm text-neutral-white/70"
                                >
                                  <div
                                    className={cn(
                                      "h-1.5 w-1.5 rounded-full mt-2 flex-shrink-0",
                                      color === "blue" && "bg-neon-blue",
                                      color === "purple" && "bg-neon-purple",
                                      color === "magenta" && "bg-neon-magenta"
                                    )}
                                  />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Connection Point Indicator */}
                    {!isLast && (
                      <div className="absolute -right-4 top-24 z-20">
                        <div
                          className={cn(
                            "h-3 w-3 rounded-full border-2",
                            color === "blue" && "bg-neon-blue border-neon-blue",
                            color === "purple" && "bg-neon-purple border-neon-purple",
                            color === "magenta" && "bg-neon-magenta border-neon-magenta"
                          )}
                        />
                      </div>
                    )}

                    {/* End Marker for Last Step */}
                    {isLast && (
                      <div className="absolute -right-4 top-24 z-20">
                        <CheckCircle2
                          className={cn(
                            "h-6 w-6",
                            color === "magenta" && "text-neon-magenta"
                          )}
                        />
                      </div>
                    )}
                  </div>
                </FadeInOnScroll>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile: Vertical Timeline */}
      <div className="lg:hidden">
        <div className="relative">
          {/* Vertical Connecting Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-blue via-neon-purple to-neon-magenta opacity-30" />

          <div className="space-y-12 relative">
            {steps.map((step, index) => {
              const Icon = iconMap[step.icon];
              const color = stepColors[step.step as keyof typeof stepColors] || "blue";
              const isExpanded = expandedSteps.has(step.step);
              const isLast = index === steps.length - 1;

              return (
                <FadeInOnScroll key={step.step} delay={index * 150}>
                  <div className="relative pl-20">
                    {/* Connection Point */}
                    <div className="absolute left-6 top-6 z-20">
                      <div
                        className={cn(
                          "h-4 w-4 rounded-full border-2 bg-dark-brick",
                          color === "blue" && "border-neon-blue",
                          color === "purple" && "border-neon-purple",
                          color === "magenta" && "border-neon-magenta"
                        )}
                      />
                    </div>

                    {/* End Marker for Last Step */}
                    {isLast && (
                      <div className="absolute left-5 top-6 z-20">
                        <CheckCircle2
                          className={cn(
                            "h-6 w-6",
                            color === "magenta" && "text-neon-magenta"
                          )}
                        />
                      </div>
                    )}

                    {/* Step Card */}
                    <div
                      className={cn(
                        "bg-dark-brick border-2 rounded-lg p-6",
                        "transition-all duration-normal",
                        "hover:scale-[1.01] hover:shadow-lg",
                        color === "blue" && "border-neon-blue shadow-neon-blue/20",
                        color === "purple" && "border-neon-purple shadow-neon-purple/20",
                        color === "magenta" && "border-neon-magenta shadow-neon-magenta/20"
                      )}
                    >
                      {/* Step Number and Icon */}
                      <div className="flex items-center justify-between mb-4">
                        <div
                          className={cn(
                            "text-5xl font-black leading-none",
                            color === "blue" && "text-neon-blue",
                            color === "purple" && "text-neon-purple",
                            color === "magenta" && "text-neon-magenta"
                          )}
                        >
                          {String(step.step).padStart(2, "0")}
                        </div>
                        <div
                          className={cn(
                            "p-3 rounded-lg border-2",
                            color === "blue" && "border-neon-blue/30 bg-neon-blue/10",
                            color === "purple" && "border-neon-purple/30 bg-neon-purple/10",
                            color === "magenta" && "border-neon-magenta/30 bg-neon-magenta/10"
                          )}
                        >
                          <Icon
                            className={cn(
                              "h-5 w-5",
                              color === "blue" && "text-neon-blue",
                              color === "purple" && "text-neon-purple",
                              color === "magenta" && "text-neon-magenta"
                            )}
                          />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-h4 text-neutral-white font-heading mb-3">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-neutral-white/80 text-sm leading-relaxed mb-4">
                        {step.description}
                      </p>

                      {/* Timeline Badge */}
                      {step.timeline && (
                        <div
                          className={cn(
                            "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4",
                            color === "blue" && "bg-neon-blue/20 text-neon-blue border border-neon-blue/30",
                            color === "purple" && "bg-neon-purple/20 text-neon-purple border border-neon-purple/30",
                            color === "magenta" && "bg-neon-magenta/20 text-neon-magenta border border-neon-magenta/30"
                          )}
                        >
                          <span>{step.timeline}</span>
                        </div>
                      )}

                      {/* What to Expect Toggle */}
                      {step.whatToExpect && step.whatToExpect.length > 0 && (
                        <div>
                          <button
                            onClick={() => toggleStep(step.step)}
                            className={cn(
                              "flex items-center gap-2 text-sm font-semibold transition-colors",
                              "hover:text-neon-blue focus:outline-none",
                              color === "blue" && "text-neon-blue",
                              color === "purple" && "text-neon-purple",
                              color === "magenta" && "text-neon-magenta"
                            )}
                          >
                            <span>What to expect</span>
                            {isExpanded ? (
                              <ChevronUp className="h-4 w-4" />
                            ) : (
                              <ChevronDown className="h-4 w-4" />
                            )}
                          </button>

                          {/* Expandable Content */}
                          <div
                            className={cn(
                              "overflow-hidden transition-all duration-300",
                              isExpanded ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
                            )}
                          >
                            <ul className="space-y-2">
                              {step.whatToExpect.map((item, itemIndex) => (
                                <li
                                  key={itemIndex}
                                  className="flex items-start gap-3 text-sm text-neutral-white/70"
                                >
                                  <div
                                    className={cn(
                                      "h-1.5 w-1.5 rounded-full mt-2 flex-shrink-0",
                                      color === "blue" && "bg-neon-blue",
                                      color === "purple" && "bg-neon-purple",
                                      color === "magenta" && "bg-neon-magenta"
                                    )}
                                  />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </FadeInOnScroll>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

