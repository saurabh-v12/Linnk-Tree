"use client";

import Link from "next/link";
import { Instagram, Twitter, Linkedin, Github, Youtube } from "lucide-react";

interface SocialLinkProps {
  link: {
    id: string;
    platform: "instagram" | "twitter" | "linkedin" | "github" | "youtube";
    title: string;
    url: string;
    icon: "instagram" | "twitter" | "linkedin" | "github" | "youtube";
  };
}

export function SocialLink({ link }: SocialLinkProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "instagram":
        return Instagram;
      case "twitter":
        return Twitter;
      case "linkedin":
        return Linkedin;
      case "github":
        return Github;
      case "youtube":
        return Youtube;
      default:
        return Instagram;
    }
  };

  const getHoverColor = (platform: string) => {
    switch (platform) {
      case "instagram":
        return "hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500";
      case "twitter":
        return "hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-600";
      case "linkedin":
        return "hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500";
      case "github":
        return "hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-600";
      case "youtube":
        return "hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-500";
      default:
        return "hover:bg-gray-600";
    }
  };

  const Icon = getIcon(link.icon);
  const hoverColor = getHoverColor(link.platform);

  return (
    <Link
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-full border border-white/20 bg-white/10 px-6 py-4 text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 hover:shadow-xl ${hoverColor}`}
      aria-label={`Visit ${link.platform} profile`}
    >
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />

      <Icon className="h-5 w-5 flex-shrink-0" />
      <span className="font-medium">{link.title}</span>
    </Link>
  );
}
