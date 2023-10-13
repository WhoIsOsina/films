import React, { ButtonHTMLAttributes, FC, PropsWithChildren, ReactText, useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context';
import MyRating from './UI/rating/MyRating';
import axios from 'axios';
import { RateType } from '../types/RateType';
import { UserType } from '../types/UserType';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

interface RatingProps {
   filmId: number;
   user: UserType | null
}



const Rating: FC<PropsWithChildren<RatingProps>> = ({ filmId, user }) => {
   const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
   const [canRate, setCanRate] = useState(true)
   const [rate, setRate] = useState(0)
   const [userRate, setUserRate] = useState<number | null>(null)
   const location = useLocation()
   const navigate = useNavigate()



   const fetchFilmRates = async (filmId: number | undefined) => {
      const rates = await axios.get<RateType>('http://localhost:5000/rating/film/' + filmId)
         .then((rates) => {
            let totalRate = 0
            let count = 0
            //@ts-ignore
            rates.data.map((rate: RateType) => {
               count += 1;
               totalRate += rate.rate
               if (rate.userId === user?.id) {
                  setCanRate(false)
                  setUserRate(rate.rate)
               }
            })
            setRate(totalRate / count)
         });

   }

   const rateFilm = async (number: number) => {
      const dto: RateType = { userId: user!.id, filmId: filmId, rate: number }
      const response = await axios.post('http://localhost:5000/rating', dto)
         .then(() => {
            setUserRate(number)
            setCanRate(false)
         })
         .catch((err) => {
            console.log(err);
         })
   }

   const removeRate = async () => {
      if (userRate) {
         const dto: RateType = { userId: user!.id, filmId: filmId, rate: userRate }
         console.log(dto);

         const response = await axios.delete('http://localhost:5000/rating', { data: dto })
            .then(() => {
               setUserRate(null)
               setCanRate(true)
            })
            .catch((err) => {
               console.log(err);
            })
      }
   }

   useEffect(() => {
      fetchFilmRates(filmId)
   }, [canRate, user])

   return (
      <div>
         <div>РЕЙТИНГ</div>
         <div className='film__page__rating'>{rate.toFixed(1)}/10</div>
         <hr style={{ margin: '10px 0', width: '100%' }} />
         {(user && canRate)
            ? (
               <div>
                  <div style={{ textAlign: 'center', margin: '10px 0' }}>Оцените фильм</div>
                  <div className='film__page__user_rate'>
                     {numbers.map(number =>
                        <MyRating
                           key={number}
                           onClick={() => {
                              rateFilm(number)
                           }}
                        >{number}
                        </MyRating>
                     )}
                  </div>
               </div>
            )
            : ((!canRate && user) ? (
               <div>
                  <div>Вы оценили этот фильм на {userRate}</div>
                  <div style={{ fontSize: '14px', color: 'grey', cursor: 'pointer' }} onClick={removeRate}>ИЗМЕНИТЬ ОЦЕНКУ</div>
               </div>
            )
               : <div style={{ textAlign: 'center', textTransform: 'none', fontWeight: '200' }}>
                  <span
                     style={{ textDecoration: 'underLine', cursor: 'pointer', color: 'rgb(70, 124, 241)' }}
                     onClick={() => navigate('/login', { state: { from: location } })}
                  >
                     Войдите
                  </span>, чтобы оценить фильм</div>)
         }
      </div>
   );
}

export default Rating;
