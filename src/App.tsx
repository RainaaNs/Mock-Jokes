import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import ActivityPage from "./pages/ActivityPage";
import SignUp from "./pages/SignUp";
import Details from "./pages/Details";
import Layout from "./dashboard/Layout";
import Dashboard from "./pages/dashboard/Dashboard";
import Manage from "./pages/dashboard/Manage";
import Users from "./pages/dashboard/Users";

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/activitypage" element={<ActivityPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Login />} />
        <Route path="/details" element={<Details />} />

        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/dashboard/manage" element={<Manage />} />
          <Route path="/dashboard/users" element={<Users />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
