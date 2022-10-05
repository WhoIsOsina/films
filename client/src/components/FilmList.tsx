import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../context';
import { useFetching } from '../hooks/useFetching';
import { useFilms } from '../hooks/useFilms';
import { FilmType } from '../types/FilmType';
import CardFilmItem from './CardFilmItem';
import Loader from './UI/loader/Loader';

const FilmList = () => {
   const [films, setFilms] = useState([])
   const { query, setQuery } = useContext(SearchContext)
   const searchedFilms = useFilms(films, query)
   const [fetchFilms, isLoading, error] = useFetching(async () => {
      const response = await axios.get('http://localhost:5000/films')
      setFilms(response.data)
   })

   // const fetchFilms = async () => {
   //    const response = await axios.get('http://localhost:5000/films');
   //    setFilms(response.data)
   // }

   useEffect(() => {
      fetchFilms()
   }, [])

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
