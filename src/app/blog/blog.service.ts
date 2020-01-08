import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private httpClient: HttpClient) { }

  getBlogPostId(slug: string) {
    return this.httpClient
      .get(`https://dev.to/api/articles?username=fyodorio&slug=${slug}`)
      .pipe(
        map(response => response[0].id)
      );
  }

  getBlogPostBodyHtml(id: number): Observable<string> {
    return this.httpClient
      .get(`https://dev.to/api/articles/${id}`)
      .pipe(
        map(response => response['body_html'])
      );
  }

  getBlogPostTitle(id: number) {
    return this.httpClient
      .get(`https://dev.to/api/articles/${id}`)
      .pipe(
        map(response => response['title'])
      );
  }
}
