import { MetaProfileCategory, MetaProfileField } from './types';
import { APIRequest } from '../../APIRequest';
import { API_ENDPOINT } from '../../../../config/api';

export class MetaProfileAPI {
    public static async categories(q?: string, lang: string = 'ru') {
        return await new APIRequest(API_ENDPOINT + '/metaprofile/categories')
            .get()
            .query('q', q)
            .release<MetaProfileCategory[]>();
    }
    public static async fields(mpcId: number, q?: string, lang: string = 'ru') {
        return await new APIRequest(API_ENDPOINT + '/metaprofile/fields')
            .get()
            .query('q', q)
            .query('mpcId', mpcId)
            .release<MetaProfileField[]>();
    }
}
