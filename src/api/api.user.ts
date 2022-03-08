/**
 * API пользователей
 */
import { Request } from './request';
import { ConfigApi } from '../config/api';

export interface UserDetails {
    userId: number;
    metaId: string;
}

/**
 * API пользователей
 */
export class UserAPI {
    /**
     * Получает текущего пользователя
     */
    public static me() {
        return new Request(ConfigApi.endpoint + '/user/me')
            .get()
            .authorize()
            .release<UserDetails>();
    }
}
