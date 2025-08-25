"use client"

import type React from "react"

import { createContext, useEffect } from "react"
import { initializeAnalytics } from "@/lib/analytics/client"

const AnalyticsContext = createContext<{} | undefined>(undefined)

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    initializeAnalytics()
  }, [])

  return <AnalyticsContext.Provider value={{}}>{children}</AnalyticsContext.Provider>
}
