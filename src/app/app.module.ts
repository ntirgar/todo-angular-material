import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list.component';
import { TodoViewComponent } from './todo-view.component';
import { RouterModule } from '@angular/router';
import { TodoService } from './todo.service';
import { TodoAddComponent } from './todo-add.component';
import { TodoEditComponent } from './todo-edit.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';

const routes = [
  { path: '', redirectTo: 'todos', pathMatch: 'full' },
  { path: 'add', component: TodoAddComponent, pathMatch: 'full' },
  {
    path: 'todos',
    component: TodoListComponent,
    children: [
      {
        path: ':id',
        component: TodoViewComponent,
        children: [{ path: 'edit', component: TodoEditComponent }]
      }
    ]
  }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule
  ],
  declarations: [AppComponent, TodoListComponent, TodoViewComponent],
  bootstrap: [AppComponent],
  providers: [TodoService]
})
export class AppModule {}
