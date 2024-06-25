import { NextRequest, NextResponse } from "next/server";

import prisma from "@/entities/prisma";
//TODO:エラーハンドリング
export async function GET() {
  console.log("ここには到達");
  // console.log("Prisma Client instance:", prisma);
  try {
    const users = await getAll();

    return NextResponse.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}
export async function POST(request: NextRequest) {
  console.log("ここには到達:POST");
  const { data } = await request.json();
  const table = request.nextUrl.searchParams.get("table")!;

  if (table == "main") {
    console.log("title is:" + data.title);
    await prisma.mainTodo.create({ data });
  } else {
    console.log("sub todo POST");
    await prisma.subTodo.create({ data });
  }

  const users = await getAll();

  return NextResponse.json(users);
}
export async function DELETE(request: NextRequest) {
  console.log("ここには到達:DeleteMain");
  const id = parseInt(request.nextUrl.searchParams.get("id")!);
  const table = request.nextUrl.searchParams.get("table")!;
  console.log("mainID is:" + id);
  console.log("table is:" + table);
  if (table == "main") {
    await prisma.mainTodo.delete({
      where: { id: id },
    });
  } else {
    await prisma.subTodo.delete({
      where: { id },
    });
  }
  const users = await getAll();
  return NextResponse.json(users);
}

async function getAll() {
  const mainTodos = await prisma.mainTodo.findMany();
  const subTodos = await prisma.subTodo.findMany();
  //  const ans = mainTodos.map((mainTodo)=>{
  //   const sub = subTodos.filter((subTodo)=>subTodo.authorId = mainTodo.id)
  //    return
  //  })
  return [mainTodos, subTodos];
}
