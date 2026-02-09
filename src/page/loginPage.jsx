import { useState } from "react";

export default function LoginPage({ setIsLogin }) {
  const [gmail, setGmail] = useState("");
  const [password, setPassword] = useState("");

  const checkAccount = JSON.parse(localStorage.getItem("account"));

  const auth = (e) => {
    e.preventDefault();

    if (gmail === checkAccount.gmail && password === checkAccount.password) {
      localStorage.setItem("isLogin", "true");
      setIsLogin(true);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col gap-3 bg-white p-5 shadow-sm shadow-gray-500 rounded-2xl min-w-80">
        <h2 className="text-center text-xl font-bold text-blue-400">Login</h2>
        <form className="flex flex-col gap-4" onSubmit={auth}>
          <div className="flex flex-col gap-2">
            <label className="text-blue-400 font-semibold">Email</label>
            <input
              type="email"
              placeholder="Your Email..."
              value={gmail}
              onChange={(e) => setGmail(e.target.value)}
              className="p-2 border rounded"
            />
            <label className="text-blue-400 font-semibold">Password</label>
            <input
              type="password"
              placeholder="Your Password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 border rounded"
            />
          </div>
          <button
            className="text-center w-full bg-blue-400 text-white font-bold rounded-md p-2 hover:bg-blue-600"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
