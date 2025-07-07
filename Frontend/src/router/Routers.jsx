// src/router/Routers.jsx
/*import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Layout from "../components/layout/layout";
import Navbar from "../components/Navbar";
import SignUpPage from "../pages/SignUpPage";
import ProfilePage from "../pages/ProfilePage";

const Routers = () => {
 return (
    <div >
      <Navbar />

      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/login" element={<Login /> }/>
        <Route path="/SignUpPage" element={<SignUpPage /> }/>
        <Route path="/ProfilePage" element={<ProfilePage /> }/>

      </Routes>

    </div>
  );
};

export default Routers;
*/
// src/router/Routers.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { useEffect } from "react";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUpPage from "../pages/SignUpPage";
import ProfilePage from "../pages/ProfilePage";
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
        <Route path="/" element={authUser ? <Home /> : <Navigate to="/login" />} />
        <Route path="/SignUpPage" element={!authUser ? <SignUpPage /> : <Navigate to="/" />} />
        <Route path="/login" element={!authUser ? <Login /> : <Navigate to="/" />} />
        <Route path="/ProfilePage" element={authUser ? <ProfilePage /> : <Navigate to="/login" />} />
      </Routes>

    </div>
  );
};

export default Routers;
