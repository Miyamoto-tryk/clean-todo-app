import { User } from "./UserRepositoryInterface";

export type OutputDataStructure = {
  allUser: User[];
  control: string;
  who: User | null;
};
