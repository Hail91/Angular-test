import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainContainerComponent } from './main-container-component/main-container-component';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { ArticleCardComponent } from './article-card/article-card.component';

@NgModule({
  declarations: [AppComponent, MainContainerComponent, MainNavigationComponent, ArticleCardComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
