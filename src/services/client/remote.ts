import { BaseAxios, BaseOAuthAxios } from "./base.axios";

export class RemoteOAuthSpotify extends BaseOAuthAxios {
  constructor() {
    super({ baseURL: "https://accounts.spotify.com/api" });
  }
}

export class RemoteSpotifyData extends BaseAxios {
  constructor() {
    super({ baseURL: "https://api.spotify.com/v1" });
  }
}
