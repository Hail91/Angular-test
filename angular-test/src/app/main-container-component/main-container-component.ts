import { Component, OnInit } from '@angular/core';
import { ApiService } from '../API/api.service';

import { article } from './interfaces/index';

@Component({
  selector: 'app-main-container-component',
  templateUrl: './main-container-component.html',
  styleUrls: ['./main-container-component.css'],
  providers: [ApiService],
})
export class MainContainerComponent implements OnInit {
  constructor(private dataService: ApiService) {}

  articles: Array<article> = [];
  baseUrl: string = 'https://dev.to/api/articles';

  ngOnInit(): void {
    this.fetchNewsArticles();
  }

  fetchNewsArticles() {
    this.dataService.getArticles(this.baseUrl).subscribe((data) => {
      this.articles = data;
    });
  }
}
