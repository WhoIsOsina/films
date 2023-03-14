import axios from 'axios';
import React, { useContext, useEffect, useState, FC } from 'react';
import { SearchContext, SortContext } from '../context';
import { useFetching } from '../hooks/useFetching';
import { useFilms } from '../hooks/useFilms';
import { FilmType } from '../types/FilmType';
import { SortType } from '../types/SortType';
import CardFilmItem from './CardFilmItem';
import Loader from './UI/loader/Loader';


const FilmList: FC = () => {
   const [films, setFilms] = useState([])
   const { query, setQuery } = useContext(SearchContext)
   const { sortMech, setSortMech } = useContext(SortContext)
   const [sort, setSort] = useState<SortType>()
   const searchedFilms = useFilms(films, query)
   const [fetchFilms, isLoading, error] = useFetching(async () => {
      const response = await axios.get('http://localhost:5000/films')
      const films: FilmType[] = response.data
      //@ts-ignore
      setFilms(films)
   })

   function filterFilms() {
      films.filter((film: FilmType) => Number(film.year) >= sortMech.year[0] && Number(film.year) <= sortMech.year[1])
   }

   useEffect(() => {
      fetchFilms()
      setSort(sortMech)
   }, [])

   if (sort?.year[0] !== sortMech.year[0] || sort?.year[1] !== sortMech.year[1]) {
      setSort(sortMech)
   }
   useEffect(() => {
      filterFilms()
      //console.log(sortMech);

   }, [sortMech, setSortMech, sort])


   return (
      <div>
         {isLoading
            ?
            <Loader />
            :
            <div>
               {error
                  ?
                  <h1 style={{ color: '#fff' }}>ПРОИЗОШЛА ОШИБКА</h1>
                  :
                  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                     {searchedFilms.map((film: FilmType, index) =>
                        <CardFilmItem key={index} film={film} />)}
                  </div>
               }
            </div>
         }
      </div>
   );
}

export default FilmList;
