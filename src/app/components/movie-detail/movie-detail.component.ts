import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movie$: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.movie$ = this.moviesService.getMovie(params['id']);
    });
  }
}
