import { MainTodo, SubTodo } from "@/entities/todo";
import { UserRepositoryInterface } from "@/usecases/UserRepositoryInterface";
import { PrismaClient } from "@prisma/client";

export class PrismaUserRepository implements UserRepositoryInterface {
  async POST(data: { title: string; subTodo: SubTodo[] }) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ data }),
    });
    const users = await response.json();
    return users;
  }
  async DELETE(id: number) {
    const response = await fetch(`/api/users?id=${id}`, { method: "DELETE" });
    const users = response.json();
    return users;
  }
  async PUT(
    id: number,
    data: { title: string; subTodo: SubTodo[] }
  ): Promise<MainTodo[]> {
    const response = await fetch(`/api/users?id=${id}`, {
      method: "PUT",
      body: JSON.stringify({ data }),
    });
    const users = response.json();
    return users;
  }

  async GET(): Promise<MainTodo[]> {
    const response = await fetch("/api/users", { method: "GET" });
    const users = await response.json();
    return users;
  }

  // async findById(id: number): Promise<User | null> {
  //   const user = await this.prisma.User.findUnique({ where: { id } });
  //   if (!user) return null;
  //   return user;
  // }
}
