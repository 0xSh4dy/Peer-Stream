import "./App.css";
import Home from "./Components/Home/Index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import LivePeerTest from "./Components/LivePeerTest";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/" element={<Sidebar/>}/>
        <Route path="/testing" element={<LivePeerTest/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
