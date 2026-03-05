import { NextRequest, NextResponse } from "next/server";
import { fetchAELFReadings } from "@/lib/aelf-api";

export async function GET(request: NextRequest) {
  const dateParam = request.nextUrl.searchParams.get("date");

  let date: Date;
  if (dateParam) {
    date = new Date(dateParam + "T12:00:00");
    if (isNaN(date.getTime())) {
      return NextResponse.json({ error: "Invalid date" }, { status: 400 });
    }
  } else {
    date = new Date();
  }

  const reading = await fetchAELFReadings(date);

  if (!reading) {
    return NextResponse.json(
      { error: "Could not fetch readings" },
      { status: 502 },
    );
  }

  return NextResponse.json(reading, {
    headers: {
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=43200",
    },
  });
}
