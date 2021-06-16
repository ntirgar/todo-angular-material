import { Component, Input } from '@angular/core';
import { Todo } from './store/todo/types';

@Component({
  selector: 'todo-view',
  template: `
    <input [(ngModel)]="todo.completed" type="checkbox" disabled="true" />

    <input [(ngModel)]="todo.text" type="text" disabled="true" />

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
export class TodoViewComponent {
  @Input() todo: Todo;
}
