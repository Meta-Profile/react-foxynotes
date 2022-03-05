import { APIRequest } from '../APIRequest';
import { JwtResponse } from '../types';
import { API_ENDPOINT } from '../../../config/api';

export interface SigninProps {
    username: string;
    password: string;
}

export interface SignupProps extends SigninProps {
    email: string;
    role: string[];
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
    signin(props: SigninProps) {
        return new APIRequest(this.url + '/signin').post().body(props).release<JwtResponse>();
    }

    /**
     * Выполняет регистрацию
     * @param props
     */
    signup(props: SignupProps) {
        return new APIRequest(this.url + '/signup').post().body(props).release();
    }
}
