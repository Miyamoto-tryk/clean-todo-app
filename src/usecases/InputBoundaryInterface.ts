import { InputData } from "./InputDataStructure";

//Controller -> this  <|- UseCaseInteractor
export interface InputBoundaryInterface {
  handle(inputData: InputData): Promise<void>;
}
