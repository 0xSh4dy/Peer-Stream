<<<<<<< HEAD
import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home/Index";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
=======
import './App.css';
import LivePeerTest from './Components/LivePeerTest';
import Login from './Components/Login';

function App() {
  return (
    <div>
      <Login />
      {/* <LivePeerTest /> */}
    </div>
>>>>>>> 52ef9fa (Add Login Essentials)
  );
}

export default App;
