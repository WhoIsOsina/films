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
import { setYears } from '../../../store/yearsReducer';
import { GenreType } from '../../../types/GenreType';
import { isNullishCoalesce, setEmitFlags } from 'typescript';
import { style } from '@mui/system';



const MenuList: FC = () => {
   //const { menuIsActive, setMenuIsActive } = useContext(MenuContext)
   const dispatch = useDispatch()
   const years = useSelector((state: RootState) => state.yearsReducer.years)
   const [genres, setGenres] = useState<string[]>()
   const [selectors, setSelectors] = useState<number[]>([0])
   const menuIsActive = useSelector((state: RootState) => state.menuReducer.value)
   const { sortMech, setSortMech } = useContext(SortContext)
   const [value, setValue] = React.useState<number[]>([1900, 2050]);
   const [numbers, setNumbers] = useState<number[]>([])
   let classMenu = classes.menu_list
   if (menuIsActive) {
      classMenu = classes.menu_list + ' ' + classes.active
   }


   async function fetchMaxAndMin() {
      const response = await axios.get('http://localhost:5000/films')
         .then((response) => {
            const films: FilmType[] = response.data
            films.sort((a, b) => (Number(a.year)) - (Number(b.year)))
            setNumbers([Number(films[0].year), Number(films.at(-1)?.year)])
         })
   }

   async function fetchAllGenres() {
      const response = await axios.get('http://localhost:5000/genres')
         .then((response) => {
            const genres: string[] = []
            const fetchedGenres: GenreType[] = response.data
            fetchedGenres.map(genre => {
               genres.push(genre.genre)
            })
            setGenres(genres)
         })
   }


   function valuetext(value: number) {
      return `${value}°C`;
   }

   const handleChange = (event: Event, newValue: number | number[]) => {
      setValue(newValue as number[]);
   };

   const addNewSelector = () => {
      setSelectors([...selectors, selectors.at(-1)! + 1])
   }

   const removeSelector = (position: number) => {
      selectors.splice(position, 1)
      setSelectors(selectors)
      console.log(selectors)
   }

   useEffect(() => {
   }, [selectors])

   useEffect(() => {
      fetchMaxAndMin()
      fetchAllGenres()
   }, [years])

   return (
      <div className={classMenu}>
         <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            ГОД ВЫПУСКА
            <Box sx={{ width: '300' }}>
               <Slider
                  getAriaLabel={() => 'Year Range'}
                  value={value}

                  min={numbers[0]}
                  max={numbers[1]}
                  step={1}
                  onChange={handleChange}
                  valueLabelDisplay="on"
                  getAriaValueText={valuetext}
                  style={{ marginTop: '35px', width: '250px' }}
               />
            </Box>
            ЖАНР
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
               {selectors.map(s =>
                  <div style={{ display: 'flex' }}>
                     <select className={classes.menu_selector} onChange={() => console.log(s)} key={s}>
                        {genres?.map(g =>
                           <option>{g}</option>
                        )}
                     </select>
                     <div className={classes.menu_plus} onClick={() => removeSelector(s)}>-</div>

                  </div>
               )}
               <div className={classes.menu_plus} onClick={addNewSelector}>+</div>
            </div>
            <MyButton onClick={(e) => {
               e.preventDefault()
               dispatch(setYears([value[0], value[1]]))
               setSortMech(sortMech)
            }}>ПРИМЕНИТЬ</MyButton>
         </form>
      </div>
   );
}

export default MenuList;
