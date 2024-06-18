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
  // async delete(id: number): Promise<void> {
  //   await this.prisma.User.delete({ where: { id } });
  // }
  // async update(
  //   id: number,
  //   data: { name: string; email: string }
  // ): Promise<User> {
  //   const newUser = this.prisma.User.update({
  //     where: { id },
  //     data: { data },
  //   });
  //   return new User(newUser.id, newUser.name, newUser.email);
  // }

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
