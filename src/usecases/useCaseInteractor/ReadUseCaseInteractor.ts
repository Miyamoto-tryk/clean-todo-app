//UseCaseInteractor

import { InputBoundaryInterface } from "../InputBoundaryInterface";
import { UserRepositoryInterface } from "../UserRepositoryInterface";
import { OutputBoundaryInterface } from "../OutputBoundaryInterface";
import { InputData } from "../InputDataStructure";
import { OutputDataStructure } from "../OutputDataStructure";
import { title } from "process";
import { isMainTodo } from "../../entities/todo";
export class ReadCaseInteractor implements InputBoundaryInterface {
  //依存関係を注入
  constructor(
    private userRepository: UserRepositoryInterface,
    private presenter: OutputBoundaryInterface
  ) {}

  public async handle(inputData: InputData): Promise<void> {
    const allTodo = await this.userRepository.GET();
    const outputData: OutputDataStructure = {
      allTodo: allTodo,
    };
    this.presenter.output(outputData);
  }
}
