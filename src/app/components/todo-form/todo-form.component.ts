import { Component, OnInit } from '@angular/core';
import { ToDo } from './../../model/todo';
import { v4 } from 'uuid';
import { TodoService } from './../../service/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  todoTitle: string;
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  handleAdd(){

    const newTodo: ToDo = {
      id: v4(),
      title: this.todoTitle,
      date: new Date(),
      isComplete: false
    };

    this.todoService.addTodo(newTodo);
    this.todoTitle = '';
  }
}
