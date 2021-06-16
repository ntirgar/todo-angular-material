import { createAction } from "../store-action";
import { Todo, TodoAction, TodoActionType } from "./types";

export const addTodo = (todo: Todo): TodoAction =>
  createAction(TodoActionType.ADD_TODO, todo);

export const completeTodo = (id: Todo["id"]): TodoAction =>
  createAction(TodoActionType.COMPLETE_TODO, id);
