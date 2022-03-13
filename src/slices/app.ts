import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AppStates {
    loading?: string | boolean;
}

export const AppSlice = createSlice({
    name: 'app',
    initialState: {
        loading: undefined,
    } as AppStates,
    reducers: {
        updateLoader(state, action: PayloadAction<string | undefined | boolean>) {
            state.loading = action.payload;
        },
    },
});

export const appReducer = AppSlice.reducer;
export const { updateLoader } = AppSlice.actions;
