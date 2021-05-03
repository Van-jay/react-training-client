export const setAuthToken = (authToken: string) => {
  localStorage.setItem('authToken', `Bearer ${authToken}`);
};

export const resetAuthToken = () => {
  localStorage.removeItem('authToken');
};

export const getIsAuthenticated = () => !!localStorage.getItem('authToken');

export const getAuthToken = () => localStorage.getItem('authToken');
