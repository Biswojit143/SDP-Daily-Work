let authToken = null;

export const authStore = {
  setToken(token) {
    authToken = token;
  },

  getToken() {
    return authToken;
  },

  clearToken() {
    authToken = null;
  },

  isAuthenticated() {
    return authToken !== null;
  },
};