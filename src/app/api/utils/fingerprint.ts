import Fingerprint2 from './fip';

/**
 *  Возвращает отпечаток уст-ва
 */
export async function getFingerPrint() {
    const components = await Fingerprint2.getPromise();
    const values = components.map(function (component: any) {
        return component.value;
    });

    return Fingerprint2.x64hash128(values.join(''), 31);
}
