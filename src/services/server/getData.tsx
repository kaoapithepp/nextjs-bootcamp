export const getSpotifyDataNoAuth = async (path?: string) => {
  const res = await fetch("https://api.spotify.com/v1" + path, {
    headers: {
      Authorization: "Bearer " + process.env.SPOTIFY_ACCESS_TOKEN,
    },
    method: "GET",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
