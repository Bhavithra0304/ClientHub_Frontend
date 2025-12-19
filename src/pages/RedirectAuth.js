import React from "react";
import { Navigate } from "react-router-dom";
import Home from "./Home";

const RedirectAuth = () => {
  const isAuthenticated = localStorage.getItem("auth") === "true";

  if (isAuthenticated) {
    return <Navigate to="/welcome" />;
  }
  return <Home />;
};

export default RedirectAuth;
