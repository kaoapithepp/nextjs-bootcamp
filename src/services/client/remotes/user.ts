import { OAUTH_SPOTIFY_ROUTE } from "@/constants/api.route";
import { RemoteOAuthSpotify } from "../remote";
import { UserServiceAble } from "./user.interface";
import { UNPROTECTED_PATH } from "@/constants/path.route";

export class UserService extends RemoteOAuthSpotify implements UserServiceAble {
  getAccessTokenSpotify = async (code: string) => {
    const queryObj = new URLSearchParams({
      code: code,
      redirect_uri: UNPROTECTED_PATH.CALLBACK_DEV,
      grant_type: "authorization_code",
    });

    const response = await this.getOAuthAxiosInstance().post(
      OAUTH_SPOTIFY_ROUTE.AUTH_TOKEN,
      queryObj
    );

    const { data } = response;

    return data;
  };
}
