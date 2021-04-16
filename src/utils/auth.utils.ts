export const setAuthToken = (authToken: string) => {
  localStorage.setItem('authToken', authToken);
};

export const resetAuthToken = () => {
  localStorage.removeItem('authToken');
};
