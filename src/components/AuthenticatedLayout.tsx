import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/clerk-react";
import { Outlet } from "react-router-dom";

export const AuthenticatedLayout = () => {
  return (
    <>
      <SignedIn>
        <Outlet />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
};
