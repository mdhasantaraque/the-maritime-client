import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Spinners from "../components/Spinners";
import { AuthContext } from "../contexts/UserContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <Spinners></Spinners>;
  }
  if (user && user.uid) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
