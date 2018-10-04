export const NUMBER_OF_STARS = 10;

export interface Movie {
  id: number;
  title: string;
  overview: string;
  release_date: Date;
  original_title: string;
  original_language: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  popularity: number;
  backdrop_path: string;
  poster_path: string;
  genre_ids: number[];
  adult: boolean;
  genres?:any;
}
