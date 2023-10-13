import { createSlice } from '@reduxjs/toolkit';

export interface IQuery {
   query: string
}

const initialState: IQuery = {
   query: ''
}

const queryReducer = createSlice({
   name: 'query',
   initialState,
   reducers: {
      setQuery: (state, action) => {
         state.query = action.payload
      }
   }
})

export const { setQuery } = queryReducer.actions
export default queryReducer.reducer