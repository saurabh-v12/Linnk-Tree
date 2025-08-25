export interface UserProfile {
  id: string
  name: string
  username: string
  avatar: string
  tagline?: string
  bio?: string
  isVerified: boolean
  createdAt: Date
  updatedAt: Date
}

export interface UserSettings {
  theme: "light" | "dark" | "auto"
  analyticsEnabled: boolean
  customDomain?: string
}
