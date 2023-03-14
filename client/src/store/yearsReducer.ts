import { createSlice } from '@reduxjs/toolkit';

export interface IYears {
   min: number,
   max: number
}

const initialState = {
   min: 1900,
   max: 2050
}

export const yearsReducer = createSlice({
   name: 'years',
   initialState,
   reducers: {
      changeMin: (state, action) => {
         state.min = Number(action.payload)
      },
      changeMax: (state, action) => {
         state.max = Number(action.payload)
      }
   }
})

export const { changeMin, changeMax } = yearsReducer.actions
export default yearsReducer.reducer