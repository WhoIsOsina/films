import React, { useState, useEffect } from 'react';
import CardFilmItem from '../components/CardFilmItem';
import FilmList from '../components/FilmList';
import Menu from '../components/UI/menu/Menu';
import MenuList from '../components/UI/menu/MenuList'
import { SortType } from '../types/SortType';

const MainPage = () => {

   return (
      <div className='mainPage'>
         <Menu />
         <FilmList />
      </div>
   );
}

export default MainPage;
