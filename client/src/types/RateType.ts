import { UserType } from './UserType';
import { FilmType } from './FilmType';


export interface RateType {
   userId: number;
   rate: number;
   filmId: number;
   film?: FilmType;
   user?: UserType;
}