import React from "react";
import Link from "next/link";
import { getSpotifyDataNoAuth } from "@/services/server/getData";
import { ArtistCard } from "@/components/ArtistCard";

export interface ArtistFetchingDTO {
  external_urls: {
    spotify: string;
  };
  followers: {
    total: number;
  };
  genres: string[];
  href: string;
  id: string;
  images: {
    height: number;
    url: string;
    width: number;
  }[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

const ArtistsPage = async () => {
  const data = await getSpotifyDataNoAuth(
    "/artists?ids=6bDWAcdtVR3WHz2xtiIPUi,0blbVefuxOGltDBa00dspv,5Vo1hnCRmCM6M4thZCInCj,64tJ2EAv1R6UaZqc4iOCyj"
  );

  return (
    <section className="pb-4">
      <h1 className="text-8xl text-gray-100 font-bold mt-4">Artists</h1>
      <div className="grid grid-cols-3 gap-4">
        {data.artists.map((elem: ArtistFetchingDTO, key: number) => {
          return (
            <div className="m-4" key={key}>
              <Link href={`/artists/${elem.id}`} className="w-fit">
                <ArtistCard artist={elem} />
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ArtistsPage;
