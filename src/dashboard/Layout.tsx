import React from "react";
import Sidebar from "../components/dashboard/Sidebar";
import Header from "../components/dashboard/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main>
      <div className="flex">
        <Sidebar />
        <div className=" w-full ml-20 md:ml-[250px]">
          <Header />
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default Layout;
