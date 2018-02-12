import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../todo';
import {TodoDataService} from '../todo-data.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {

  todo: Todo;
  constructor(private route: ActivatedRoute,
              private todoDataService: TodoDataService ) { }

  ngOnInit() {
  }

  // GET /todos
  public get detailTodo():  Todo {
    const id = +this.route.snapshot.paramMap.get('id');
    return this.todoDataService.getTodo(id);
  }

}
