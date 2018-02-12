import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoDataService } from '../todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  title: string = 'To do App';
  newTodo: Todo = new Todo();
  constructor(private todoDataService: TodoDataService) {}

  ngOnInit() {
  }

  // POST /todos
  public addTodo(): void {
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  // GET /todos
  public get allTodos():  Array<Todo> {
    return this.todoDataService.getTodos();
  }

  // PUT complete /todos
  public updateComplete({ id }): void {
    this.todoDataService.toggleTodoComplete(id);
  }

  // DELETE /todos
  public deleteTodo({ id }): void {
    this.todoDataService.deleteTodoById(id);
  }

}
