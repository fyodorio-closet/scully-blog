import { ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import {Component, OnInit} from '@angular/core';
import {map, switchMap} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import {BlogService} from '../blog/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  links$: Observable<any> = this.scully.available$;

  constructor(private scully: ScullyRoutesService, private blogService: BlogService) {}

  ngOnInit() {}
}
