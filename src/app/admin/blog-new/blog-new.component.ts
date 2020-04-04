import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BlogService } from '../../shared/blog.service';

@Component({
  selector: 'app-blog-new',
  templateUrl: './blog-new.component.html',
  styleUrls: ['./blog-new.component.scss']
})
export class BlogNewComponent implements OnInit {

  blogForm: FormGroup;
  categories: string[] = [null, 'Angular', 'SharePoint', 'JavaScript', 'PowerShell', "M365"];
  status: string[] = [null, 'Draft', 'Published'];

  constructor(private formBuilder: FormBuilder, private blogService: BlogService) { 
    this.blogForm = formBuilder.group({
      'title': [null, Validators.required],
      'category': [null, Validators.required],
      'content': [null, Validators.required],
      // 'created': [null, Validators.required],
      // 'published': [null, Validators.required],
      'status': [null, Validators.required],
      'img': [null, null]
    })
  }

  ngOnInit(): void {
  }

  addPost(post) {
    post.created = new Date();
    if(post.status == "Published") {
      post.published = new Date();
    }
    this.blogService.newPost(post);
  }

}
