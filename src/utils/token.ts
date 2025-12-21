const ACCESS_TOKEN_KEY = "access_token";
const REFRESH_TOKEN_KEY = "refresh_token";

export const getLocalStorageAccessToken = () =>
  localStorage.getItem(ACCESS_TOKEN_KEY);

export const getLocalStorageRefreshToken = () =>
  localStorage.getItem(REFRESH_TOKEN_KEY);

export const setLocalStorageTokens = (access: string, refresh: string) => {
  localStorage.setItem(ACCESS_TOKEN_KEY, access);
  localStorage.setItem(REFRESH_TOKEN_KEY, refresh);
};

export const clearLocalStorageTokens = () => {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  localStorage.removeItem(REFRESH_TOKEN_KEY);
};
