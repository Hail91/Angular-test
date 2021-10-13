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

  // Define some local state to handle whether stats modal should be displayed
  statsModalOpen: boolean = false;

  ngOnInit(): void {}

  toggleStatsModal(): void {
    this.statsModalOpen = !this.statsModalOpen;
  }
}
