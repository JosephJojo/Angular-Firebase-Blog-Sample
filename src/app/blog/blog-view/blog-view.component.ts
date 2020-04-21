import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../shared/blog.service';
import { Blog } from '../../shared/blog.model';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.scss']
})
export class BlogViewComponent implements OnInit {

  blogPost: Blog;

  constructor(private route: ActivatedRoute, private blogService: BlogService, public auth: AuthService) { }

  loadPost(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.blogService.getPost(id).subscribe(post => {
      this.blogPost = post
    })
  }

  ngOnInit(): void {
    this.loadPost();
  }

}
