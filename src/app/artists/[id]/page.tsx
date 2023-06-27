import { cx } from "@emotion/css";
import { getSpotifyDataNoAuth } from "@/services/getData";
import { ArtistFetchingDTO } from "../page";
import Image from "next/image";
import { TopTrackCard } from "@/components/TopTrackCard";
import Link from "next/link";

export type TopTrackDTO = {
  album: {
    album_type: string;
    artists: {
      external_urls: {
        spotify: string;
      };
      href: string;
      id: string;
      name: string;
      type: string;
      uri: string;
    }[];
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    images: {
      height: number;
      url: string;
      width: number;
    }[];
    is_playable: boolean;
    name: string;
    release_date: string;
    release_date_precision: string;
    total_tracks: number;
    type: string;
    uri: string;
  };
  artists: {
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
  }[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  is_playable: true;
  name: string;
  popularity: number;
  track_number: number;
  type: string;
};

const ArtistProfile = async ({ params }: { params: { id: string } }) => {
  const data: ArtistFetchingDTO = await getSpotifyDataNoAuth(
    `/artists/${params.id}`
  );
  const albumData = await getSpotifyDataNoAuth(
    `/artists/${params.id}/top-tracks?market=TH`
  );

  return (
    <div className="flex flex-col">
      <header className="min-h-[24rem] bg-gradient-to-t from-green-900">
        <div className="relative min-h-[24rem]">
          <section className="absolute bottom-4 flex gap-4 items-end w-full px-4">
            <h1 className="text-8xl text-gray-100 font-semibold">
              {data.name}
            </h1>
            <p className="text-gray-100 mb-2 ml-auto">
              {data.followers.total.toLocaleString()} followers
            </p>
          </section>
          <Image
            src={data.images[0].url}
            alt={data.name}
            fill
            className="object-cover -z-10 bottom-0"
          />
        </div>
      </header>
      <main className="flex flex-col mt-10">
        <h2 className="text-gray-100 text-2xl font-medium">
          Artist{"'"}s Top Tracks in Thailand
        </h2>
        <div className="flex space-x-2 overflow-x-scroll overflow-hidden mt-4">
          {albumData.tracks.map((item: TopTrackDTO, key: number) => {
            return (
              <Link
                href={`${item.external_urls.spotify}`}
                target="_blank"
                key={key}
              >
                <TopTrackCard track={item} />
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default ArtistProfile;
