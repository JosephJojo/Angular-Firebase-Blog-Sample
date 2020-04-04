import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogListComponent } from './blog/blog-list/blog-list.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { BlogNewComponent } from './admin/blog-new/blog-new.component';
import { LoginComponent } from './admin/login/login.component';
import { BlogEditComponent } from './admin/blog-edit/blog-edit.component';
import { BlogViewComponent } from './blog/blog-view/blog-view.component';


const routes: Routes = [
  { path: '', component: BlogListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: DashboardComponent },
  { path: 'admin/blog/new', component: BlogNewComponent },
  { path: 'blog/view/:id', component: BlogViewComponent },
  { path: 'admin/blog/edit/:id', component: BlogEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
