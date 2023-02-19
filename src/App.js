import "./App.css";
import Home from "./Components/Home/";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LivePeerTest from "./Components/LivePeerTest";
import Renderer from "./Components/Renderer/";
import Login from "./Components/Login/";
import Dashboard from "./Components/Dashboard/";
import SideBar from "./Components/SideBar/";
import LiveStream from "./Components/Live";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<SideBar />} />
        <Route path="/testing" element={<LivePeerTest />} />
        <Route path="/home" element={<Renderer />} />
        <Route path="/live" element={<LiveStream />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
