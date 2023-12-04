import { configureStore } from '@reduxjs/toolkit';
import planetSlice from './slices/planets.slice';
import usersSlice from "./slices/users.slice";

export const store = configureStore({
    reducer: {
        planet: planetSlice,
        users: usersSlice
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch