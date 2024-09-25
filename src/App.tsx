import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Details from "./components/Details";
import HomePage from "./components/HomePage";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Likes from "./components/Likes";
import Dislikes from "./components/Dislikes";
import ActivityPage from "./components/ActivityPage";

function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/activity" element={<ActivityPage />} />
          <Route path="/dislikes" element={<Dislikes/>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Login />} />
          <Route path="/likes" element={<Likes />} />
          <Route path="/dislikes" element={<Dislikes />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
