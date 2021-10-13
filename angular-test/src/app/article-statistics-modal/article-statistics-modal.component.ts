import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { article } from '../main-container-component/interfaces/index';

@Component({
  selector: 'app-article-statistics-modal',
  templateUrl: './article-statistics-modal.component.html',
  styleUrls: ['./article-statistics-modal.component.css'],
})
export class ArticleStatisticsModalComponent implements OnInit {
  @Input() statsModalOpen!: boolean;
  @Input() article!: article;

  @Output() modalClose: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  triggerCloseModal(): void {
    this.modalClose.emit('closeModal');
  }
}
