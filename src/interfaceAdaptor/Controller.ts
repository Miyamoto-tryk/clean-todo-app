import { InputBoundaryInterface } from "@/usecases/InputBoundaryInterface";
import { InputData } from "@/usecases/InputDataStructure";
export class Controller {
  private useCaseInteractor: InputBoundaryInterface;
  private inputData: InputData;
  //ユーザからの入力を整形
  constructor(
    useCaseInteractor: InputBoundaryInterface,
    content: string,
    id: number,
    emergency: number
  ) {
    this.useCaseInteractor = useCaseInteractor;
    this.inputData = { content, id, emergency };
  }

  async exeUseCase() {
    await this.useCaseInteractor.handle(this.inputData);
  }
  setUseCase(useCaseInteractor: InputBoundaryInterface) {
    this.useCaseInteractor = useCaseInteractor;
  }
}
