// src/store/useAuthStore.js
import { create } from "zustand";

export const useAuthStore = create((set) => ({
  authUser: null,
  isAuthenticated: false,
  isCheckingAuth: true, 

  login: (userData) =>
    set({
      authUser: userData,
      isAuthenticated: true,
      isCheckingAuth: false,
    }),

  logout: () => {
    localStorage.removeItem("user");
    set({
      authUser: null,
      isAuthenticated: false,
      isCheckingAuth: false,
    });
  },

  setUser: (userData) =>
    set({
      authUser: userData,
      isAuthenticated: !!userData,
      isCheckingAuth: false,
    }),

  // ✅ نضيف هذه
  checkAuth: () => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      set({
        authUser: JSON.parse(storedUser),
        isAuthenticated: true,
        isCheckingAuth: false,
      });
    } else {
      set({
        authUser: null,
        isAuthenticated: false,
        isCheckingAuth: false,
      });
    }
  },
}));
