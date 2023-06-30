export interface ArtistFetchingDTO {
  external_urls?: {
    spotify: string;
  };
  followers?: {
    total: number;
  };
  genres: string[];
  href?: string;
  id: string;
  images: {
    height: number;
    url: string;
    width: number;
  }[];
  name: string;
  popularity?: number;
}
