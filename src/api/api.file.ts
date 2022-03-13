import { Request } from './request';
import { ApiConfig } from '../config/api';

export interface FileEntity {
    id: number;
    url: string;
    realName: string;
    senderId: number;
}

export class FileAPI {
    public static async accept(fileUrl: string) {
        const blob = await new Request(fileUrl)
            .get()
            .authorize()
            .send()
            .then((v) => v.blob());
        return URL.createObjectURL(blob);
    }
    public static async acceptById(fileId: number) {
        const blob = await new Request(ApiConfig.endpoint + '/file/get/' + fileId)
            .get()
            .authorize()
            .send()
            .then((v) => v.blob());
        return URL.createObjectURL(blob);
    }
}
