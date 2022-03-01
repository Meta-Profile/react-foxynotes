import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const LoginPageSlice = createSlice({
    name: 'loginPage',
    initialState: {
        form: 'login',
    },
    reducers: {
        updateForm: (state, action: PayloadAction<'login' | 'register'>) => {
            state.form = action.payload;
        },
    },
});

export const LoginPageSliceReducer = LoginPageSlice.reducer;
export const { updateForm } = LoginPageSlice.actions;
