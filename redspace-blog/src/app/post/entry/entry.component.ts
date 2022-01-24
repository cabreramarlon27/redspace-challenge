import { Component, Input, OnInit } from '@angular/core';
import { PostModel } from 'src/app/model/post';
import { PostService } from 'src/app/services/post.service';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css'],
    providers: [ PostService]
})
export class EntryComponent implements OnInit {
  constructor(private route:ActivatedRoute,private router:Router, private postService: PostService) { }
  id: string = '';
  post: PostModel = new PostModel();
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
        this.id = params.get('id') || '';
        console.log(this.id);
    });
    this.loadPost();
  }
  loadPost() {
    try{
      this.postService.get(this.id).subscribe(
        (data) => {
          console.log(data);
          this.post = data;
        }
      );

    }catch(e){
      console.log(e);
    }
  }
}
