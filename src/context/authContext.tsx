import { AuthContext } from "@/hooks/useAuthContext";
import { useAuth, useSignIn } from "@clerk/clerk-react";
import { useEffect, useState, type ReactNode } from "react";

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const { getToken, userId, isSignedIn } = useAuth();
  const { signIn, setActive } = useSignIn();
  const [profile, setProfile] = useState(null);

  const login = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    if (!signIn || !setActive) {
      throw new Error("Clerk is not initialized");
    }

    const response = await signIn.create({
      identifier: email,
      password,
    });

    if (response.status === "complete") {
      await setActive({ session: response?.createdSessionId });
    }
  };

  useEffect(() => {
    if (!isSignedIn) {
      setProfile(null);
      return;
    }

    const fetchProfile = async () => {
      const token = await getToken();

      const response = await fetch("", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await response.json();

      setProfile(data);
    };

    fetchProfile();
  }, [getToken, userId, isSignedIn]);

  return (
    <AuthContext.Provider value={{ login, profile, setProfile }}>
      {children}
    </AuthContext.Provider>
  );
};
