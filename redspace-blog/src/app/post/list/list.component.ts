import { Component, OnInit } from '@angular/core';
import { PostModel } from 'src/app/model/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [ PostService]
})
export class ListComponent implements OnInit {
  posts: Array<PostModel> = [];
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    if (this.posts.length == 0) {
      this.loadPosts();
    }
  }

  loadPosts() {
    try{
      this.postService.getList().subscribe(
        (data) => {
          data.forEach(element => {
          this.posts.push(element);
        });
        }
      );

    }catch(e){
      console.log(e);
    }
  }
}
