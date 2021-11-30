import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../Auth/authStore";

const PrivateRoute = () => {
  const { authenticated } = useAuthStore();

  return authenticated ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default PrivateRoute;
