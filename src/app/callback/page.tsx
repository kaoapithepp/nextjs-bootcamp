"use client";
import { UserService } from "@/services/client/remotes/user";
import { UserRepository } from "@/services/client/user/UserRepository";
import { useContext, useEffect, useMemo } from "react";
import { CircularProgress } from "@mui/material";
import { AuthContext, AuthContextType } from "@/context/AuthProvider";
import { useRouter } from "next/navigation";

const CallbackPage = ({ searchParams }: { searchParams: { code: string } }) => {
  const { code } = searchParams;

  const auth = useContext(AuthContext);
  const { push } = useRouter();

  // const response = await fetch("https://accounts.spotify.com/api/token", {
  //   headers: {
  //     Authorization:
  //       "Basic " +
  //       Buffer.from(
  //         process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID +
  //           ":" +
  //           process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET
  //       ).toString("base64"),
  //     "Content-Type": "application/x-www-form-urlencoded",
  //   },
  //   method: "POST",
  //   body: new URLSearchParams({
  //     code,
  //     redirect_uri: "http://localhost:3000/callback",
  //     grant_type: "authorization_code",
  //   }),
  // });

  // const data = await response.json();

  // const searchParams = useSearchParams();
  // const code = searchParams.get("code");

  const signInOAuthService = useMemo(() => {
    return new UserRepository(new UserService());
  }, []);

  useEffect(() => {
    console.count("auth");
    signInOAuthService
      .signInOAuth(code ?? "")
      .then((res) => {
        auth?.setCredential(res);
      })
      .catch((err) => console.error(err.message))
      .finally(() => {
        push("/");
      });
  }, [code, push, signInOAuthService, auth]);

  return (
    <div className="h-screen w-full flex items-center justify-center m-auto">
      <h1 className="text-gray-100 flex flex-col justify-center items-center text-center">
        <CircularProgress color="inherit" />
        <span className="mt-4">Authenticating...</span>
      </h1>
    </div>
  );
};

export default CallbackPage;
