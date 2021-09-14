import { useContextSelector } from 'use-context-selector';
import { AuthContext, AuthContextData } from '../contexts/AuthContext';

export function useAuth(): AuthContextData {
  const user = useContextSelector(AuthContext, auth => auth.user);
  const isAuthenticated = useContextSelector(
    AuthContext,
    auth => auth.isAuthenticated,
  );
  const signIn = useContextSelector(AuthContext, auth => auth.signIn);
  const signOut = useContextSelector(AuthContext, auth => auth.signOut);

  return {
    user,
    isAuthenticated,
    signIn,
    signOut,
  };
}
