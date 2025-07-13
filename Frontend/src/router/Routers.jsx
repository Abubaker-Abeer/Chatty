import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { useEffect } from "react";

// الصفحات
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUpPage from "../pages/SignUpPage";
import ProfilePage from "../pages/ProfilePage";
import SettingsPage from "../pages/SettingsPage"; 

// المكونات
import Navbar from "../components/Navbar";
import { Loader } from "lucide-react";

const Routers = () => {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();

  useEffect(() => {
    checkAuth(); 
  }, [checkAuth]);

  if (isCheckingAuth && !authUser) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );
  }

  return (
    <div>
      <Navbar />

      <Routes>
        {/* 🏠 الرئيسية: مسموحة فقط للمستخدمين */}
        <Route path="/" element={authUser ? <Home /> : <Navigate to="/login" />} />

        {/* 📝 التسجيل: فقط لغير المسجلين */}
        <Route path="/SignUpPage" element={!authUser ? <SignUpPage /> : <Navigate to="/" />} />

        {/* 🔐 تسجيل الدخول: فقط لغير المسجلين */}
        <Route path="/login" element={!authUser ? <Login /> : <Navigate to="/" />} />

        {/* 👤 الملف الشخصي: فقط للمسجلين */}
        <Route path="/Profile" element={authUser ? <ProfilePage /> : <Navigate to="/login" />} />

        {/* ⚙️ الإعدادات: فقط للمسجلين */}
         <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </div>
  );
};

export default Routers;
