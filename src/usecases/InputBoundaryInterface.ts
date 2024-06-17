import { InputData } from "./InputDataStructure";
import { OutputBoundaryInterface } from "./OutputBoundaryInterface";
import { User } from "./UserRepositoryInterface";

//Controller -> this  <|- UseCaseInteractor
export interface InputBoundaryInterface {
  handle(inputData: InputData): void;
}
