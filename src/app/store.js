import { configureStore } from '@reduxjs/toolkit'
import bountyReducer from '../bountySlice'

export const store = configureStore({
  reducer: {
    bounty: bountyReducer,
  },
})