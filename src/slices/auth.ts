import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { APIControllerResponse, AuthAPI, JwtResponse } from '../api';
import { SigninProps } from '../api/api.auth';
import { UserAPI, UserDetails } from '../api/api.user';
import { LocalStorageUtils } from '../helpers/localstorage';

export const loginAction = createAsyncThunk(
    'auth/loginAction',
    async (props: SigninProps): Promise<APIControllerResponse<JwtResponse>> => {
        return await AuthAPI.signin(props);
    }
);

export const authenticate = createAsyncThunk(
    'auth/authenticate',
    async (): Promise<APIControllerResponse<UserDetails> | false> => {
        const token = LocalStorageUtils.getAuthToken();
        if (token) {
            return await UserAPI.me();
        }
        return Promise.resolve(false);
    }
);

export interface AuthStates {
    token?: string;
    user?: UserDetails;
    error?: string;
    loading?: boolean;
}

const initialState: AuthStates = {
    token: undefined,
    error: undefined,
    user: undefined,
    loading: true,
};

export const AuthSlice = createSlice({
    name: 'auth',
    initialState,
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
        //
        // Authentications
        //
        [authenticate.pending.toString()]: (state) => {
            state.loading = true;
        },
        [authenticate.rejected.toString()]: (state, action) => {
            state.user = undefined;
            state.loading = false;
        },
        [authenticate.fulfilled.toString()]: (
            state,
            action: PayloadAction<APIControllerResponse<UserDetails>>
        ) => {
            state.user = action.payload.response;
            state.loading = false;
        },
    },
});

export const AuthReducer = AuthSlice.reducer;
export const { updateToken } = AuthSlice.actions;
