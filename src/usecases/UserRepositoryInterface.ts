import { MainTodo, SubTodo } from "@/entities/todo";

export interface UserRepositoryInterface {
  POST(data: { title: string }): Promise<[MainTodo[], SubTodo[]]>;
  DeleteSub(id: number): Promise<[MainTodo[], SubTodo[]]>;
  DeleteMain(id: number): Promise<[MainTodo[], SubTodo[]]>;
  AddSub(data: {
    todo: string;
    emergency: number;
    authorId: number;
  }): Promise<[MainTodo[], SubTodo[]]>;
  GET(): Promise<[MainTodo[], SubTodo[]]>;
  //findById(id: number): Promise<MainTodo | SubTodo | null>;
}
