import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import bcrypt from "bcrypt";

export async function GET(req: NextRequest) {
  const users = await prisma.user.findMany({
    select: { email: true, first_name: true, last_name: true },
  });

  return NextResponse.json({ users });
}

const userSchema = z.object({
  first_name: z.string().min(1),
  last_name: z.string().min(1),
  email: z.string().min(1),
  password: z.string().min(1),
});

export async function POST(req: NextRequest) {
  const body = await req.json();
  const validation = userSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

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
