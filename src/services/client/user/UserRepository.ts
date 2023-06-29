import { UserServiceAble } from "../remotes/user.interface";

export class UserRepository {
  private service: UserServiceAble;

  constructor(remote: UserServiceAble) {
    this.service = remote;
  }

  signInOAuth = async (code: string) => {
    return this.service.getAccessTokenSpotify(code);
  };
}
