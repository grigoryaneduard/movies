import { Dates } from './dates.interface';
import { Movie } from './movie.inteface';

export const DEFAULT_PAGE_NUMBER = '1';

export interface Movies {
  dates: Dates;
  page: string;
  results: Movie[];
  total_pages: string;
  total_results: string;
}
