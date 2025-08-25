import { ProfileImage } from "./profile-image"
import { ProfileInfo } from "./profile-info"

export function ProfileSection() {
  return (
    <section className="mb-10 space-y-6">
      <ProfileImage />
      <ProfileInfo />
    </section>
  )
}
