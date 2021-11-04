import { ReactNode } from 'react';
import { AuthProvider } from './AuthContext';
import { SearchProvider } from './SearchContext';

type AppProviderProps = {
  children: ReactNode;
};

export function AppProvider({ children }: AppProviderProps): JSX.Element {
  return (
    <AuthProvider>
      <SearchProvider>{children}</SearchProvider>
    </AuthProvider>
  );
}
