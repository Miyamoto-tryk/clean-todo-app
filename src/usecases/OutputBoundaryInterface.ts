import { User } from "./UserRepositoryInterface";

export interface OutputBoundaryInterface {
  allUser: User[];
  control: string;
  who: User | null;
}
