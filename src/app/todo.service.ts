import { Injectable } from "@angular/core";
import { Todo } from "./store/todo/types";

@Injectable()
export class TodoService {
  todos: Todo[] = [];
  constructor() {
    this.todos = [
      { id: "o", completed: false, text: "Todo1" },
      { id: "1", completed: true, text: "Todo2" }
    ];
  }

  getTodos(): Todo[] {
    return this.todos;
  }

  addTodo(todo: Todo) {
    this.todos = [...this.todos, todo];
  }
}
