import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import App from "../Pages/App";
import SignUp from "../Pages/SignUp";
import LogIn from "../Pages/LogIn";

import { AuthProvider } from "./AuthService";
import LoggedInRoute from "./LoggedInRoute";

const Routing = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route
            path="/"
            element={
              <LoggedInRoute>
                <App />
              </LoggedInRoute>
            } />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default Routing;
