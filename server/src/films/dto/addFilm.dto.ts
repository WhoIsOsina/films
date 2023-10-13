import { Genre } from './../../entity/Genre.entity';
export class AddFilmDto {
   readonly name: string;
   readonly year: string;
   readonly genre: string | Genre[]
   readonly director: string;
}