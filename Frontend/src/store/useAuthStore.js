// src/store/useAuthStore.js
import { create } from "zustand";

export const useAuthStore = create((set) => ({
  authUser: null,
  login: (userData) => {
    set({ authUser: userData });
  },

  logout: () => {
    set({ authUser: null });
  },
}));
