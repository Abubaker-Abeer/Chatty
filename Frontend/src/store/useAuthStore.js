// src/store/useAuthStore.js
import { create } from "zustand";

export const useAuthStore = create((set) => ({
  authUser: null, // حالة المستخدم الحالي

  // دالة لتسجيل الدخول
  login: (userData) => {
    set({ authUser: userData });
  },

  // دالة لتسجيل الخروج
  logout: () => {
    set({ authUser: null });
  },
}));
