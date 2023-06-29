"use client";
import { UserService } from "@/services/client/remotes/user";
import { UserRepository } from "@/services/client/user/UserRepository";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo } from "react";

const CallbackPage = () => {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");

  const signInOAuthService = useMemo(() => {
    return new UserRepository(new UserService());
  }, []);

  useEffect(() => {
    signInOAuthService
      .signInOAuth(code ?? "")
      .then((res) => console.log(res))
      .catch((err) => console.error(err.message));
  }, [signInOAuthService, code]);

  return (
    <div className="h-screen w-full flex items-center justify-center m-auto">
      <h1 className="text-gray-100">Loading...</h1>
    </div>
  );
};

export default CallbackPage;
