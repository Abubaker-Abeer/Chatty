import React, { useEffect } from 'react';
import Layout from './components/layout/layout';
import { Toaster } from 'react-hot-toast';
import { useThemeStore } from "./store/useThemeStore";

export default function App() {
  const { theme, initTheme } = useThemeStore();

  useEffect(() => {
    initTheme(); 
  }, []);

  return (
    <div data-theme={theme}>
      <Toaster position="top-right" reverseOrder={false} />
      <Layout />
    </div>
  );
}
