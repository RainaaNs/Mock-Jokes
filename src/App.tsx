import React from 'react';
import { BrowserRouter, Route,  Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Details from './components/Details';
import HomePage from './components/HomePage'
import SignUp from './components/SignUp';
import Login from './components/Login';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route path="/homepage" element={<HomePage/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
