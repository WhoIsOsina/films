import userReducer from './userReducer';
import yearsReducer from './yearsReducer';
import menuReducer from './menuReducer';
import queryReducer from './queryReducer';
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
   reducer: {
      menuReducer,
      yearsReducer,
      userReducer,
      queryReducer,
   }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch