export interface Root {
  results: MediaResult[];
  totalResults: string;
}

export interface MediaResult {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export enum MediaType {
  ALL = '',
  MOVIE = 'movie',
  SERIES = 'series',
  GAME = 'game',
}

export enum SortDir {
  ASC = 0,
  DESC = 1,
}
