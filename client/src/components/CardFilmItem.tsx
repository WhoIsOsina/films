import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FilmType } from '../types/FilmType';
import { RateType } from '../types/RateType';

export interface FilmProps {
   film: FilmType
}

const CardFilmItem: FC<FilmProps> = ({ film }) => {
   const navigate = useNavigate()
   const [rate, setRate] = useState<number | null>()
   const [genres, setGenres] = useState<string>()


   const fetchFilmRates = async (filmId: number | undefined) => {
      const rates = await axios.get<RateType>('http://localhost:5000/rating/film/' + filmId)
         .then((rates) => {
            let totalRate = 0
            let count = 0
            //@ts-ignore
            rates.data.map((rate: RateType) => {
               count += 1;
               totalRate += rate.rate
            })
            setRate(totalRate / count)
         });
   }

   const joinGenres = async () => {
      const genre: string[] = []
      film.genres.map(g => {
         genre.push(g.genre)
      })
      setGenres(genre.join(', '))
   }

   useEffect(() => {
      fetchFilmRates(film.id)
      joinGenres()
      console.log(film.genres)
   }, [])

   return (
      <div className='film__card' onClick={() => navigate('/films/' + film.id)}>
         <div className='film__image'>
            <div className='film__card__rating_block'>
               <div className='film__card__rating'>{Number(rate).toFixed(1)}/10</div>
            </div>
            <img src={'http://localhost:5000/' + film.picture}></img>
         </div>
         <div className='film__description__wrapper'>
            <div className='film__description'>
               <div className='film__title'>
                  <div>{film.name}</div>
                  <div>{film.year}</div>
               </div>
               <div className='film__genre'>{genres}</div>
            </div>
         </div>
      </div>
   );
}

export default CardFilmItem;
