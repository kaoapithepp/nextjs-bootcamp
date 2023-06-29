"use client";
import { UNPROTECTED_PATH } from "@/constants/path.route";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../Button";
import useViewModel from "./viewModel";

type NavListType = {
  item: string;
  path: string;
};

const navLists = [
  {
    item: "Artists",
    path: UNPROTECTED_PATH.ARTIST,
  },
];

export const Navbar = () => {
  const { handleOnSignInClick } = useViewModel();

  return (
    <div className="bg-gray-100 p-4 w-screen flex items-center justify-center sticky z-40">
      <section className="max-w-[1200px] flex w-full items-center">
        <Link href="/">
          <div className="flex gap-2 items-center">
            <Image
              src="https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png"
              alt="SpotifyDash"
              width={24}
              height={24}
              className="brightness-0 grayscale"
            />
            <h1 className="text-gray-900 text-xl font-bold">SpotifyDash</h1>
          </div>
        </Link>
        <div className="ml-auto flex gap-4 items-center">
          <ul className="list-none flex gap-4">
            {navLists.map((elem: NavListType, key: number) => {
              return (
                <Link href={elem.path} key={key}>
                  <li className="text-gray-900 font-medium flex items-center gap-2 group">
                    <p>{elem.item}</p>
                    <div className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-200 opacity-75 invisible group-hover:visible" />
                      <span className="animate-pulse relative inline-flex rounded-full h-2 w-2 bg-green-600 invisible group-hover:visible" />
                    </div>
                  </li>
                </Link>
              );
            })}
          </ul>
          <Button variant="dark" onClick={() => handleOnSignInClick()}>
            Sign In
          </Button>
        </div>
      </section>
    </div>
  );
};
