import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../../models/movie.inteface';
import { moment } from 'ngx-bootstrap/chronos/test/chain';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input() movie: Movie;

  @Input() genres: any;

  constructor() { }

  ngOnInit() { }

  get voteAverage() {
    return this.movie.vote_average || 0;
  }

  get overview() {
    return this.movie.overview || '';
  }

  get releaseDate() {
    return moment(this.movie.release_date).format('DD MMM YYYY');
  }

  get genre() {
    if (!this.genres) {
      return this.movie.genres.map(genre => genre.name).toString();
    }

    return this.genres.filter(genre => this.movie.genre_ids.includes(genre.id)).map(genre => genre.name).toString();
  }
}

