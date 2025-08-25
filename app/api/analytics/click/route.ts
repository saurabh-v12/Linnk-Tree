import { type NextRequest, NextResponse } from "next/server"
import { trackLinkClick } from "@/lib/analytics/tracker"
import { handleApiError } from "@/lib/utils/api-helpers"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { linkId, platform, userId } = body

    if (!linkId || !platform || !userId) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    await trackLinkClick({
      linkId,
      platform,
      userId,
      timestamp: new Date(),
      userAgent: request.headers.get("user-agent") || "",
      ip: request.ip || "",
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return handleApiError(error)
  }
}
