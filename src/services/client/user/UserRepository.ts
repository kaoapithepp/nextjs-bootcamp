import { IUserAuth } from "@/services/interfaces/user.interface";
import { UserServiceAble } from "../remotes/user.interface";

export class UserRepository {
  private service: UserServiceAble;

  constructor(remote: UserServiceAble) {
    this.service = remote;
  }

  signInOAuth = async (code: string): Promise<IUserAuth> => {
    return await this.service.getAccessTokenSpotify(code);
  };
}
