// src/layout/Layout.jsx
import Routers from "../../router/Routers";
import Navbar from "../Navbar";
import Snowfall from "./Snowfall";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="relative pt-5">
        <Snowfall />
        <Routers />
      </div>

    </>
  );
};

export default Layout;