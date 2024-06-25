type Entity = {
  readonly id: number;
};
export type MainTodo = Entity & {
  readonly title: string;

  readonly subTodo: SubTodo[];
};
export type SubTodo = Entity & {
  readonly todo: string;

  readonly emergency: number;
  readonly authorId: number;
};

export const isMainTodo = (item: any): item is MainTodo => {
  // MainTodo型に強制キャストしてatackプロパティがあればWeapon型とする
  return !!(item as MainTodo)?.subTodo;
};
