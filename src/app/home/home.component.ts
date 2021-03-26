import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items$:Observable<any[]>;

  constructor(private _api: PostService) { }

  ngOnInit(): void {
    this.items$ = this._api.getAll();
  }

}
