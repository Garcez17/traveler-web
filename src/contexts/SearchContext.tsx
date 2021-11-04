import { ReactNode, useCallback, useState } from 'react';
import { createContext } from 'use-context-selector';

export type SearchContextData = {
  search: string;
  changeSearchText: (text: string) => void;
};

type SearchProviderProps = {
  children: ReactNode;
};

export const SearchContext = createContext({} as SearchContextData);

export function SearchProvider({ children }: SearchProviderProps): JSX.Element {
  const [search, setSearch] = useState('');

  const changeSearchText = useCallback((text: string) => {
    setSearch(text);
  }, []);

  return (
    <SearchContext.Provider value={{ search, changeSearchText }}>
      {children}
    </SearchContext.Provider>
  );
}
