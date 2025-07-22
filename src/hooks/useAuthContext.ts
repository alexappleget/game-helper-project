import type { IAuthContext } from "@/types/interface";
import { createContext, useContext } from "react";

export const AuthContext = createContext<IAuthContext>({
  login: async () => {
    throw new Error("Login function must be used inside the AuthProvider.");
  },
  profile: null,
  setProfile: () => {
    throw new Error("setProfile must be used inside the AuthProvider.");
  },
});
export const useAuthContext = () => useContext(AuthContext);
