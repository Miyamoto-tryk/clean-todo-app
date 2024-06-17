import { OutputBoundaryInterface } from "@/usecases/OutputBoundaryInterface";
import { OutputDataStructure } from "@/usecases/OutputDataStructure";
import { ViewModelDataStructure } from "./ViewModelDataStructure";

export class Presenter implements OutputBoundaryInterface {
  viewModel: ViewModelDataStructure;
  constructor(viewModel: ViewModelDataStructure) {
    this.viewModel = viewModel;
  }

  output(outputData: OutputDataStructure): void {
    const displayMessage: string = outputData.who
      ? outputData.who.name
      : "none of user";
    const allNames: string[] = outputData.allUser.map((user) => user.name);
    this.viewModel = {
      displayMessage,
      allNames,
    };
  }
}
