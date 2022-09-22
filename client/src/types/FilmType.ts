import { RateType } from './RateType';
export interface FilmType {
   id: number;
   name: string;
   year: string;
   genre: string[];
   director: string;
   picture: string;
   video: string;
   rating: number;
   rates: RateType[]
}