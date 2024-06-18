export class User {
  constructor(public id: number, public name: string, public email: string) {}
}
export interface UserRepositoryInterface {
  POST(data: { name: string; email: string }): Promise<User[]>;
  DELETE(id: number): Promise<User[]>;
  // update(id: number, data: { name: string; email: string }): Promise<User>;
  GET(): Promise<User[]>;
  // findById(id: number): Promise<User | null>;
}
