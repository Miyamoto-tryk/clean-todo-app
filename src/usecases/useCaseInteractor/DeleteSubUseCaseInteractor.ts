//UseCaseInteractor

import { InputBoundaryInterface } from "../InputBoundaryInterface";
import { UserRepositoryInterface } from "../UserRepositoryInterface";
import { OutputBoundaryInterface } from "../OutputBoundaryInterface";
import { InputData } from "../InputDataStructure";
import { OutputDataStructure } from "../OutputDataStructure";
import { title } from "process";

export class DeleteSubCaseInteractor implements InputBoundaryInterface {
  //依存関係を注入
  constructor(
    private userRepository: UserRepositoryInterface,
    private presenter: OutputBoundaryInterface
  ) {}
  //操作を実行&操作後の全userを返すprivate関数
  // private newUsers = async (inputData: InputData) => {
  //   const inputControl = inputData.control;
  //   const inputContent = inputData.content;
  //   const inputId = inputData.id;
  //   if (inputControl == "POST") {
  //     const users = await this.userRepository.POST({
  //       name: inputName,
  //       email: inputEmail,
  //     });
  //     return users;
  //   }
  // else if (inputControl == "DELETE") {
  //   const users = await this.userRepository.DELETE(inputId);
  //   return users;
  // } else if (inputControl == "PUT") {
  //   const users = await this.userRepository.PUT(inputId, {
  //     name: inputName,
  //     email: inputEmail,
  //   });

  //   return users;
  // } else {
  //   const users = await this.userRepository.GET();
  //   return users;
  // }
  //};
  //操作後のuser一覧を取得するprivate関数
  //private allUser = async () => {};

  public async handle(inputData: InputData): Promise<void> {
    const inputId = inputData.id;
    await this.userRepository.DeleteSub(inputId);
    const allTodo = await this.userRepository.GET();
    const outputData: OutputDataStructure = {
      allMainTodo: allTodo[0],
      allSubTodo: allTodo[1],
    };
    this.presenter.output(outputData);
  }
}
