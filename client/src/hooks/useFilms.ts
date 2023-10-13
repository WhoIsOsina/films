import { RootState } from './../store/store';
import { useDispatch, useSelector } from 'react-redux'
import { useMemo } from 'react';
import { FilmType } from '../types/FilmType';
export const useFilms = (films: FilmType[], query: string, years: number[]) => {
   // const years = useSelector((state: RootState) => state.yearsReducer.years)
   const searchedFilms = useMemo(() => {
      return films?.filter(film => film.name.toLowerCase().includes(query.toLowerCase()) && Number(film.year) >= Number(years[0]) && Number(film.year) <= Number(years[1]))
   }, [query, films, years])

   return searchedFilms
}