import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from '../../shared/blog.model';
import { BlogService } from '../../shared/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  posts: Observable<Blog[]>;

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.posts = this.blogService.getPosts();
  }

}
