import { useAuthContext } from "@/hooks/useAuthContext";
import { useAuth } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { isSignedIn } = useAuth();
  const { login } = useAuthContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      navigate("/dashboard");
    }
  }, [isSignedIn, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[url('/login-background.png')] bg-cover bg-center">
      <form
        onSubmit={() => login({ email, password })}
        className="bg-[#c2b280] border-4 border-[#3f3f3f] p-6 md:p-8 rounded-md shadow-2xl font-retro w-80 text-[#3f3f3f]"
      >
        <h1 className="text-center text-lg md:text-xl font-bold mb-6">
          🌲 RETRO LOGIN 🌲
        </h1>

        <label className="block mb-2">EMAIL</label>
        <input
          type="email"
          className="w-full p-2 mb-4 border-2 border-[#3f3f3f] bg-[#e8e1c1] text-[#3f3f3f] font-retro text-xs"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="block mb-2">PASSWORD</label>
        <input
          type="password"
          className="w-full p-2 mb-6 border-2 border-[#3f3f3f] bg-[#e8e1c1] text-[#3f3f3f] font-retro text-xs"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full border-2 border-[#3f3f3f] bg-[#5da271] text-white font-bold py-2 hover:bg-[#7dc98e]"
        >
          LOGIN
        </button>
      </form>
    </div>
  );
};
