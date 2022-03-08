/**
 * Обычный ответ API
 */
export interface APIControllerResponse<T = unknown> {
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

export interface MetaProfileCategory {
    mpcId: number;
    title: string;
    icon: string;
}

export interface MetaProfileField {
    mpcId: number;
    mpfId: number;
    title: string;
}

export interface MFType {
    mftId: number;
    title: string;
    icon: string;
}
