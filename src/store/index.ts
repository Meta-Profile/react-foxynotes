import { configureStore } from '@reduxjs/toolkit';
import { AuthReducer } from '../slices/auth';
import { navigatorReducer } from '../slices/navigator';

export const store = configureStore({
    reducer: {
        auth: AuthReducer,
        navigator: navigatorReducer,
    },
});
