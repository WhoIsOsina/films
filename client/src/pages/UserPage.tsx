import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UserCard from '../components/UserCard';
import UserCardList from '../components/UserCardList';
import { UserContext } from '../context';
import { FilmType } from '../types/FilmType';
import { RateType } from '../types/RateType';
import { UserType } from '../types/UserType';

const UserPage = () => {
   const params = useParams()
   const { user, setUser } = useContext(UserContext)

   return (
      <div className='user__page'>
         <div>ПРОФИЛЬ ПОЛЬЗОВАТЕЛЯ <span style={{ textDecoration: 'underline', marginLeft: '10px' }}>{user?.email}</span></div>
         <hr style={{ width: '100%', margin: '10px 0' }} />
         <UserCardList userId={params.id} />
      </div>
   );
}

export default UserPage;
