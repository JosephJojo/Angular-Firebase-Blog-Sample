import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { LoginComponent } from './admin/login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { BlogNewComponent } from './admin/blog-new/blog-new.component';
import { BlogEditComponent } from './admin/blog-edit/blog-edit.component';
import { BlogListComponent } from './blog/blog-list/blog-list.component';
import { BlogViewComponent } from './blog/blog-view/blog-view.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateAgoPipe } from './shared/pipes/date-ago.pipe';

import { QuillModule } from 'ngx-quill';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    BlogNewComponent,
    BlogEditComponent,
    BlogListComponent,
    BlogViewComponent,
    DateAgoPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    QuillModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
