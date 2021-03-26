import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private _http: HttpClient) { }

  getAll(): Observable<any[]>{
    return this._http.get<any[]>('https://jsonplaceholder.typicode.com/posts')
  }

}
