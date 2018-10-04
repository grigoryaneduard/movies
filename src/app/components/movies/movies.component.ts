import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../models/movie.inteface';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  totalItems: string;

  currentPage: string;

  movies: Movie[];

  genres: any;

  constructor(
    private moviesService: MoviesService,
  ) { }

  ngOnInit() {
    this.moviesService.getMovies()
      .subscribe(response => {
        this.movies = response.results;
        this.currentPage = response.page;
        this.totalItems = response.total_pages;
      });

    this.moviesService.getGenre()
      .subscribe(response => this.genres = response.genres);
  }

  pageChanged($event) {
    this.moviesService.getMovies($event.page)
      .subscribe(response => this.movies = response.results);
  }
}
