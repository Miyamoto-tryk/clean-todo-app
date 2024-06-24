import { OutputBoundaryInterface } from "@/usecases/OutputBoundaryInterface";
import { OutputDataStructure } from "@/usecases/OutputDataStructure";
import { ViewModelDataStructure } from "./ViewModelDataStructure";

export class Presenter implements OutputBoundaryInterface {
  viewModel: ViewModelDataStructure = {
    allTodo: [],
  };

  output(outputData: OutputDataStructure): void {
    this.viewModel.allTodo = outputData.allTodo;
    console.log(this.viewModel);
  }
}
