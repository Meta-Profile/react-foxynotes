import { RootState } from '../types';

export const getAuth = (store: RootState) => store.auth;
export const getNavigator = (store: RootState) => store.navigator;
