import { AxiosResponse } from "axios";

export interface IUserAuth extends AxiosResponse {
  access_token: string;
  expires_in: number;
  refresh_token?: string;
  scope: string;
  token_type?: string;
}
