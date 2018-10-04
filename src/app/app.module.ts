import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesService } from "./services/movies.service";
import { MoviesComponent } from './components/movies/movies.component';
import { MovieComponent } from './components/movies/movie/movie.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { PaginationModule } from 'ngx-bootstrap';
import { StarRatingConfigService, StarRatingModule } from 'angular-star-rating';
import { CustomConfigService } from './services/custom-config.service';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { ReviewComponent } from './components/reviews/review/review.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieDetailComponent,
    MovieComponent,
    NotFoundComponent,
    ReviewsComponent,
    ReviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    StarRatingModule.forRoot(),
    PaginationModule.forRoot()
  ],
  providers: [
    MoviesService,
    {
      provide: StarRatingConfigService,
      useClass: CustomConfigService
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
