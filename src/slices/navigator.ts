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
    items: Record<string, NavigatorItem>;
    privatePath: string;
    errorPath: string;
}

const NavigatorSlice = createSlice({
    name: 'navigator',
    initialState: {
        current: '/',
        args: {},
        items: {
            [RoutesConfig.paths.home]: { private: false },
            [RoutesConfig.paths.profile]: { private: false },
        },
        privatePath: 'private',
        errorPath: 'error',
    } as NavigatorStates,
    reducers: {
        presentView: (state, action: PayloadAction<NavigatorRoute>) => {
            if (!(action.payload.path in state.items)) {
                state.args = { code: 404, error: true };
                state.current = state.errorPath;
                return;
            }

            state.current = action.payload.path;
            state.args = action.payload.args;
        },
    },
});

export const navigatorReducer = NavigatorSlice.reducer;
export const { presentView } = NavigatorSlice.actions;
