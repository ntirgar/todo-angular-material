import { Action } from "../store-action";

export type Todo = {
  id?: string;
  completed: boolean;
  text: string;
};

export interface TodoState {
  readonly todos: Todo[];
}

export enum TodoActionType {
  ADD_TODO = "todo/add",
  COMPLETE_TODO = "todo/complete"
}

type AddTodoAction = Action<typeof TodoActionType.ADD_TODO, Todo>;

type CompleteTodoAction = Action<
  typeof TodoActionType.COMPLETE_TODO,
  Todo["id"]
>;

export type TodoAction = AddTodoAction | CompleteTodoAction;
