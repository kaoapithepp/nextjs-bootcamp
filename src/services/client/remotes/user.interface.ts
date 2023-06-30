import { IUserAuth } from "@/services/interfaces/user.interface";
import { AxiosResponse } from "axios";

export interface UserServiceAble {
  getAccessTokenSpotify: (code: string) => Promise<IUserAuth>;
}
