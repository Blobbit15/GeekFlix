import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MoviePageComponent } from './components/movie-page/movie-page.component';
import { SimilarMoviesComponent } from './components/similar-movies/similar-movies.component';
import { MovieSynopsisComponent } from './components/movie-synopsis/movie-synopsis.component';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { NotFoundComponent } from './components/not-found/not-found.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    MoviePageComponent,
    SimilarMoviesComponent,
    MovieSynopsisComponent,
    NotFoundComponent,
    MovieDetailsComponent,
  ],
  imports: [
    BrowserModule,
    NzCardModule,
    NzCheckboxModule,
    NzInputModule,
    HttpClientModule,
    FormsModule,
    NzMenuModule,
    NzFormModule,
    NzButtonModule,
    RouterModule.forRoot([
      { path: '', component: HomePageComponent },
      { path: 'movie/:id', component: MoviePageComponent },
      { path: '**', component: NotFoundComponent}
    ], {enableTracing: true})
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
