import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: "purple", // Default theme

  setTheme: (theme) => {
    localStorage.setItem("chat-theme", theme);
    set({ theme });
  },

  initTheme: () => {
    const storedTheme = localStorage.getItem("chat-theme") || "purple";
    set({ theme: storedTheme });
  },
}));
