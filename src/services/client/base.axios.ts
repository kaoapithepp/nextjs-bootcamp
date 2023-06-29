import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export class BaseAxios {
  private axiosInstance: AxiosInstance;

  constructor(configInstance: AxiosRequestConfig) {
    this.axiosInstance = axios.create(configInstance);

    this.axiosInstance.interceptors.request.use(
      (config) => {
        config.headers[
          "Authorization"
        ] = `Bearer ${process.env.SPOTIFY_ACCESS_TOKEN}`;
        return config;
      },
      (err) => {
        return Promise.reject(err);
      }
    );
  }

  getAxiosInstance() {
    return this.axiosInstance;
  }
}

export class BaseOAuthAxios {
  private axiosInstance: AxiosInstance;

  constructor(configInstance: AxiosRequestConfig) {
    this.axiosInstance = axios.create(configInstance);

    this.axiosInstance.interceptors.request.use(
      (config) => {
        config.headers["Authorization"] =
          "Basic " +
          Buffer.from(
            process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID +
              ":" +
              process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET
          ).toString("base64");
        config.headers["Content-Type"] = "application/x-www-form-urlencoded";

        return config;
      },
      (err) => {
        return Promise.reject(err);
      }
    );

    this.axiosInstance.interceptors.response.use((response) => response);
  }

  getOAuthAxiosInstance() {
    return this.axiosInstance;
  }
}
