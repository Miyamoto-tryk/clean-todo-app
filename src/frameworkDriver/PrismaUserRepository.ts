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
  async DeleteMain(id: number) {
    const response = await fetch(`/api/users?id=${id}`, {
      method: "DeleteMain",
    });
    const users = response.json();
    return users;
  }
  async DeleteSub(id: number) {
    const response = await fetch(`/api/users?id=${id}`, {
      method: "DeleteSub",
    });
    const users = response.json();
    return users;
  }
  async AddSub(data: {
    main: {
      connect: {
        id: number;
      };
    };
    sub: {
      create: {
        todo: string;
        emergency: number;
        main: {
          connect: { id: number };
        };
      };
    };
  }): Promise<MainTodo[]> {
    const response = await fetch(`/api/users`, {
      method: "AddSub",
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

  async findById(id: number): Promise<MainTodo | SubTodo | null> {
    const response = await fetch(`/api/users?id=${id}`, { method: "findById" });
    const todo = response.json();
    if (!todo) return null;
    return todo;
  }
}
