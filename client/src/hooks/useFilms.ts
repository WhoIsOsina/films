import { useMemo } from 'react';
import { FilmType } from '../types/FilmType';
export const useFilms = (films: FilmType[], query: string) => {
   const searchedFilms = useMemo(() => {
      return films.filter(film => film.name.toLowerCase().includes(query.toLowerCase()))
   }, [query, films])

   return searchedFilms
}