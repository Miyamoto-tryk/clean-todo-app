export class User {
  constructor(public id: number, public name: string, public email: string) {}
}
export interface UserRepositoryInterface {
  create(data: { name: string; email: string }): Promise<User>;
  delete(id: number): Promise<void>;
  update(id: number, data: { name: string; email: string }): Promise<User>;
  getAll(): Promise<User[]>;
  findById(id: number): Promise<User | null>;
}
