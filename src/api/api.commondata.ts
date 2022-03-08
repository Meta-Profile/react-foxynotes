import { Request } from './request';
import { ConfigApi } from '../config/api';
import { MetaProfileField } from './types';

export interface ApiCommondata {
    commonId: number;
    title: string;
    field: MetaProfileField;
}

export class CommonDataAPI {
    public static search(props: { query: string; mpfId: number }) {
        return new Request(ConfigApi.endpoint + '/common/search/' + props.mpfId)
            .get()
            .query('q', props.query)
            .release<ApiCommondata[]>();
    }
    public static add(props: { value: string; mpfId: number }) {
        return new Request(ConfigApi.endpoint + '/common/add/' + props.mpfId)
            .post()
            .body({
                value: props.value,
            })
            .release<ApiCommondata>();
    }
}
