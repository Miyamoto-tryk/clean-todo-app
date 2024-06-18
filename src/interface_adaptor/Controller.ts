import { InputBoundaryInterface } from "@/usecases/InputBoundaryInterface";
import { InputData } from "@/usecases/InputDataStructure";
export class Controller {
  private useCaseInteractor: InputBoundaryInterface;
  private inputData;
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

  exeUseCase() {
    this.useCaseInteractor.handle(this.inputData);
  }
}
