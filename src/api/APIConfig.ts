/**
 * Конфигурацию API
 */
import { APIRequest } from './APIRequest';

export class APIConfig {
    public static onRequest?: (request: APIRequest) => APIRequest;
}
