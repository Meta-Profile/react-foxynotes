import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';

/**
 * Пусть для навигатора
 */
export interface NavigatorRoutePath {
    path: string;
    args: any;
}

/**
 * Состояния навигатора
 */
export interface NavigatorStates {
    current?: string;
    args: any;
    history: NavigatorRoutePath[];
    title?: string;
    backgroundColor?: string;
    foreColor?: string;
}

const NavigatorSlice = createSlice({
    name: 'navigator',
    initialState: {
        current: undefined,
        args: {},
        history: [],
        backgroundColor: undefined,
        foreColor: undefined,
        title: undefined,
    } as NavigatorStates,
    reducers: {
        /**
         * Отображает view
         * @param state
         * @param action
         */
        presentView: (state, action: PayloadAction<NavigatorRoutePath>) => {
            if (action.payload.path.startsWith('!')) state.history = [];

            // Обновляем состояния: текущий VC и историю
            _updateState(state, action.payload);
        },

        /**
         * Отображает предыдущий контроллер
         * @param state
         * @param action
         */
        presentPreviousView: (state, action) => {
            const len = state.history.length;

            // Проверяем, что назад еще можно
            const prev = _previousPath(state);

            // Если все окей - переходим назад и удаляем прошлый контроллер
            if (prev) {
                state.history = state.history.slice(0, len - 2);

                // Обновляем состояния: текущий VC и историю
                _updateState(state, prev);
            }
        },

        /**
         * Обновляет отображение навигатора
         * @param state
         * @param action
         */
        updateBarView(
            state,
            action: PayloadAction<{ title?: string; foreColor?: string; backgroundColor?: string }>
        ) {
            if (action.payload.backgroundColor)
                state.backgroundColor = action.payload.backgroundColor;
            if (action.payload.foreColor) state.foreColor = action.payload.foreColor;
            if (action.payload.title) state.title = action.payload.title;
        },
    },
});

function _updateState(state: Draft<NavigatorStates>, payload: NavigatorRoutePath) {
    state.current = payload.path;
    state.args = payload.args;
    state.history = [...state.history, { path: payload.path, args: payload.args }];
}

function _previousPath(state: Draft<NavigatorStates>): NavigatorRoutePath | null {
    const len = state.history.length;
    if (len < 2) return null;
    return { ...state.history[len - 2]! };
}

export const navigatorReducer = NavigatorSlice.reducer;
export const { presentView, presentPreviousView, updateBarView } = NavigatorSlice.actions;
