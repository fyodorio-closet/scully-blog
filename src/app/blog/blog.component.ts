import {Component, OnInit} from '@angular/core';
import {BlogService} from './blog.service';
import {map, switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogPostContent$: Observable<string>;
  blogPostTitle$: Observable<string>;

  currentBlogPostSlugFromRouter$: Observable<string> = this.route.params.pipe(
    map(p => p.slug)
  );

  constructor(private route: ActivatedRoute, private blogService: BlogService) {
  }

  ngOnInit() {
    this.currentBlogPostSlugFromRouter$.pipe(
      switchMap(slug => this.blogService.getBlogPostId(slug)),
      map(id => this.blogService.getBlogPostBodyHtml(id))
    )
      .subscribe(htmlContent$ => {
      this.blogPostContent$ = htmlContent$;
    });
    this.currentBlogPostSlugFromRouter$.pipe(
      switchMap(slug => this.blogService.getBlogPostId(slug)),
      map(id => this.blogService.getBlogPostTitle(id))
    )
      .subscribe(title$ => {
        this.blogPostTitle$ = title$;
      });
  }
}
