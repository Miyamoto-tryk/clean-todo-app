//UseCaseInteractor

import { InputBoundaryInterface } from "./InputBoundaryInterface";
import { UserRepositoryInterface } from "./UserRepositoryInterface";
import { OutputBoundaryInterface } from "./OutputBoundaryInterface";

export class UseCaseInteractor implements InputBoundaryInterface {
  constructor(private userRepository: UserRepositoryInterface) {}
  async create(name: string, email: string): Promise<OutputBoundaryInterface> {
    const saveUser = await this.userRepository.create({
      name: name,
      email: email,
    });
    const users = await this.userRepository.getAll();
    const result: OutputBoundaryInterface = {
      allUser: users,
      control: "save",
      who: saveUser,
    };
    return result;
  }

  async delete(id: number): Promise<OutputBoundaryInterface> {
    await this.userRepository.delete(id);
    const deleteUser = await this.userRepository.findById(id);
    const users = await this.userRepository.getAll();
    const result: OutputBoundaryInterface = {
      allUser: users,
      control: "delete",
      who: deleteUser,
    };
    return result;
  }

  async update(
    id: number,
    data: { name: string; email: string }
  ): Promise<OutputBoundaryInterface> {
    const updateUser = await this.userRepository.update(id, data);
    const users = await this.userRepository.getAll();
    const result: OutputBoundaryInterface = {
      allUser: users,
      control: "update",
      who: updateUser,
    };
    return result;
  }

  async getAll(): Promise<OutputBoundaryInterface> {
    const users = await this.userRepository.getAll();
    return {
      allUser: users,
      control: "getAll",
      who: null,
    };
  }
}
