import { Component, Input } from "@angular/core";
import { Todo } from "./store/todo/types";
import { TodoService } from "./todo.service";

@Component({
  selector: "todo-list",
  template: `
    <router-outlet></router-outlet>
    <todo-view [todo]="todo" *ngFor="let todo of todos"></todo-view>
  `,
  styles: [
    `
      :host {
        display: block;
        height: 640px;
      }
    `
  ]
})
export class TodoListComponent {
  todos: Todo[] = [];
  constructor(private todoService: TodoService) {
    this.todos = this.todoService.getTodos();
  }
}
