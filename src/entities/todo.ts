type Entity = {
  readonly id: number;
};
export type MainTodo = Entity & {
  readonly title: string;
  readonly idCompleted: boolean;
  readonly subTodo: SubTodo[];
};
export type SubTodo = Entity & {
  readonly todo: string;
  readonly isCompleted: boolean;
  readonly emergency: number;
};
