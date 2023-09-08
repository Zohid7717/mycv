import { configureStore } from '@reduxjs/toolkit'
import activePageSlice from './activePage/activePage'

export const store = configureStore({
  reducer: {
    activePageSlice
  },
})

export type RootStore = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch