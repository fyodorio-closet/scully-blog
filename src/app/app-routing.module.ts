import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BlogComponent} from './blog/blog.component';
import {BlogModule} from './blog/blog.module';

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'blog/:slug', component: BlogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BlogModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
