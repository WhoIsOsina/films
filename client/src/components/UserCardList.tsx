import axios from 'axios';
import React, { useContext, useState, FC, PropsWithChildren, useEffect } from 'react';
import { UserContext } from '../context';
import { FilmType } from '../types/FilmType';
import { RateType } from '../types/RateType';
import FilmList from './FilmList';
import UserCard from './UserCard';

interface UserCardListProps {
   userId: string | undefined
}

const UserCardList: FC<PropsWithChildren<UserCardListProps>> = ({ userId }) => {

   const { user, setUser } = useContext(UserContext)
   const [films, setFilms] = useState<FilmType[]>()

   const fetchFilms = async () => {
      const fetchingFilms: FilmType[] = []
      const response = await axios.get('http://localhost:5000/rating/user/' + userId)
      const rating: RateType[] = response.data;
      rating.map((rate: RateType) => {
         if (rate.film) {
            const film: FilmType = rate.film
            fetchingFilms.push(film)
         }
      })
      //@ts-ignore
      setFilms(fetchingFilms)
   }

   useEffect(() => {
      fetchFilms()
      console.log(films);

   }, [])

   return (
      <div className='user_card_list'>
         {films?.length
            ? <div>
               {films?.map((film: FilmType) =>
                  <UserCard key={film.id} film={film}></UserCard>
               )}
            </div>
            : <div>Здесь пока ничего нет</div>
         }
      </div>
   );
}

export default UserCardList;
