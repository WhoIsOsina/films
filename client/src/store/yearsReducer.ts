import { createSlice } from '@reduxjs/toolkit';

export interface IYears {
   years: number[]
}

const initialState: IYears = {
   years: [1900, 2050]
}

export const yearsReducer = createSlice({
   name: 'years',
   initialState,
   reducers: {
      setYears: (state, action) => {
         state.years = action.payload
      },

   }
})

export const { setYears } = yearsReducer.actions
export default yearsReducer.reducer