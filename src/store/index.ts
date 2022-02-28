import { configureStore } from '@reduxjs/toolkit';
import { LoginPageSliceReducer } from '../pages/LoginPage/LoginPageSlice';
import { AuthReducer } from '../app/auth/slice';

export const store = configureStore({
    reducer: {
        loginPage: LoginPageSliceReducer,
        auth: AuthReducer
    }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
