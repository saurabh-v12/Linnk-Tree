"use client"

import Image from "next/image"
import { useState } from "react"

export function ProfileImage() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full border-4 border-white/30 shadow-2xl transition-all duration-300 hover:scale-105 hover:border-white/50">
      <Image
        src="https://wyivwhabot.ufs.sh/f/LmrPcfHn2XAUix6PY9r4aPOqQgrJ7cWfYyhGdmCA3jXols1U"
        alt="Saurabh's profile"
        fill
        className={`object-cover transition-opacity duration-300 ${isLoading ? "opacity-0" : "opacity-100"}`}
        onLoad={() => setIsLoading(false)}
        priority
      />
      {isLoading && <div className="absolute inset-0 animate-pulse bg-white/90" />}
    </div>
  )
}
