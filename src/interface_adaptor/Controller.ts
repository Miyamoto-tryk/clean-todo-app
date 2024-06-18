import { InputBoundaryInterface } from "@/usecases/InputBoundaryInterface";
import { InputData } from "@/usecases/InputDataStructure";
export class Controller {
  private useCaseInteractor: InputBoundaryInterface;
  private inputData: InputData;
  //ユーザからの入力を整形
  constructor(
    useCaseInteractor: InputBoundaryInterface,
    name: string,
    email: string,
    control: string,
    id: number
  ) {
    this.useCaseInteractor = useCaseInteractor;
    this.inputData = { name, email, id, control };
  }

  async exeUseCase() {
    await this.useCaseInteractor.handle(this.inputData);
  }
  setName(name: string) {
    this.inputData.name = name;
  }
  setEmail(email: string) {
    this.inputData.email = email;
  }
  setControl(control: string) {
    this.inputData.control = control;
  }
}
