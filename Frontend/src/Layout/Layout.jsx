import React from "react";
import Header from "../components/Navbar/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="bg-gray-200">
      <div>
        <Header />
      </div>
      <div>
        <Outlet />
      </div>
    
    </div>
  );
};

export default Layout;
