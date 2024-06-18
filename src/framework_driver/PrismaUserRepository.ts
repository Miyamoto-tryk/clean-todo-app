import {
  User,
  UserRepositoryInterface,
} from "@/usecases/UserRepositoryInterface";
import { PrismaClient } from "@prisma/client";

export class PrismaUserRepository implements UserRepositoryInterface {
  async POST(data: { name: string; email: string }) {
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
    data: { name: string; email: string }
  ): Promise<User[]> {
    const response = await fetch(`/api/users?id=${id}`, {
      method: "PUT",
      body: JSON.stringify({ data }),
    });
    const users = response.json();
    return users;
  }

  async GET(): Promise<User[]> {
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
