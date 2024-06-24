import { OutputBoundaryInterface } from "@/usecases/OutputBoundaryInterface";
import { OutputDataStructure } from "@/usecases/OutputDataStructure";
import { ViewModelDataStructure } from "./ViewModelDataStructure";

export class Presenter implements OutputBoundaryInterface {
  viewModel: ViewModelDataStructure = {
    allNames: ["name"],
    displayMessage: "hello",
    id: [],
  };

  output(outputData: OutputDataStructure): void {
    const allNames: string[] = outputData.allUser.map(
      (user, index) => user.name
    );
    const id: number[] = outputData.allUser.map((user) => user.id);
    this.viewModel.allNames = allNames;
    this.viewModel.displayMessage = outputData.control + " done";
    this.viewModel.id = id;
    console.log(this.viewModel);
  }
}
