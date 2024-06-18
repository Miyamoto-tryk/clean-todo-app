import { OutputBoundaryInterface } from "@/usecases/OutputBoundaryInterface";
import { OutputDataStructure } from "@/usecases/OutputDataStructure";
import { ViewModelDataStructure } from "./ViewModelDataStructure";

export class Presenter implements OutputBoundaryInterface {
  viewModel: ViewModelDataStructure = {
    allNames: ["name"],
    displayMessage: "hello",
  };

  output(outputData: OutputDataStructure): void {
    const allNames: string[] = outputData.allUser.map((user) => user.name);
    this.viewModel.allNames = allNames;
    this.viewModel.displayMessage = outputData.control + "ed";
    console.log(this.viewModel);
  }
}
