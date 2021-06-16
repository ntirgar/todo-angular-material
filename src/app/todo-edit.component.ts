import { Component, Input } from "@angular/core";
import { Todo } from "./store/todo/types";

@Component({
  selector: "todo-edit",
  template: `
    <div>{{ todo.id }}</div>
    <div>
      <input type="text" disabled="true" />
    </div>
    <div>
      <input type="checkbox" disabled="true" />
    </div>

    <a routerLink=""> <button>Edit</button> </a>
  `,
  styles: [
    `
      :host {
        display: block;
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.09);
        padding: 8px;
        margin: 8px 0;
      }
    `
  ]
})
export class TodoEditComponent {
  @Input() todo: Todo;
}
