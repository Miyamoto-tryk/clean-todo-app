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

  await prisma.mainTodo.create({ data });
  const users = await getAll();

  return NextResponse.json(users);
}
export async function DELETE(request: NextRequest) {
  const id = parseInt(request.nextUrl.searchParams.get("id")!);

  await prisma.mainTodo.delete({
    where: { id },
  });
  const users = await getAll();
  return NextResponse.json(users);
}
export async function PUT(request: NextRequest) {
  const id = parseInt(request.nextUrl.searchParams.get("id")!);

  const { data } = await request.json();
  await prisma.mainTodo.update({ where: { id }, data });
  const users = await getAll();
  return NextResponse.json(users);
}

async function getAll() {
  const users = await prisma.mainTodo.findMany();
  return users;
}
