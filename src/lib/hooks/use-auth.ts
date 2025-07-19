export const useAuth = () => {
  const signIn = (token: string) => {
    localStorage.setItem("access_token", token);
  };
  const signOut = () => {
    localStorage.removeItem("access_token");
  };
  const getToken = () => localStorage.getItem("access_token");
  return { signIn, signOut, getToken };
};
