import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Details from "./components/pages/Details";
import HomePage from "./components/pages/HomePage";
import SignUp from "./components/pages/SignUp";
import Login from "./components/pages/Login";
import ActivityPage from "./components/pages/ActivityPage";

function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/activitypage" element={<ActivityPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Login />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;