import {APIRequest} from "../APIRequest";
import {JwtResponse} from "../types";

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
  protected url = "https://api.metauser.ru/api/v1/auth";

  /**
   * Выполняет авторизацию
   * @param props
   */
  signin(props: SigninProps) {
    return new APIRequest(this.url + "/signin")
      .post()
      .body(props)
      .release<JwtResponse>();
  }

  /**
   * Выполняет регистрацию
   * @param props
   */
  signup(props: SignupProps) {
    return new APIRequest(this.url + "/signup").post().body(props).release();
  }
}
