import { Instagram, Twitter, Linkedin, Github, Youtube, Music, MessageCircle, ExternalLink } from "lucide-react"
import type { SocialPlatform } from "@/types/social"

export function getPlatformIcon(platform: SocialPlatform) {
  const icons = {
    instagram: Instagram,
    twitter: Twitter,
    linkedin: Linkedin,
    github: Github,
    youtube: Youtube,
    tiktok: Music,
    discord: MessageCircle,
    custom: ExternalLink,
  }

  return icons[platform] || ExternalLink
}

export function getPlatformStyles(platform: SocialPlatform) {
  const styles = {
    instagram: {
      hover: "hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500",
    },
    twitter: {
      hover: "hover:bg-blue-500",
    },
    linkedin: {
      hover: "hover:bg-blue-600",
    },
    github: {
      hover: "hover:bg-gray-800",
    },
    youtube: {
      hover: "hover:bg-red-600",
    },
    tiktok: {
      hover: "hover:bg-black",
    },
    discord: {
      hover: "hover:bg-indigo-600",
    },
    custom: {
      hover: "hover:bg-gray-600",
    },
  }

  return styles[platform] || styles.custom
}

export function getPlatformColor(platform: SocialPlatform): string {
  const colors = {
    instagram: "#E4405F",
    twitter: "#1DA1F2",
    linkedin: "#0077B5",
    github: "#333333",
    youtube: "#FF0000",
    tiktok: "#000000",
    discord: "#5865F2",
    custom: "#6B7280",
  }

  return colors[platform] || colors.custom
}
