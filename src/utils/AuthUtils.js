const accessTokenKey = 'access_token';

export default {
  isUserloggedIn: () => !!localStorage.getItem(accessTokenKey),
  getToken: () => localStorage.getItem(accessTokenKey),
  login: token => localStorage.setItem(accessTokenKey, token),
  logout: () => localStorage.removeItem(accessTokenKey)
};
