// src/router/Routers.jsx
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Layout from "../components/layout/layout";
import Navbar from "../components/Navbar";

const Routers = () => {
 return (
    <div >
      <Navbar />

      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/login" element={<Login /> }/>
      </Routes>

    </div>
  );
};

export default Routers;
