import { UNPROTECTED_PATH } from "@/constants/path.route";

const useViewModel = () => {
  const handleOnSignInClick = async () => {
    const redirectUrl = `${UNPROTECTED_PATH.CALLBACK_DEV}`;

    const queryParams = new URLSearchParams({
      response_type: "code",
      client_id: `${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID}`,
      scope: `${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SCOPE}`,
      redirect_uri: redirectUrl,
    }).toString();

    console.log(queryParams);

    window.location.href =
      "https://accounts.spotify.com/authorize?" + queryParams;
  };

  return {
    handleOnSignInClick,
  };
};

export default useViewModel;
