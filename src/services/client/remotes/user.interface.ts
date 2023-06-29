import { AxiosResponse } from "axios";

export interface UserServiceAble {
  getAccessTokenSpotify: (code: string) => Promise<AxiosResponse>;
}
