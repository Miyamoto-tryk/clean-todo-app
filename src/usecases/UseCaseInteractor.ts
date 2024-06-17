//UseCaseInteractor

import { InputBoundaryInterface } from "./InputBoundaryInterface";
import { UserRepositoryInterface } from "./UserRepositoryInterface";
import { OutputBoundaryInterface } from "./OutputBoundaryInterface";
import { InputData } from "./InputDataStructure";
import { OutputDataStructure } from "./OutputDataStructure";

export class UseCaseInteractor implements InputBoundaryInterface {
  //依存関係を注入
  constructor(
    private userRepository: UserRepositoryInterface,
    private presenter: OutputBoundaryInterface
  ) {}
  //操作を実行&操作されたuserを出力するprivate関数
  private newUser = async (inputData: InputData) => {
    const inputControl = inputData.control;
    const inputName = inputData.name;
    const inputEmail = inputData.email;
    const inputId = inputData.id;
    if (inputControl == "create") {
      return await this.userRepository.create({
        name: inputName,
        email: inputEmail,
      });
    } else if (inputControl == "delete") {
      const user = await this.userRepository.findById(inputId);
      await this.userRepository.delete(inputId);
      return user;
    } else if (inputControl == "update") {
      return await this.userRepository.update(inputId, {
        name: inputName,
        email: inputEmail,
      });
    } /*inputControl == "getAll"*/ else {
      return null;
    }
  };
  //操作後のuser一覧を取得するprivate関数
  private allUser = async () => await this.userRepository.getAll();

  public async handle(inputData: InputData): Promise<void> {
    const user = await this.newUser(inputData);
    const allUser = await this.allUser();
    const outputData: OutputDataStructure = {
      allUser: allUser,
      who: user,
      control: inputData.control,
    };
    this.presenter.output(outputData);
  }
}
