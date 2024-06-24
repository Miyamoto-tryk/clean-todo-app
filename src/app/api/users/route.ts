import { NextRequest, NextResponse } from "next/server";

import prisma from "@/entities/prisma";
//TODO:エラーハンドリング
export async function GET() {
  console.log("ここには到達");
  console.log("Prisma Client instance:", prisma);
  try {
    const users = await getAll();

    return NextResponse.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}
export async function POST(request: NextRequest) {
  const { data } = await request.json();
  console.log(data);

  await prisma.mainTodo.create({ data });
  const users = await getAll();

  return NextResponse.json(users);
}
export async function DeleteMain(request: NextRequest) {
  const id = parseInt(request.nextUrl.searchParams.get("id")!);

  await prisma.mainTodo.delete({
    where: { id },
  });
  const users = await getAll();
  return NextResponse.json(users);
}
export async function DeleteSub(request: NextRequest) {
  const id = parseInt(request.nextUrl.searchParams.get("id")!);

  await prisma.subTodo.delete({
    where: { id },
  });
  const users = await getAll();
  return NextResponse.json(users);
}
export async function AddSub(request: NextRequest) {
  const { data } = await request.json();
  await prisma.subTodo.create({ data });
  const users = await getAll();
  return NextResponse.json(users);
}

async function getAll() {
  const users = await prisma.mainTodo.findMany();
  return users;
}
