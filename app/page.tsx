import { ProfileSection } from "@/components/profile/profile-section"
import { SocialLinks } from "@/components/social/social-links"
import { ParticleBackground } from "@/components/ui/particle-background"

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <ParticleBackground />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-16 text-center text-white">
        <ProfileSection />
        <SocialLinks />
      </div>
    </main>
  )
}
