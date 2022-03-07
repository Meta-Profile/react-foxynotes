import { APIRequest } from '../APIRequest';
import { API_ENDPOINT } from '../../config/api';
import { MetaProfileField } from './metaprofile/types';

export interface CommonData {
    commonId: number;
    title: string;
    field: MetaProfileField;
}

export class CommonDataAPI {
    public static search(props: { query: string; mpfId: number }) {
        return new APIRequest(API_ENDPOINT + '/common/search/' + props.mpfId)
            .get()
            .query('q', props.query)
            .release<CommonData[]>();
    }
    public static add(props: { value: string; mpfId: number }) {
        return new APIRequest(API_ENDPOINT + '/common/add/' + props.mpfId)
            .post()
            .body({
                value: props.value,
            })
            .release<CommonData>();
    }
}
