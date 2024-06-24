import { MainTodo, SubTodo } from "@/entities/todo";

export interface UserRepositoryInterface {
  POST(data: { title: string; subTodo: SubTodo[] }): Promise<MainTodo[]>;
  DeleteSub(id: number): Promise<MainTodo[]>;
  DeleteMain(id: number): Promise<MainTodo[]>;
  AddSub(data: {
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
  }): Promise<MainTodo[]>;
  GET(): Promise<MainTodo[]>;
  findById(id: number): Promise<MainTodo | SubTodo | null>;
}
