import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../service/todo.service';
import { ToDo } from './../../model/todo';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  faTrashAlt = faTrashAlt;
  todos: ToDo[];
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {

    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  // tslint:disable-next-line:typedef
  changeTodoStatus(todo: ToDo){
    this.todoService.changeStatus(todo);
  }

  // tslint:disable-next-line:typedef
  deleteTodo(todo: ToDo){
    this.todoService.deleteTodo(todo);
  }
}
