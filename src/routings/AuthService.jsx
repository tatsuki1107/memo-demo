import React, { useState, useEffect, createContext, useContext } from "react";
import { auth } from "../firebase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = async (email, password) => {
    return await auth.createUserWithEmailAndPassword(email, password)
  };

  const signIn = async (email, password) => {
    return await auth.signInWithEmailAndPassword(email, password)
  };

  const logout = () => {
    return auth.signOut()
  }
  useEffect(() => {
    const unsubscribed = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });
    return () => {
      unsubscribed();
    }
  }, []);

  if (!loading) {
    return <AuthContext.Provider value={{ user, createUser, logout, signIn }}>{children}</AuthContext.Provider>;
  }
};

export const useAuth = () => {
  return useContext(AuthContext);
};

