import React, { useContext, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { privateRoutes, publicRoutes } from "../routes/routes.js";
import { AuthContext } from "../context/context.js";
import Loader from "./UI/loader/Loader.js";

export default function AppRouter() {
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <Loader />;
  }

  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route
          path={route.path}
          element={route.component}
          key={route.component}
        />
      ))}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route
          path={route.path}
          element={route.component}
          key={route.component}
        />
      ))}
    </Routes>
  );
}
