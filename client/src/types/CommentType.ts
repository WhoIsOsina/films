import { FilmType } from './FilmType';
import { UserType } from "./UserType";

export interface CommentType {
   id?: number;
   content: string;
   userId: number;
   filmId: number;
   user?: UserType;
   film?: FilmType;
   likes?: number;
   dislikes?: number;
   updated?: boolean
}