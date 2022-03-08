import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { APIControllerResponse, AuthAPI, JwtResponse } from '../api';
import { SigninProps } from '../api/api.auth';

export const loginAction = createAsyncThunk(
    'auth/loginAction',
    async (props: SigninProps): Promise<APIControllerResponse<JwtResponse>> => {
        return await AuthAPI.signin(props);
    }
);

export const AuthSlice = createSlice({
    name: 'auth',
    initialState: {
        token: '',
        error: '',
    },
    reducers: {
        updateToken: (state, action) => {
            state.token = action.payload;
        },
    },
    extraReducers: {
        [loginAction.rejected.toString()]: (state, action) => {
            // const { response } = action.payload;
            toast.error('Логин или пароль введены не верно!');
            state.error = 'Логин или пароль введены не верно!';
        },
        [loginAction.fulfilled.toString()]: (state, action) => {
            const { response } = action.payload;
            toast.success('Авторизация успешно пройдена! ' + response.token);
            state.token = response.token;
            state.error = '';
            localStorage.setItem('token', response.token);
        },
    },
});

export const AuthReducer = AuthSlice.reducer;
export const { updateToken } = AuthSlice.actions;
