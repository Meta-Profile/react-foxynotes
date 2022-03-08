import { Request } from './request';
import { ConfigApi } from '../config/api';
import { MetaProfileCategory, MetaProfileField } from './types';

/**
 * Основное API мета профиля
 */
export class MetaProfileAPI {
    public static async categories(q?: string, lang: string = 'ru') {
        return await new Request(ConfigApi.endpoint + '/mp/categories')
            .get()
            .query('q', q)
            .release<MetaProfileCategory[]>();
    }
    public static async fields(mpcId: number, q?: string, lang: string = 'ru') {
        return await new Request(ConfigApi.endpoint + '/mp/fields')
            .get()
            .query('q', q)
            .query('mpcId', mpcId)
            .release<MetaProfileField[]>();
    }
}
