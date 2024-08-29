import { Car } from '@/Types/car'
import { createSlice } from '@reduxjs/toolkit'

export interface Cars {
  allCars: Car[]
}

const initialState: Cars = {
  allCars: [],
}

export const carSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {
    getCars: (state, action) => {
        state.allCars = [...action.payload];
    },
  },
})

export const { getCars } = carSlice.actions

export default carSlice.reducer