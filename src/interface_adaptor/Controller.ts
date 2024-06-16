import { InputBoundaryInterface } from "@/usecases/InputBoundaryInterface";
class Controller {
  private useCaseInteractor: InputBoundaryInterface;

  constructor(useCaseInteractor: InputBoundaryInterface) {
    this.useCaseInteractor = useCaseInteractor;
  }

  execute() {
    this.useCaseInteractor;
  }
}
