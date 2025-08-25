export interface ClickEvent {
  id?: string
  linkId: string
  platform: string
  userId: string
  timestamp: Date
  userAgent: string
  ip: string
  country?: string
  city?: string
  referrer?: string
}

export interface AnalyticsData {
  totalClicks: number
  clicksByPlatform: Record<string, number>
  clicksByDate: Record<string, number>
  topCountries: Array<{ country: string; clicks: number }>
}
