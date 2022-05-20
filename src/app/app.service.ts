import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class todosService {
  constructor(private http: HttpClient) {}
  getTodosList() {
    let url = 'https://jsonplaceholder.typicode.com/todos/';
    return this.http.get(url).pipe(shareReplay());
  }
}
