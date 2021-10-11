import { Component, OnInit } from '@angular/core';
import { ApiService } from '../API/api.service';

interface article {
  title: string;
}
@Component({
  selector: 'app-main-container-component',
  templateUrl: './main-container-component.html',
  styleUrls: ['./main-container-component.css'],
})
export class MainContainerComponent implements OnInit {
  constructor(ApiService: ApiService) {}

  articles: Array<article> = [];

  ngOnInit(): void {
    // Make call with ApiService client and fetch and return some data
    console.log(this.articles);
  }

  fetchNewsArticles(): Array<article> {
    return [];
  }
}
