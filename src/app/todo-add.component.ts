import { Component, Input } from '@angular/core';
import { Todo } from './store/todo/types';
import { TodoService } from './todo.service';

@Component({
  selector: 'todo-add',
  template: `
    <div>{{ id }}</div>
    <div>
      <input type="text" class="form-control" id="name" required name="name" />
    </div>
    <div><input name="c" type="checkbox" /></div>

    <button (click)="addTodo()">Save</button>
    <button (click)="deleteTodo()">Save</button>
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
export class TodoAddComponent {
  name = 'a';
  id = 'a';
  t = { name: 'aa' };
  completed: false;
  constructor(private todoService: TodoService) {}
  addTodo() {
    this.todoService.addTodo({
      id: this.id,
      text: this.t.name,
      completed: this.completed
    });
  }

  deleteTodo(){
    
  }
}
