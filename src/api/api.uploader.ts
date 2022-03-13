import { Request } from './request';
import { ApiConfig } from '../config/api';
import { FileEntity } from './api.file';

export interface UploaderSession {
    sessionId: number;
    file: FileEntity;
    userId: number;
    completed: 'COMPLETED' | 'CREATED' | 'WAITING' | 'ERROR';
}

export class UploaderAPI {
    public static async create() {
        return await new Request(ApiConfig.endpoint + '/uploader/create')
            .authorize()
            .release<UploaderSession>();
    }

    public static async upload(sessionId: number, file: Blob) {
        const fd = new FormData();
        fd.append('file', file);
        console.log(file, file.size);
        return await new Request(ApiConfig.endpoint + '/uploader/upload:' + sessionId)
            .post()
            .header('Content-type', undefined)
            .authorize()
            .rawBody()
            .body(fd)
            .release<void>();
    }

    public static async status(sessionId: number) {
        return await new Request(ApiConfig.endpoint + '/uploader/upload:' + sessionId)
            .get()
            .authorize()
            .release<UploaderSession>();
    }
}
