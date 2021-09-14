import Router from 'next/router';
import { ReactNode, useCallback, useEffect, useState } from 'react';
import { createContext } from 'use-context-selector';
import { setCookie, destroyCookie } from 'nookies';

import { api } from '../services/apiClient';

type User = {
  id: string;
  name: string;
  email: string;
};

type SignInCredentials = {
  email: string;
  password: string;
};

export type AuthContextData = {
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => void;
  user: User;
  isAuthenticated: boolean;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export function signOut(): void {
  destroyCookie(undefined, 'traveler.token', {
    path: '/',
  });

  Router.push('/login');
}

export function AuthProvider({ children }: AuthProviderProps): JSX.Element {
  const [user, setUser] = useState<User>(null);
  const isAuthenticated = !!user;

  // useEffect(() => {
  //   async function loadFromCookies() {
  //     try {
  //       const { data } = await api.get(`users/me`);

  //       setUser({
  //         email: data.user.email,
  //         name: data.user.name,
  //         id: data.user.id,
  //       });
  //     } catch (err) {
  //       console.log(err.response);
  //     }
  //   }

  //   loadFromCookies();
  // }, []);

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    try {
      const { data } = await api.post('users/session', {
        email,
        password,
      });

      const { token } = data;

      setCookie(undefined, 'traveler.token', token, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/',
      });

      api.defaults.headers.Authorization = `Bearer ${token}`;

      setUser({
        email: data.user.email,
        name: data.user.name,
        id: data.user.id,
      });

      Router.push('/dashboard');
    } catch (err) {
      console.log(err.response);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
