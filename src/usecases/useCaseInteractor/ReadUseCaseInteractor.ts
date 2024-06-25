//UseCaseInteractor

import { InputBoundaryInterface } from "../InputBoundaryInterface";
import { UserRepositoryInterface } from "../UserRepositoryInterface";
import { OutputBoundaryInterface } from "../OutputBoundaryInterface";
import { InputData } from "../InputDataStructure";
import { OutputDataStructure } from "../OutputDataStructure";
import { title } from "process";
import { SubTodo, isMainTodo } from "../../entities/todo";
export class ReadCaseInteractor implements InputBoundaryInterface {
  //依存関係を注入
  constructor(
    private userRepository: UserRepositoryInterface,
    private presenter: OutputBoundaryInterface
  ) {}

  public async handle(inputData: InputData): Promise<void> {
    const allTodo = await this.userRepository.GET();

    const outputData: OutputDataStructure = {
      allMainTodo: allTodo[0],
      allSubTodo: allTodo[1],
    };
    this.presenter.output(outputData);
  }
}
