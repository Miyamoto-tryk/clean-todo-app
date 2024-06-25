import { OutputBoundaryInterface } from "@/usecases/OutputBoundaryInterface";
import { OutputDataStructure } from "@/usecases/OutputDataStructure";
import { ViewModelDataStructure } from "./ViewModelDataStructure";

export class Presenter implements OutputBoundaryInterface {
  viewModel: ViewModelDataStructure = {
    allTodo: [],
  };

  output(outputData: OutputDataStructure): void {
    console.log(outputData);
    this.viewModel.allTodo = outputData.allMainTodo.map((mainTodo) => {
      const subTodos = outputData.allSubTodo.filter(
        (subTodo) => subTodo.authorId == mainTodo.id
      );
      return {
        id: mainTodo.id,
        title: mainTodo.title,
        subTodo: subTodos,
      };
    });
    console.log("viewModelData is :");
    console.log(this.viewModel);
  }
}
