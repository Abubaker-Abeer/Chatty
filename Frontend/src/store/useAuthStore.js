// src/store/useAuthStore.js
import { create } from "zustand";

export const useAuthStore = create((set) => ({
  authUser: null,
  isAuthenticated: false,

  login: (userData) =>
    set({
      authUser: userData,
      isAuthenticated: true,
    }),

  logout: () =>
    set({
      authUser: null,
      isAuthenticated: false,
    }),

  setUser: (userData) =>
    set({
      authUser: userData,
      isAuthenticated: !!userData,
    }),
}));
