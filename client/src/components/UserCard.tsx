import axios from 'axios';
import React, { FC, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context';
import { FilmType } from '../types/FilmType';
import { RateType } from '../types/RateType';

interface UserCardProps {
   film: FilmType
}

const UserCard: FC<UserCardProps> = ({ film }) => {
   const { user, setUser } = useContext(UserContext)
   const [rating, setRating] = useState(0)
   const [userRate, setUserRate] = useState<number>()
   const navigate = useNavigate()


   const ratingFilm = async () => {
      const response = await axios.get<RateType[]>('http://localhost:5000/rating/film/' + film.id)
      let totalRate = 0;
      response.data.map((rate: RateType) => {
         totalRate += rate.rate
         if (rate.userId === user?.id) {
            setUserRate(rate.rate)
         }
      })
      totalRate /= response.data.length
      setRating(Number(totalRate.toFixed(1)))
   }

   useEffect(() => {
      ratingFilm()
   }, [])

   return (
      <div className='user_page_card' onClick={() => navigate('/films/' + film.id)}>
         <div className='user_page_card_image'>
            <img src={'http://localhost:5000/' + film.picture} style={{ height: '100%', width: '100%' }} />
         </div>
         <div className='user_card_attribute'> <span className='user_card_field'>Название:</span>{film.name} </div>
         <div className='user_card_attribute'> <span className='user_card_field'>Год выпуска:</span>{film.year}</div>
         <div className='user_card_attribute'> <span className='user_card_field'>Рейтинг:</span>{rating}/10</div>
         <div className='user_card_attribute'> <span className='user_card_field'>Ваша оценка:</span>{userRate}</div>

      </div>
   );
}

export default UserCard;
