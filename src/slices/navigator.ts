import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RoutesConfig } from '../config/routes';

export interface NavigatorItem {
    private?: boolean;
}

export interface NavigatorRoute {
    path: string;
    args: any;
}

export interface NavigatorStates {
    current?: string;
    args: any;
}

const NavigatorSlice = createSlice({
    name: 'navigator',
    initialState: {
        current: '/',
        args: {},
    } as NavigatorStates,
    reducers: {
        presentView: (state, action: PayloadAction<NavigatorRoute>) => {
            state.current = action.payload.path;
            state.args = action.payload.args;
        },
    },
});

export const navigatorReducer = NavigatorSlice.reducer;
export const { presentView } = NavigatorSlice.actions;
