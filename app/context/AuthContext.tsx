"use client";

import React, { useState, createContext } from "react";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  city: string;
  phone: string;
  email: string;
}

interface State {
  loading: boolean;
  data: User | null;
  error: string | null;
}

interface AuthState extends State {
  setAuthState: React.Dispatch<React.SetStateAction<State>>;
}

export const AuthenticationContext = createContext<AuthState>({
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
    loading: false,
    error: null,
    data: null,
  });
  return (
    <AuthenticationContext.Provider value={{ ...authState, setAuthState }}>
      {children}
    </AuthenticationContext.Provider>
  );
}
