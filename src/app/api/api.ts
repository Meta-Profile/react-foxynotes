/**
 * Main api class
 */
import {APIRequest} from "./APIRequest";


export class API {

  /**
   * Строитель API запросов
   * @param url
   */
  public request(url: string): APIRequest {
    return new APIRequest(url);
  }
}
