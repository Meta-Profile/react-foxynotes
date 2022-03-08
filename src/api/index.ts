import { API } from './api';
import { APIClassAuth } from './api.auth';
import { MetaProfileAPI } from './api.metaprofile';
import { CommonDataAPI } from './api.commondata';

export * from './types';
export * from './types/uploader';

/**
 * Экспорт API библиотеки
 */
export { API };

// API авторизации
export const AuthAPI = new APIClassAuth();

export { MetaProfileAPI, CommonDataAPI };
