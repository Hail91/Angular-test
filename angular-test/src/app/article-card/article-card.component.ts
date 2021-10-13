import { Component, OnInit, Input } from '@angular/core';
import { article } from '../main-container-component/interfaces/index';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css'],
})
export class ArticleCardComponent implements OnInit {
  @Input() article!: article;

  constructor() {}

  statsModalOpen: boolean = false;

  ngOnInit(): void {}

  toggleStatsModal(): void {
    this.statsModalOpen = !this.statsModalOpen;
  }
}
