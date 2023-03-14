import { createSlice } from '@reduxjs/toolkit'

export interface IMenu {
   value: boolean
}

const initialState: IMenu = {
   value: false
}

export const menuReducer = createSlice({
   name: 'menu',
   initialState: initialState,
   reducers: {
      toggleMenu: (state) => {
         state.value = !state.value
      }
   }
})

export const { toggleMenu } = menuReducer.actions
export default menuReducer.reducer