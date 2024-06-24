import { MainTodo, SubTodo } from "@/entities/todo";

export interface UserRepositoryInterface {
  POST(data: { title: string; subTodo: SubTodo[] }): Promise<MainTodo[]>;
  DELETE(id: number): Promise<MainTodo[]>;
  PUT(
    id: number,
    data: { title: string; subTodo: SubTodo[] }
  ): Promise<MainTodo[]>;
  GET(): Promise<MainTodo[]>;
  // findById(id: number): Promise<User | null>;
}
