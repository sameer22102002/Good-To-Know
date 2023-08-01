import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Login from './pages/login/Login.jsx'
import Register from "./pages/register/Register.jsx";
import Messenger from "./pages/messenger/Messenger.jsx"
import {createBrowserRouter, Routes, Route, Navigate } from "react-router-dom"; 
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext.js";

function App() {
  const {user} = useContext(AuthContext)
  
  return (
    <div >
    <createBrowserRouter>
      <Routes>

        <Route path="/" element={user ? <Home /> : <Login/>}>
        </Route>

        <Route path="/login" element={user ? <Navigate  to="/"/> : <Login />}> 
        </Route>

        <Route path="/register" element={user ? <Navigate  to="/"/> : <Register />}>
        </Route>

        <Route path="/messenger" element={!user ? <Navigate  to="/"/> : <Messenger />}>
        </Route>

        <Route path="/profile/:username" element={<Profile />}>
        </Route>

      </Routes>
    </createBrowserRouter>
    </div>
  );
}

export default App;
