import { SocialLink } from "./social-link"

const socialLinks = [
  {
    id: "1",
    platform: "instagram",
    title: "Instagram",
    url: "https://www.instagram.com/saurabh_v12/",
    icon: "instagram",
  },
  {
    id: "2",
    platform: "twitter",
    title: "X (Twitter)",
    url: "https://x.com/SaurabhCoder69",
    icon: "twitter",
  },
  {
    id: "3",
    platform: "linkedin",
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/saurabh-vishwakarma-301609332/",
    icon: "linkedin",
  },
  {
    id: "4",
    platform: "github",
    title: "saurabh-v12 – Overview",
    url: "https://github.com/saurabh-v12",
    icon: "github",
  },
  {
    id: "5",
    platform: "youtube",
    title: "YouTube",
    url: "https://www.youtube.com/@Ssvgamings",
    icon: "youtube",
  },
]

export function SocialLinks() {
  return (
    <nav className="w-full max-w-md space-y-4" role="navigation" aria-label="Social media links">
      {socialLinks.map((link) => (
        <SocialLink key={link.id} link={link} />
      ))}
    </nav>
  )
}
