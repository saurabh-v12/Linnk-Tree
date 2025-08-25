import { NextResponse } from "next/server"
import { getUserProfile } from "@/lib/data/user"
import { handleApiError } from "@/lib/utils/api-helpers"

export async function GET() {
  try {
    const profile = await getUserProfile()
    return NextResponse.json(profile)
  } catch (error) {
    return handleApiError(error)
  }
}
