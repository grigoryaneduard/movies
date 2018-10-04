import { Injectable } from '@angular/core';
import { StarRatingConfigService } from 'angular-star-rating';
import { NUMBER_OF_STARS } from '../models/movie.inteface';

@Injectable()
export class CustomConfigService extends StarRatingConfigService {

  constructor() {
    super();
    this.numOfStars = NUMBER_OF_STARS;
  }
}
