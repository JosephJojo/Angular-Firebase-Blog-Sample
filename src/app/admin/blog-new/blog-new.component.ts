import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BlogService } from '../../shared/blog.service';

import Quill from 'quill';
import ImageResize from 'quill-image-resize-module';
Quill.register('modules/imageResize', ImageResize);

@Component({
  selector: 'app-blog-new',
  templateUrl: './blog-new.component.html',
  styleUrls: ['./blog-new.component.scss']
})
export class BlogNewComponent implements OnInit {

  myReader:FileReader;

  blogForm: FormGroup;
  categories: string[] = [null, 'Angular', 'SharePoint', 'JavaScript', 'PowerShell', "M365"];
  status: string[] = [null, 'Draft', 'Published'];

  constructor(private formBuilder: FormBuilder, private blogService: BlogService) { 
    this.blogForm = formBuilder.group({
      'title': [null, Validators.required],
      'category': [null, Validators.required],
      'content': [null, Validators.required],
      'status': [null, Validators.required],
      'img': [null, null]
    })
  }

  ngOnInit(): void {
  }

  addPost(post) {
    post.created = new Date();
    post.modified = new Date();
    if(this.myReader) {
      post.img = this.myReader.result;
    }
    if(post.status == "Published") {
      post.published = new Date();
    }
    this.blogService.newPost(post);
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
