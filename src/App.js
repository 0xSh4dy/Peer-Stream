import "./App.css";
import Home from "./Components/Home/";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LivePeerTest from "./Components/LivePeerTest";
import Renderer from "./Components/Renderer/";
import Login from "./Components/Login/";
import Dashboard from "./Components/Dashboard/";
import Sidebar from "./Components/Sidebar/";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Sidebar />} />
        <Route path="/testing" element={<LivePeerTest />} />
        <Route path="/layoutTest" element={<Renderer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
