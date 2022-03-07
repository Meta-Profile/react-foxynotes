import { APIRequest } from '../APIRequest';
import { JwtResponse } from '../types';
import { API_ENDPOINT } from '../../config/api';
import { getFingerPrint } from '../utils/fingerprint';

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
    protected url = API_ENDPOINT + '/auth';

    /**
     * Выполняет авторизацию
     * @param props
     */
    async signin(props: SigninProps) {
        const fip = await getFingerPrint();
        return new APIRequest(this.url + '/signin')
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
        return new APIRequest(this.url + '/signup').post().body(props).header('fp', fip).release();
    }
}
