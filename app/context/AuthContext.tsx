"use client";

import React, { useState, createContext, useEffect } from "react";
import { getCookie } from "cookies-next";
import axios from "axios";
import { State } from "../interfaces/IState";
import { IAuthState } from "../interfaces/IAuthState";
import { exportUrls } from "../../utils/exportUrls";

export const AuthenticationContext = createContext<IAuthState>({
  loading: false,
  error: null,
  data: null,
  setAuthState: () => {},
});

export default function AuthContext({
  children,
}: {
  children: React.ReactNode;
}) {
  const [authState, setAuthState] = useState<State>({
    loading: true,
    error: null,
    data: null,
  });
  const fetchUser = async () => {
    setAuthState({
      error: null,
      data: null,
      loading: true,
    });
    try {
      const jwt = getCookie("jwt");

      if (!jwt) {
        return setAuthState({
          error: null,
          data: null,
          loading: false,
        });
      }
      const response = await axios.get(exportUrls.apiAuthenticatedDev, {
      // const response = await axios.get(exportUrls.apiAuthenticatedProd, {
        headers: { Authorization: `Bearer ${jwt}` },
      });

      axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;

      setAuthState({
        data: response.data,
        error: null,
        loading: false,
      });
    } catch (error: any) {
      setAuthState({
        error: error.response.data.errorMessage,
        data: null,
        loading: false,
      });
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthenticationContext.Provider value={{ ...authState, setAuthState }}>
      {children}
    </AuthenticationContext.Provider>
  );
}
