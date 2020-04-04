import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../shared/blog.service';
import { Observable } from 'rxjs';
import { Blog } from '../../shared/blog.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  posts: Observable<Blog[]>;

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.posts = this.blogService.getPosts();
  }

  deletePost(id: string) {
    this.blogService.deletePost(id);
  }

}
