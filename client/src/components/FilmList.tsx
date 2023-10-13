import axios from 'axios';
import React, { useContext, useEffect, useState, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SearchContext, SortContext } from '../context';
import { useFetching } from '../hooks/useFetching';
import { useFilms } from '../hooks/useFilms';
import { RootState } from '../store/store';
import { setYears } from '../store/yearsReducer';
import { FilmType } from '../types/FilmType';
import { SortType } from '../types/SortType';
import CardFilmItem from './CardFilmItem';
import Loader from './UI/loader/Loader';


const FilmList: FC = () => {
   const dispatch = useDispatch()
   const years = useSelector((state: RootState) => state.yearsReducer.years)
   const [allFilms, setAllFilms] = useState<FilmType[]>([])
   const [films, setFilms] = useState<FilmType[]>([])
   const query = useSelector((state: RootState) => state.queryReducer.query)
   const { sortMech, setSortMech } = useContext(SortContext)
   const [sort, setSort] = useState<SortType>()
   const searchedFilms = useFilms(allFilms, query, years)
   const [fetchFilms, isLoading, error] = useFetching(async () => {
      const response = await axios.get('http://localhost:5000/films')
      const allFilms: FilmType[] = response.data
      setAllFilms(allFilms)
   })

   useEffect(() => {
      fetchFilms()
   }, [films])



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
                     {searchedFilms?.map((film: FilmType, index) =>
                        <CardFilmItem key={index} film={film} />)}
                  </div>
               }
            </div>
         }
      </div>
   );
}

export default FilmList;
