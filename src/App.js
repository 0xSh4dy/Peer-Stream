import "./App.css";
import Home from "./Components/Home/Index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Index";
import LivePeerTest from "./Components/LivePeerTest";
import Layout from "./Components/Layout/Index";
import Renderer from "./Components/Renderer/Index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/" element={<Sidebar/>}/>
        <Route path="/testing" element={<LivePeerTest/>}/>
        <Route path="/layoutTest" element= {<Renderer/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
