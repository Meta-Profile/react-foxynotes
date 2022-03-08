import { Request } from './request';
import { ApiConfig } from '../config/api';
import { MetaProfile, MetaProfileCategory, MetaProfileField, MetaProfileUpdatable } from './types';

/**
 * Основное API мета профиля
 */
export class MetaProfileAPI {
    public static async categories(q?: string, lang: string = 'ru') {
        return await new Request(ApiConfig.endpoint + '/mp/categories')
            .get()
            .authorize()
            .query('q', q)
            .release<MetaProfileCategory[]>();
    }
    public static async fields(mpcId: number | string, q?: string, lang: string = 'ru') {
        return await new Request(ApiConfig.endpoint + '/mp/fields')
            .get()
            .authorize()
            .query('q', q)
            .query('mpcId', mpcId)
            .release<MetaProfileField[]>();
    }
    public static async get(mpId: number | string) {
        return await new Request(ApiConfig.endpoint + '/mp/get/' + mpId)
            .get()
            .authorize()
            .release<MetaProfile>();
    }
    public static async list() {
        return await new Request(ApiConfig.endpoint + '/mp/list')
            .get()
            .authorize()
            .release<MetaProfile[]>();
    }
    public static async update(mpId: number | string, data: Partial<MetaProfileUpdatable>) {
        return await new Request(ApiConfig.endpoint + '/mp/update/' + mpId)
            .post()
            .authorize()
            .body(data)
            .release<MetaProfile>();
    }
}
