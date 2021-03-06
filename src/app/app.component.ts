import { Component } from '@angular/core';
import { Todo } from './store/todo/types';

@Component({
  selector: 'my-app',
  template: `
    <mat-toolbar color="primary">
      <a mat-button class="title" routerLink="">Todo</a>
      <a mat-button routerLink="add">
        ADD
      </a>
    </mat-toolbar>
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [
    `
      header {
        border: 1px solid pink;
        padding: 0 16px;
      }
      .title {
        margin-right: auto;
      }
    `
  ]
})
export class AppComponent {
  constructor() {}
}
