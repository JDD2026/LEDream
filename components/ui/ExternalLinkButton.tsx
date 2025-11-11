"use client";

import { ExternalLink } from "lucide-react";
import { CTAButton, CTAButtonProps } from "./CTAButton";

/**
 * ExternalLinkButton Component
 * 
 * Client Component wrapper for CTAButton with ExternalLink icon.
 * Used to avoid passing React components from Server to Client Components.
 */
export function ExternalLinkButton(props: Omit<CTAButtonProps, "icon">) {
  return <CTAButton {...props} icon={ExternalLink} />;
}

