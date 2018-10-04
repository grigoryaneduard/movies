import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  @Input() movieId: number;

  reviews$: Observable<any>;

  constructor(
    private moviesService: MoviesService,
  ) { }

  ngOnInit() {
    this.reviews$ = this.moviesService.getReview(this.movieId);
  }
}
