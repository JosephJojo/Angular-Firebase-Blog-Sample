import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BlogService } from '../../shared/blog.service';
import { Blog } from '../../shared/blog.model';

import Quill from 'quill';
import ImageResize from 'quill-image-resize-module';
Quill.register('modules/imageResize', ImageResize);

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.scss']
})
export class BlogEditComponent implements OnInit {

  myReader:FileReader;

  blogPost: Blog;
  blogForm: FormGroup;
  categories: string[] = [null, 'Angular', 'SharePoint', 'JavaScript', 'PowerShell', "M365"];
  status: string[] = [null, 'Draft', 'Published'];

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private blogService: BlogService) { }

  loadPost(): void{
    const id = this.route.snapshot.paramMap.get('id');
    
    this.blogForm = this.formBuilder.group({
      'title': [null, Validators.required],
      'category': [null, Validators.required],
      'content': [null, Validators.required],
      'status': [null, Validators.required],
      'img': [null, null]
    })

    this.blogService.getPost(id).subscribe(post => {
      this.blogPost = post,

      this.blogForm.setValue({
        title: this.blogPost.title,
        category: this.blogPost.category,
        content: this.blogPost.content,
        status: this.blogPost.status,
        img: this.blogPost.img
      })
    });
  }

  ngOnInit(): void {
    this.loadPost();
  }

  updatePost(post: Blog) {
    const id = this.route.snapshot.paramMap.get('id');
    post.modified = new Date();
    if(this.myReader) {
      post.img = this.myReader.result as string;
    }
    if(post.status == "Published") {
      post.published = new Date();
    } else {
      post.published = null;
    }
    this.blogService.updatePost(id, post);
  }

  changeBannerListener($event) : void {
    this.readThis($event.target);
  }
  
  readThis(inputValue: any): void {
    var file:File = inputValue.files[0];
    this.myReader = new FileReader();
  
    this.myReader.onloadend = (e) => {
      // console.log(this.myReader.result);
    }
    this.myReader.readAsDataURL(file);
  }

}
