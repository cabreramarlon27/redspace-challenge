import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IApiService } from '../interfaces/ApiService';
import { PostModel } from '../model/post';
import { Observable } from 'rxjs';
import { map, catchError, switchMap, mergeMap } from 'rxjs/operators';
import { WordpressService } from './wordpress.service';
import { Component, Inject } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient, @Inject(WordpressService) private api: IApiService) { }

  getList(): Observable<PostModel[]> {
    return this.api.getList('/posts').pipe(
      map((data) => data.map((item: any) => this.map(item))),
    );
  }
  get(id:string): Observable<PostModel> {
    return this.api.get('/posts/' + id).pipe(
      map((data) => this.map(data)),
    );
  }
  map(item: any): PostModel {
    // This mapper should be a external class that maps the data from the API to the model, Im doing a function for time constrain
    let postItem = new PostModel();
    postItem.id = item.id;
    postItem.name = item.title.rendered;
    postItem.slug = item.slug;
    postItem.content = item.content.rendered;
    postItem.excerpt = item.excerpt.rendered;
    console.log(item);
    postItem.thumbImage = item.fimg_url;
    postItem.date = new Date(item.date);
    return postItem;
  }
}
