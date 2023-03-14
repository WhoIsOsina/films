import React, { FC, useState, useEffect, PropsWithChildren } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import axios from 'axios';
import { FilmType } from '../../../types/FilmType';
import { SortType } from '../../../types/SortType';
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store/store';
import { changeMax, changeMin } from '../../../store/yearsReducer';

// interface YearInputProps {
//    setYears: (years: number[]) => void
// }

const YearInput: FC = () => {
   // const [min, setMin] = useState<number>()
   // const [max, setMax] = useState<number>()
   const dispatch = useDispatch()
   const min = useSelector((state: RootState) => state.yearsReducer.min)
   const max = useSelector((state: RootState) => state.yearsReducer.max)

   async function fetchMaxAndMin() {
      const films: FilmType[] = (await axios.get<FilmType[]>('http://localhost:5000/films')).data
      films.sort((a, b) => (Number(a.year)) - (Number(b.year)))
      dispatch(changeMin(films[0].year))
      dispatch(changeMax(films[films.length - 2].year))
      // setMin(Number(films[0].year));
      // setMax(Number(films[films.length - 2].year))
   }

   function valuetext(value: number) {
      return `${value}°C`;
   }

   const [value, setValue] = React.useState<number[]>([20, 37]);

   const handleChange = (event: Event, newValue: number | number[]) => {
      setValue(newValue as number[]);
      // dispatch(changeMin(value[0]))
      // dispatch(changeMax(value[1]))
      //setYears(value)
   };

   useEffect(() => {
      fetchMaxAndMin()
   }, [])

   return (
      <Box sx={{ width: '300' }}>
         <Slider
            getAriaLabel={() => 'Year Range'}
            value={value}
            min={min}
            max={max}
            step={1}
            onChange={handleChange}
            valueLabelDisplay="on"
            getAriaValueText={valuetext}
            style={{ marginTop: '35px', width: '250px' }}
         />
      </Box>
   );
}

export default YearInput;
