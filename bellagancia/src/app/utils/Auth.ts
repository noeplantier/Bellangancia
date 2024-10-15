// src/utils/auth.ts
export const checkAuth = (): boolean => {
    const token = localStorage.getItem('authToken');
    return token ? true : false;
  }
  