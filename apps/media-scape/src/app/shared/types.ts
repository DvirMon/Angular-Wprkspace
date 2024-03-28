export interface Root {
  results: Result[];
  totalResults: string;
}

export interface Result {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export enum MediaType {
  MOVIE = 'movie',
  SERIES = 'series',
  GAME = 'game',
}

export enum SortDir {
  ASC = 0,
  DESC = 1,
}
