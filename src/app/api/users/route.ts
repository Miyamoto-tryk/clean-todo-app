import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import prisma from "@/entities/prisma";
import { useServerInsertedHTML } from "next/navigation";

export async function GET() {
  const users = await getAll();
  return NextResponse.json(users);
}
export async function POST(request: NextRequest) {
  const { data } = await request.json();

  await prisma.User.create({ data });
  const users = await getAll();
  console.log(users);
  return NextResponse.json(users);
}
export async function DELETE(request: NextRequest) {
  const id = parseInt(request.nextUrl.searchParams.get("id")!);

  await prisma.User.delete({
    where: { id },
  });
  const users = await getAll();
  return NextResponse.json(users);
}

async function getAll() {
  const users = await prisma.User.findMany();
  return users;
}
