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

  pageNumber: number = 1;
  currentPage: number = this.pageNumber;
  resultsPerPage: number = 9;
  updated: boolean = false;
  articles: Array<article> = [];
  baseUrl: string = '';

  ngOnInit(): void {
    this.initiateRequest();
  }

  fetchNewsArticles(): void {
    this.dataService.getArticles(this.baseUrl).subscribe((data) => {
      this.articles = data;
    });
  }

  incrementPage(): void {
    this.pageNumber += 1;
    if (this.pageNumber !== this.currentPage) {
      this.initiateRequest();
    }
  }

  decrementPage(): void {
    if (this.pageNumber === 1) return;
    else {
      this.pageNumber -= 1;
      if (this.pageNumber !== this.currentPage - 1) {
        this.initiateRequest();
      }
    }
  }

  private generateBaseUrl(): string {
    return `https://dev.to/api/articles?page=${this.pageNumber}&per_page=${this.resultsPerPage}`;
  }

  private initiateRequest() {
    this.baseUrl = this.generateBaseUrl();
    this.fetchNewsArticles();
  }
}
