import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../context';
import { useFilms } from '../hooks/useFilms';
import { FilmType } from '../types/FilmType';
import CardFilmItem from './CardFilmItem';

const FilmList = () => {
   const [films, setFilms] = useState([])
   const { query, setQuery } = useContext(SearchContext)
   const searchedFilms = useFilms(films, query)

   const fetchFilms = async () => {
      const response = await axios.get('http://localhost:5000/films');
      setFilms(response.data)
   }

   useEffect(() => {
      fetchFilms()
   }, [])

   return (
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
         {searchedFilms.map((film: FilmType, index) =>
            <CardFilmItem key={index} film={film} />)}
      </div>
   );
}

export default FilmList;
