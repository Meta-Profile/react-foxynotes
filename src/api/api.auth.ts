import { Request } from './request';
import { JwtResponse } from './types';
import { ApiConfig } from '../config/api';
import { getFingerPrint } from './utils/fingerprint';

export interface SigninProps {
    username: string;
    password: string;
}

export interface SignupProps extends SigninProps {
    email: string;
}

/**
 * API класс авторизации
 */
export class APIClassAuth {
    protected url = ApiConfig.endpoint + '/auth';

    /**
     * Выполняет авторизацию
     * @param props
     */
    async signin(props: SigninProps) {
        const fip = await getFingerPrint();
        return new Request(this.url + '/signin')
            .post()
            .header('fp', fip)
            .body(props)
            .release<JwtResponse>();
    }

    /**
     * Выполняет регистрацию
     * @param props
     */
    async signup(props: SignupProps) {
        const fip = await getFingerPrint();
        return new Request(this.url + '/signup').post().body(props).header('fp', fip).release();
    }
}
