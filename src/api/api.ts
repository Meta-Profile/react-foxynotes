/**
 * Main api class
 */
import { Request } from './request';

export class API {
    /**
     * Строитель API запросов
     * @param url
     */
    public request(url: string): Request {
        return new Request(url);
    }
}
