import React, { useContext, FC, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MenuContext, SortContext } from '../../../context';
import { RootState } from '../../../store/store';
import MyButton from '../button/MyButton';
import classes from './MenuList.module.css'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import axios from 'axios';
import { FilmType } from '../../../types/FilmType';
import { changeMax, changeMin } from '../../../store/yearsReducer';



const MenuList: FC = () => {
   //const { menuIsActive, setMenuIsActive } = useContext(MenuContext)
   const dispatch = useDispatch()
   //const years = [useSelector((state: RootState) => state.yearsReducer.min), useSelector((state: RootState) => state.yearsReducer.max)]
   const menuIsActive = useSelector((state: RootState) => state.menuReducer.value)
   const { sortMech, setSortMech } = useContext(SortContext)
   // const [years, setYears] = useState<number[]>([])
   const [minimum, setMinimum] = useState<number>(1900)
   const [maximum, setMaximum] = useState<number>(2050)
   const [value, setValue] = React.useState<number[]>([1900, 2050]);
   let classMenu = classes.menu_list
   if (menuIsActive) {
      classMenu = classes.menu_list + ' ' + classes.active
   }

   const min = useSelector((state: RootState) => state.yearsReducer.min)
   const max = useSelector((state: RootState) => state.yearsReducer.max)

   async function fetchMaxAndMin() {
      const response = await axios.get('http://localhost:5000/films')
         .then((response) => {
            const films: FilmType[] = response.data
            films.sort((a, b) => (Number(a.year)) - (Number(b.year)))
            // setMinimum(Number(films[0].year))
            //setMaximum(Number(films[films.length - 2].year))
            //console.log('min - ', Number(films[0].year), ', max - ', Number(films[films.length - 2].year));
         })
         .finally(() => {
            //console.log('min - ', minimum, ', max - ', maximum);

         })

      // const films: FilmType[] = (await axios.get<FilmType[]>('http://localhost:5000/films')).data
      // films.sort((a, b) => (Number(a.year)) - (Number(b.year)))
      //console.log(films[films.length - 2].year);
      // setMinimum(Number(films[0].year))
      // setMaximum(Number(films[films.length - 2].year))
      // console.log(minimum);

      // setYears([Number(films[0].year), Number(films[films.length - 2].year)])
      // if (years) {
      // setValue([minimum, maximum])
      // }
      //setValue(years)
      //dispatch(changeMax(films[films.length - 2].year))
      // setMin(Number(films[0].year));
      // setMax(Number(films[films.length - 2].year))
   }


   function valuetext(value: number) {
      return `${value}°C`;
   }

   const handleChange = (event: Event, newValue: number | number[]) => {
      setValue(newValue as number[]);
      //setYears(value)
   };

   useEffect(() => {
      fetchMaxAndMin()
   }, [])

   return (
      <div className={classMenu}>
         <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            ГОД ВЫПУСКА
            <Box sx={{ width: '300' }}>
               <Slider
                  getAriaLabel={() => 'Year Range'}
                  value={value}

                  min={minimum}
                  max={maximum}
                  step={1}
                  onChange={handleChange}
                  valueLabelDisplay="on"
                  getAriaValueText={valuetext}
                  style={{ marginTop: '35px', width: '250px' }}
               />
            </Box>
            <MyButton onClick={(e) => {
               e.preventDefault()
               //console.log(value[0], value[1]);
               dispatch(changeMin(value[0]))
               dispatch(changeMax(value[1]))
               console.log([min, max]);
               // sortMech.year = years
               setSortMech(sortMech)
            }}>ПРИМЕНИТЬ</MyButton>
         </form>
      </div>
   );
}

export default MenuList;
