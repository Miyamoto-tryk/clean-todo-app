import { OutputDataStructure } from "./OutputDataStructure";
import { User } from "./UserRepositoryInterface";

export interface OutputBoundaryInterface {
  output(outputData: OutputDataStructure): void;
}
