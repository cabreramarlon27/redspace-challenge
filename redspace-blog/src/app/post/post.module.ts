import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { AppModule } from '../app.module';
import { PostService } from '../services/post.service';
import { WordpressService } from '../services/wordpress.service';
import { HttpClientModule } from '@angular/common/http';
import { EntryComponent } from './entry/entry.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ListComponent,
    EntryComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    AppModule
  ],
  providers: [
    WordpressService,
    PostService,
  ],
})
export class PostModule { }
