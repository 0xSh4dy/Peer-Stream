import "./App.css";
import Home from "./Components/Home/";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LivePeerTest from "./Components/LivePeerTest";
import Login from "./Components/Login/";
import Dashboard from "./Components/Dashboard/";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/testing" element={<LivePeerTest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
