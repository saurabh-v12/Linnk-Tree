"use client"

import type { ClickEvent } from "@/types/analytics"

export function initializeAnalytics() {
  // Initialize analytics (Google Analytics, Plausible, etc.)
  if (typeof window !== "undefined" && process.env.NEXT_PUBLIC_GA_ID) {
    // Google Analytics initialization
  }
}

export async function trackClick(data: Omit<ClickEvent, "timestamp" | "userAgent" | "ip">) {
  try {
    await fetch("/api/analytics/click", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
  } catch (error) {
    console.error("Failed to track click:", error)
  }
}

export function trackPageView(path: string) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", process.env.NEXT_PUBLIC_GA_ID!, {
      page_path: path,
    })
  }
}
