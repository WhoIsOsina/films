import React, { FC, useState, useContext, PropsWithChildren } from 'react';
import YearInput from '../input/YearInput';
import classes from './Menu.module.css'
import { Slider } from '@mui/material';
import { MenuContext } from '../../../context';
import MenuList from './MenuList';
import { SortType } from '../../../types/SortType';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { RootState } from '../../../store/store';
import { menuReducer } from '../../../store/menuReducer';


const Menu: FC = () => {
   const dispatch = useDispatch()
   const menuIsActive = useSelector((state: RootState) => state.menuReducer.value)

   let classElement = classes.element
   if (menuIsActive) {
      classElement = classes.element + ' ' + classes.active
   }

   function toggle() {
      dispatch(menuReducer.actions.toggleMenu())
   }

   return (
      <div>
         <div className={classes.wrapper} onClick={toggle}>
            <span className={classElement}></span>
         </div>
         <MenuList />
      </div>
   );
}

export default Menu;
