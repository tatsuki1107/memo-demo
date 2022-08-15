import React from "react";
import { Navigate } from 'react-router-dom';
import { useAuth } from "./AuthService";

const LoggedInRoute = ({ children }) => {
  const { user } = useAuth();
  console.log(user)
  if (!user) {
    return <Navigate to='/LogIn' />
  }
  return children;
};

export default LoggedInRoute;
