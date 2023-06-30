"use client";
import { IUserAuth } from "@/services/interfaces/user.interface";
import { createContext, useState } from "react";

export interface AuthContextType {
  user: IUserAuth | null;
  setCredential: (user: IUserAuth) => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUserAuth | null>(
    JSON.parse(JSON.stringify(localStorage.getItem("spotify_oauth")))
  );

  function setCredential(user: IUserAuth) {
    setUser(user);
    localStorage.setItem("spotify_oauth", JSON.stringify(user));
  }

  return (
    <AuthContext.Provider value={{ user, setCredential }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
