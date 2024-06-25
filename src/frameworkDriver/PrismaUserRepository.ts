import { MainTodo, SubTodo } from "@/entities/todo";
import { UserRepositoryInterface } from "@/usecases/UserRepositoryInterface";
import { PrismaClient } from "@prisma/client";

export class PrismaUserRepository implements UserRepositoryInterface {
  async POST(data: { title: string }) {
    const response = await fetch(`/api/users?table=${"main"}`, {
      method: "POST",
      body: JSON.stringify({ data }),
    });
    const users = await response.json();
    return users;
  }
  async DeleteMain(id: number) {
    console.log("ここには到達:DeleteMain in userRepository");
    const response = await fetch(`/api/users?id=${id}&table=main`, {
      method: "DELETE",
    });
    const users = await response.json();
    return users;
  }
  async DeleteSub(id: number) {
    const response = await fetch(`/api/users?id=${id}`, {
      method: "DELETE",
      body: JSON.stringify("sub"),
    });
    const users = response.json();
    return users;
  }
  async AddSub(data: { todo: string; emergency: number; authorId: number }) {
    const response = await fetch(`/api/users?table=${"sub"}`, {
      method: "POST",
      body: JSON.stringify({ data }),
    });
    const users = response.json();
    return users;
  }

  async GET() {
    const response = await fetch("/api/users", { method: "GET" });
    const users = await response.json();
    console.log(users);
    return users;
  }

  async findById(id: number): Promise<MainTodo | SubTodo | null> {
    const response = await fetch(`/api/users?id=${id}`, { method: "findById" });
    const todo = response.json();
    if (!todo) return null;
    return todo;
  }
}
