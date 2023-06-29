import { OAUTH_SPOTIFY_ROUTE } from "@/constants/api.route";
import { RemoteOAuthSpotify } from "../remote";
import { UserServiceAble } from "./user.interface";
import { PROTECTED_PATH } from "@/constants/path.route";

export class UserService extends RemoteOAuthSpotify implements UserServiceAble {
  getAccessTokenSpotify = async (code: string) => {
    const data = new URLSearchParams({
      code: code,
      redirect_uri: "http://localhost:3000" + PROTECTED_PATH.PROFILE,
      grant_type: "authorization_code",
    });

    const response = await this.getOAuthAxiosInstance().post(
      OAUTH_SPOTIFY_ROUTE.AUTH_TOKEN,
      data
    );

    console.log(data);

    return response;
  };
}
