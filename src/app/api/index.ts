import { API } from './api';
import { APIClassAuth } from './methods/auth';
import { MetaProfileAPI } from './classes/metaprofile/metaprofile';

export * from './types';
export * from './types/uploader';
export * from './types/users';

/**
 * Экспорт API библиотеки
 */
export { API };

// API авторизации
export const AuthAPI = new APIClassAuth();

export { MetaProfileAPI };
