// src/router/Routers.jsx
import { Routes, Route } from "react-router-dom";
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
