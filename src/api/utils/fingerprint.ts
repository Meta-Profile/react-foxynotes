import Fingerprint2 from './fip';
import { Nullable } from '../types';

let localCachedFingerprint: Nullable<string> = undefined;

/**
 *  Возвращает отпечаток уст-ва
 */
export async function getFingerPrint() {
    if (!localCachedFingerprint) {
        const components = await Fingerprint2.getPromise();
        const values = components.map(function (component: any) {
            return component.value;
        });

        localCachedFingerprint = Fingerprint2.x64hash128(values.join(''), 31);
    }
    return Promise.resolve(localCachedFingerprint);
}
