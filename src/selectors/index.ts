import { RootState } from '../types';

export const getAuth = (store: RootState) => store.auth;
export const getNavigator = (store: RootState) => store.navigator;
export const getApp = (store: RootState) => store.app;
