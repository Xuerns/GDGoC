import { Navigate } from "react-router";
import { useState, useEffect } from "react";
import LoginPage from "./page/loginPage";

export default function App() {
  const [isLogin, setIsLogin] = useState(() => {
    return JSON.parse(localStorage.getItem("isLogin")) || false;
  });
  const account = {
    name: "Dida Maesal Maulana",
    gmail: "belajarreact3@gmail.com",
    password: "react123",
  };

  const simpanLocal = (key, value) => {
    localStorage.setItem(key, value);
  };

  useEffect(() => {
    simpanLocal("account", JSON.stringify(account));
    simpanLocal("isLogin", JSON.stringify(isLogin));
  }, [isLogin]);

  if (isLogin) {
    return <Navigate to="/section" />;
  }

  return (
    <div>
      <LoginPage setIsLogin={setIsLogin} />
    </div>
  );
}
