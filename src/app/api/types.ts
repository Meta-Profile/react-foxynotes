/**
 * Обычный ответ API
 */
export interface APIControllerResponse<T> {
    response: T;
    error?: string;
    status: number;
}

export interface APIOptions extends RequestInit {
    url?: string;
}

export type Nullable<T> = T | undefined | null;

/**
 * AUTH TYPES
 */

export interface JwtResponse {
    token: string;
    type: 'Bearer' | string;

    // Данные пользователя
    username: string;
    email: string;
    userId: number;
    /**
     * @todo
     * avatarFileId: number;
     *
     */

    // Доступные роли
    roles: string[];
}
