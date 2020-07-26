import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { ToDo } from '../model/todo';
import { faSleigh } from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: ToDo[];
  constructor() {
    this.todos = [{
      id: '1',
      title: 'Learn Angular',
      isComplete: false,
      date: new Date(),
    },
    {
      id: '2',
      title: 'Learn Node',
      isComplete: false,
      date: new Date(),
    },
    {
      id: '3',
      title: 'Learn React',
      isComplete: false,
      date: new Date(),
    }];
  }

  // tslint:disable-next-line:typedef
  getTodos(){
    return of(this.todos);
  }

  // tslint:disable-next-line:typedef
  addTodo(todo: ToDo) {
    this.todos.push(todo);
  }

  // tslint:disable-next-line:typedef
  changeStatus(todo: ToDo){
    this.todos.map(eachTodo => {
      if (eachTodo.id === todo.id){
        todo.isComplete = !todo.isComplete;
      }
    });
  }

  // tslint:disable-next-line:typedef
  deleteTodo(todo: ToDo){
    const index = this.todos.findIndex(
      (currentObj) => currentObj.id === todo.id
    );

    this.todos.splice(index, 1);
  }
}
