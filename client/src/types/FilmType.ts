import { GenreType } from './GenreType';
import { RateType } from './RateType';
export interface FilmType {
   id: number;
   name: string;
   year: string;
   genres: GenreType[];
   director: string;
   picture: string;
   video: string;
   rating: number;
   rates: RateType[]
}