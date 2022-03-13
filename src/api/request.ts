import { APIControllerResponse, APIOptions } from './types';
import * as querystring from 'querystring';

export enum APIRequestMethod {
    POST = 'POST',
    GET = 'GET',
}

export class Request {
    private readonly requestUrl: string;
    private requestLang = 'en';
    private requestMethod: APIRequestMethod = APIRequestMethod.GET;
    private requestQuery: Array<{ key: string; value: string }> = [];
    private requestBody: unknown;
    private jsonBody = true;

    /**
     * Стандартные заголовки
     * @private
     */
    private requestHeaders = new Headers({
        'Content-Type': 'application/json',
    });

    /**
     * Конструктор
     * @param url
     */
    public constructor(url: string) {
        this.requestUrl = url;
    }

    /**
     * Язык запроса
     * @param l
     */
    public lang(l: string): Request {
        this.requestLang = l;
        return this;
    }

    public rawBody(): Request {
        this.jsonBody = false;
        return this;
    }

    /**
     * Устанавливает метод запроса
     * @param m
     */
    public method(m: APIRequestMethod): Request {
        this.requestMethod = m;
        return this;
    }

    /**
     * Устанавливает метод запроса как POST
     */
    public post(): Request {
        return this.method(APIRequestMethod.POST);
    }

    /**
     * Устанавливает метод запроса как GET
     */
    public get(): Request {
        return this.method(APIRequestMethod.GET);
    }

    /**
     * Добавляет query параметр
     * @param key
     * @param value
     */
    public query<T>(key: string, value: T | T[]): Request {
        if (value === undefined) return this;
        if (value instanceof Array && value.length > 0) {
            for (const v of value) this.requestQuery.push({ key, value: String(v) });
        } else {
            this.requestQuery.push({ key, value: String(value) });
        }
        return this;
    }

    /**
     * Добавляет body параметр
     * @param b
     */
    public body<T>(b: T): Request {
        this.requestBody = b;
        return this;
    }

    /**
     * Добавляет заголовок
     * @param key
     * @param value
     */
    public header(key: string, value: string | null | undefined): Request {
        if (!value) {
            this.requestHeaders.delete(key);
            return this;
        }
        this.requestHeaders.set(key, value);
        return this;
    }

    /**
     * Устанавливает заголовок.
     * @deprecated используйте крайне осторожно, используйте Request.header метод
     * @param h
     */
    public setHeaders(h: Record<string, string>): Request {
        this.requestHeaders = new Headers(h);
        return this;
    }

    /**
     * Подключает токен авторизации JWT
     * @param token
     */
    public bearer(token: string): Request {
        this.header('Authorization', 'Bearer ' + token);
        return this;
    }

    /**
     * Возвращает метод авторизации
     */
    public authorize(): Request {
        const token = localStorage.getItem('token');
        if (token) this.bearer(token);
        return this;
    }

    /**
     * Создает базовый URL
     */
    public createBaseUrl(): string {
        if (this.requestQuery.length === 0) return this.requestUrl;

        const request = new URLSearchParams();
        for (const value of this.requestQuery) {
            request.append(value.key, value.value);
        }
        // request.append('lang', this.requestLang);
        const str = request.toString();
        return this.requestUrl + '?' + str;
    }

    /**
     * Создает базовый запрос
     */
    public createBaseRequest(): APIOptions {
        const url = this.createBaseUrl();
        return {
            method: this.requestMethod,
            headers: this.requestHeaders,
            url,
            body:
                this.requestMethod === APIRequestMethod.POST
                    ? this.jsonBody
                        ? JSON.stringify(this.requestBody)
                        : (this.requestBody as any)
                    : undefined,
        };
    }

    /**
     * Отправляет запрос
     */
    public async send(): Promise<Response> {
        const options = this.createBaseRequest();
        return await fetch(options.url ?? this.requestUrl, options);
    }

    /**
     * Отправляет JSON запрос
     */
    public async sendJson<T = unknown>(): Promise<T> {
        const result = await this.send();
        return await result.json();
    }

    /**
     * Отправляет API запрос с исключением
     * @throws APIControllerResponse
     */
    public async release<T = unknown>(): Promise<APIControllerResponse<T>> {
        const result = await this.sendJson<APIControllerResponse<T>>();
        if (!result) throw 'API method execute error';

        testErrorException(result);
        return result;
    }
}

function testErrorException(result: APIControllerResponse<unknown>) {
    if (result.error) {
        switch (result.status) {
            case 1001:
            case 1002:
                throw result;
            case 5001:
                throw result;
            default:
                throw result;
        }
    }
}
