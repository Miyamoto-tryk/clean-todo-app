import { OutputBoundaryInterface } from "./OutputBoundaryInterface";
import { User } from "./UserRepositoryInterface";

//Controller -> this  <|- UseCaseInteractor
export interface InputBoundaryInterface {
  create(name: string, dmail: string): Promise<OutputBoundaryInterface>;
  update(
    id: number,
    data: { name: string; email: string }
  ): Promise<OutputBoundaryInterface>;
  delete(id: number): Promise<OutputBoundaryInterface>;
  getAll(): Promise<OutputBoundaryInterface>;
}
