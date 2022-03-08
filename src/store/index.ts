import { configureStore } from '@reduxjs/toolkit';
import { AuthReducer } from '../slices/auth';

export const store = configureStore({
    reducer: {
        auth: AuthReducer,
    },
});
