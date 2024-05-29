import { type NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  return NextResponse.json({ message: "This is delete handler", params });
}
