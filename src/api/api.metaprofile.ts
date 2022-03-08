import { Request } from './request';
import { ConfigApi } from '../config/api';
import { MetaProfile, MetaProfileCategory, MetaProfileField, MetaProfileUpdatable } from './types';

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
    public static async get(mpId: number) {
        return await new Request(ConfigApi.endpoint + '/mp/get/' + mpId)
            .get()
            .release<MetaProfile>();
    }
    public static async update(mpId: number, data: Partial<MetaProfileUpdatable>) {
        return await new Request(ConfigApi.endpoint + '/mp/update/' + mpId)
            .post()
            .body(data)
            .release<MetaProfile>();
    }
}
