import {
  User,
  UserRepositoryInterface,
} from "@/usecases/UserRepositoryInterface";
import { PrismaClient } from "@prisma/client";

export class PrismaUserRepository implements UserRepositoryInterface {
  private prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async create(data: { name: string; email: string }): Promise<User> {
    const newUser = await this.prisma.User.create({ data });
    return new User(newUser.id, newUser.name, newUser.email);
  }
  async delete(id: number): Promise<void> {
    await this.prisma.User.delete({ where: { id } });
  }
  async update(
    id: number,
    data: { name: string; email: string }
  ): Promise<User> {
    const newUser = this.prisma.User.update({
      where: { id },
      data: { data },
    });
    return new User(newUser.id, newUser.name, newUser.email);
  }

  async getAll(): Promise<User[]> {
    const allUser = this.prisma.User.findMany();
    return allUser.map(
      (user: { id: number; name: string; email: string }) =>
        new User(user.id, user.name, user.email)
    );
  }

  async findById(id: number): Promise<User | null> {
    const user = await this.prisma.User.findUnique({ where: { id } });
    if (!user) return null;
    return user;
  }
}
