import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios, {AxiosError} from "axios";
import { IPlanet } from "../models/planet.model";

interface PlanetState {
    planet: IPlanet | null,
    status: string,
    error: string | null
}

const initialState: PlanetState = {
    planet: null,
    status: 'idle',
    error: null
}

export const planetsSlice = createSlice({
    name: 'planet',
    initialState,
    reducers: {
        clearPlanet: (state) => {
            state.planet = null;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchPlanet.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchPlanet.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.planet = action.payload;
            })
            .addCase(fetchPlanet.rejected, (state, action) => {
                state.status = 'failed'
            })
    }
})

export const { clearPlanet } = planetsSlice.actions

export const fetchPlanet = createAsyncThunk<IPlanet, string>('posts/fetchPosts', async (planetUrl, { rejectWithValue}) => {

    try {
        const response = await axios.get<IPlanet>(`/planets/${planetUrl}`,  {
            headers: {
                Accept: 'application/json',
            },
        });
        return response.data;
    } catch (err) {
        const error = err as AxiosError;
        if (!error.response) {
            throw err
        }
        return rejectWithValue(error.response.data)
    }
})

export default planetsSlice.reducer;