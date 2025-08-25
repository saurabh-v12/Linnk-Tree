export type SocialPlatform =
  | "instagram"
  | "twitter"
  | "linkedin"
  | "github"
  | "youtube"
  | "tiktok"
  | "discord"
  | "custom"

export interface SocialLinkData {
  id: string
  userId: string
  platform: SocialPlatform
  title: string
  url: string
  isActive: boolean
  isVerified: boolean
  order: number
  clickCount: number
  createdAt: Date
  updatedAt: Date
}

export interface SocialLinkCreate {
  platform: SocialPlatform
  title: string
  url: string
  order?: number
}
