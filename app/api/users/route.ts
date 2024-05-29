import prisma from "@/prisma/client";
import { type NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { UserCreateInputSchema } from "@/prisma/generated/zod";

export async function GET(req: NextRequest) {
  // const searchParams = req.nextUrl.searchParams;
  // const query = searchParams.get("query");
  // query is "hello" for /api/search?query=hello

  const users = await prisma.user.findMany({
    select: { email: true, first_name: true, last_name: true },
  });

  return NextResponse.json({ users });
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  const validation = UserCreateInputSchema.safeParse(body);
  if (!validation.success) return NextResponse.json({ error: validation.error.errors }, { status: 400 });

  const hashedPw = await bcrypt.hash(body.password, 10);

  await prisma.user.create({
    data: {
      first_name: body.first_name,
      last_name: body.last_name,
      email: body.email,
      password: hashedPw,
    },
  });

  return NextResponse.json({});
}
