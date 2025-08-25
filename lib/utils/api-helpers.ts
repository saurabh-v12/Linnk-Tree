import { NextResponse } from "next/server"

export function handleApiError(error: unknown) {
  console.error("API Error:", error)

  if (error instanceof Error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ error: "Internal server error" }, { status: 500 })
}

export function createApiResponse<T>(data: T, status = 200) {
  return NextResponse.json(data, { status })
}
