import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { DEFAULT_PAGE_NUMBER } from '../models/movies.interface';

@Injectable()
export class MoviesService {

  url = 'movie';

  token: string;

  constructor(
    private http: HttpClient,
  ) {
    this.token = environment.token;
  }

  getMovies(page = DEFAULT_PAGE_NUMBER): Observable<any> {
    return this.http.get(`${ environment.API_ENDPOINT_ROOT }${ this.url }/now_playing`, {
      params: {
        page: page,
        api_key: this.token,
      }
    });
  }

  getMovie(movieId): Observable<any> {
    return this.http.get(`${ environment.API_ENDPOINT_ROOT }${ this.url }/${ movieId }`, {
      params: {
        api_key: this.token,
      }
    });
  }

  getReview(movieId): Observable<any> {
    return this.http.get(`${ environment.API_ENDPOINT_ROOT }${ this.url }/${ movieId }/reviews`, {
      params: {
        api_key: this.token,
      }
    });
  }

  getGenre(): Observable<any> {
    return this.http.get(`${ environment.API_ENDPOINT_ROOT }genre/${ this.url }/list`, {
      params: {
        api_key: this.token,
      }
    });
  }
}
