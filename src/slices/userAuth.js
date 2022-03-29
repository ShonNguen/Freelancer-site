import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message";

import UserApiClient from '../service/user-api-client';

const initialState = {
    user: null,
    isLoggedIn: false
};

export const signUp = createAsyncThunk(
    'userAuth/signUp',
    async (user, thunkAPI) => {
        try {
            const response = await UserApiClient.postNewUser(user);
            thunkAPI.dispatch(setMessage(response.data.message));
            return response.data;
        } catch (error) {
            const message = error.message;
            thunkAPI.dispatch(setMessage(message));
            return thunkAPI.rejectWithValue();
        }
    }
);

export const login = createAsyncThunk(
    'userAuth/login',
    async ({ username, password }, thunkAPI) => {
        try {
            const data = await UserApiClient.fetchUsers();
            let currentUser = null; 
            data.map(dbUser => {
                if (
                    username === dbUser.username && 
                    password === dbUser.password
                ) {  
                    currentUser = dbUser; 
                }
            })
            return currentUser; 
        } catch (error) {
            const message = error.message;
            thunkAPI.dispatch(setMessage(message));
            return thunkAPI.rejectWithValue();
        }
    }
);

const authSlice = createSlice({
    name: "userAuth",
    initialState,
    extraReducers: {
      [signUp.fulfilled]: (state, action) => {
        state.isLoggedIn = false;
      },
      [signUp.rejected]: (state, action) => {
        state.isLoggedIn = false;
      },
      [login.fulfilled]: (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload;
      },
      [login.rejected]: (state, action) => {
        state.isLoggedIn = false;
        state.user = null;
      },
    },
  });
  
  const { reducer } = authSlice;
  export default reducer;