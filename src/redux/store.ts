import { configureStore } from '@reduxjs/toolkit'
import carSlice from './carSlice'

export const store = configureStore({
  reducer: {
    carSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch