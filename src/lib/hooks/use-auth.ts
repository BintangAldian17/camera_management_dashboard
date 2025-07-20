import { TOKEN_KEY } from "../constant";

export const useAuth = () => {
  const signIn = (token: string) => {
    localStorage.setItem(TOKEN_KEY, token);
  };
  const signOut = () => {
    localStorage.removeItem(TOKEN_KEY);
  };
  const getToken = () => localStorage.getItem(TOKEN_KEY);
  return { signIn, signOut, getToken };
};
