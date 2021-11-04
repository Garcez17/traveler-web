import { useContextSelector } from 'use-context-selector';
import { SearchContext, SearchContextData } from '../contexts/SearchContext';

export function useSearch(): SearchContextData {
  const search = useContextSelector(
    SearchContext,
    searchContext => searchContext.search,
  );
  const changeSearchText = useContextSelector(
    SearchContext,
    searchContext => searchContext.changeSearchText,
  );

  return {
    search,
    changeSearchText,
  };
}
