import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { todosService } from './app.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  completedTodos: number = 0;
  incompleteTodos: number = 0;
  todoResponse: any;
  constructor(private todoService: todosService, private http: HttpClient) {}
  ngOnInit() {
    this.todoResponse = this.todoService.getTodosList();
  }
  getIncompleteTods() {
    this.incompleteTodos = 0;
    //Avoid this
    // this.todoService.getTodosList().subscribe((res: Array<any>) => console.log(res));
    this.todoResponse.subscribe((res: Array<any>) => {
      res.forEach((todo) => {
        if (!todo.completed) {
          this.incompleteTodos++;
        }
      });
    });
  }
  getCompletedTodos() {
    this.completedTodos = 0;
    //Avoid this
    // this.todoService.getTodosList().subscribe((res: Array<any>) => console.log(res));
    this.todoResponse.subscribe((res: Array<any>) => {
      res.forEach((todo) => {
        if (todo.completed) {
          this.completedTodos++;
        }
      });
    });
  }
}
