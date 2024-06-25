import { OutputDataStructure } from "./OutputDataStructure";

export interface OutputBoundaryInterface {
  output(outputData: OutputDataStructure): void;
}
