import { createSlice } from "@reduxjs/toolkit";
import { UserType } from "../types/UserType";


export interface IUser {
   user: UserType | null
}

const initialState: IUser = {
   user: null
}

export const userReducer = createSlice({
   name: 'user',
   initialState: initialState,
   reducers: {
      setUser: (state, action) => {
         state.user = action.payload
      },
      dropUser: (state) => {
         state.user = null
      }
   }
})

export const { setUser, dropUser } = userReducer.actions
export default userReducer.reducer