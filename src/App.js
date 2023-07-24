import React, { useEffect, useState } from "react";
import "./styles/App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/UI/navigation/Navbar.js";
import AppRouter from "./components/AppRouter.js";
import { AuthContext } from "./context/context.js";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    }
    setIsLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuth, setIsAuth, isLoading, setIsLoading }}
    >
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
