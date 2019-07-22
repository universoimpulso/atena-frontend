import { decrypt } from "./crypto";
const TOKEN_KEY = "@at:atpin";

export const isAuthenticated = async () => {
  const token = localStorage.getItem(TOKEN_KEY);
  const data = await decrypt(token);
  return token !== null && data !== null;
};

export const isCoreTeam = async () => {
  const token = localStorage.getItem(TOKEN_KEY);
  const data = await decrypt(token);
  return token !== null && data !== null && data.isCoreTeam;
};

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const login = token => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};
