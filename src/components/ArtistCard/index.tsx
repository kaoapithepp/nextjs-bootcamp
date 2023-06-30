import { ArtistFetchingDTO } from "@/services/interfaces/artists.interface";
import Image from "next/image";

const Tag = ({ children }: { children: React.ReactNode }) => {
  return (
    <li className="text-xs text-gray-100 ring-1 ring-inset ring-gray-100 py-2 px-4 rounded-full w-fit truncate">
      {children}
    </li>
  );
};

export const ArtistCard = ({ artist }: { artist: ArtistFetchingDTO }) => {
  return (
    <div className="p-4 flex flex-col rounded-2xl duration-300 bg-gradient-to-b hover:from-lime-400 hover:to-green-700 hover:scale-105">
      <div className="flex items-center aspect-1/1">
        <Image
          src={artist.images[0].url}
          alt={artist.name}
          width={640}
          height={640}
          className="rounded-full"
        />
      </div>
      <section className="mt-4">
        <h2 className="text-gray-100 text-4xl font-medium">{artist.name}</h2>
        <ul className="list-none flex flex-wrap gap-2 mt-4">
          {artist.genres.map((item, key) => {
            return <Tag key={key}>{item.toUpperCase()}</Tag>;
          })}
        </ul>
      </section>
    </div>
  );
};
