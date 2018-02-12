import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable()
export class TodoDataService {

  public lastId: number = 0;
  public todos: Todo[] = [];

  constructor(private store: Store<any>) {
    store.select('todos').subscribe(todos => {
      this.todos = todos;
    });
  }

  // POST /todos
  public addTodo(todo: Todo): void {
    this.store.dispatch({
      type: 'ADD_TODO',
      payload: {
        id: ++this.lastId,
        title: todo.title,
        description: todo.description,
        complete: todo.complete
      }
    });
  }

  // GET /todos
  public getTodos(): Todo[] {
    return this.todos;
  }

  // GET /todo/:id
  public getTodo(id: number): Todo {
    return this.todos.find(todo => todo.id === id);
  }

  // PUT complete /todos
  public toggleTodoComplete(todoId: number): void {
    this.store.dispatch({
      type: 'TOGGLE_COMPLETE',
      payload: { id: todoId }
    });
  }

  // DELETE /todos
  public deleteTodoById(todoId: number): void {
    this.store.dispatch({
      type: 'REMOVE_TODO',
      payload: { id: todoId }
    });
  }

}
