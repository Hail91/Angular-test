import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleStatisticsModalComponent } from './article-statistics-modal.component';

describe('ArticleStatisticsModalComponent', () => {
  let component: ArticleStatisticsModalComponent;
  let fixture: ComponentFixture<ArticleStatisticsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleStatisticsModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleStatisticsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
