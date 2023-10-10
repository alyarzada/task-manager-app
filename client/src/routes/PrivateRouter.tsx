import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";

export const PrivateRoute = ({ element }: { element: React.ReactNode }) => {
  const isAuthenticated = JSON.parse(
    `${localStorage.getItem("userData")}`
  ).token;
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  return <>{element}</>;
};
