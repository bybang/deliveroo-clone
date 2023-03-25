import { configureStore } from '@reduxjs/toolkit'
import basketReducer from './features/basketSlice'
import restaurantReducer from './features/restaurantSlice'

export const store = configureStore({
  // where we combine all of the different slices together to make
  // one big store
  reducer: {
    basket: basketReducer, // better name for slices(reducer)
    restaurant: restaurantReducer
  },
})