import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios, {AxiosError} from "axios";
import { IUser } from "../models/user.model";

interface IUserResponse {
    count: number,
    next: string | null,
    previous: string | null,
    results: IUser[]
}
interface UserState {
    users: IUserResponse,
    status: string,
    error: string | null
}

const initialState: UserState = {
    users: {
        count: 0,
        next: null,
        previous: null,
        results: []
    },
    status: 'idle',
    error: null
}

export const usersSlice = createSlice({
    name: 'planet',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchUsers.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = 'failed'
            })
    }
})
export const fetchUsers = createAsyncThunk<IUserResponse>('UsersTable/fetchUsers', async (data, {rejectWithValue}) => {
    try {
        const response = await axios.get<IUserResponse>('/people',  {
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

export default usersSlice.reducer