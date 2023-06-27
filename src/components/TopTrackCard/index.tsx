import { TopTrackDTO } from "@/app/artists/[id]/page";
import Image from "next/image";

export const TopTrackCard = ({ track }: { track: TopTrackDTO }) => {
  return (
    <div className="duration-300 ring-inset hover:ring-1 hover:ring-gray-500 p-4 rounded-xl w-fit h-fit justify-center max-w-xs">
      <div className="w-48 h-48 flex justify-center">
        <Image
          src={track.album.images[0].url}
          alt={track.name}
          width={track.album.images[0].width}
          height={track.album.images[0].height}
          className="rounded-xl"
        />
      </div>
      <h4 className="mt-2 text-xl font-medium text-gray-100 truncate w-[10rem]">
        {track.name}
      </h4>
      <p className="text-gray-300 truncate w-[10rem]">{track.album.name} </p>
      <p className="font-light text-gray-500">
        {(track.duration_ms / 60000).toFixed(1)} min.
      </p>
    </div>
  );
};
