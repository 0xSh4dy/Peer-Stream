import "./App.css";
import Home from "./Components/Home/Index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Index";
import LivePeerTest from "./Components/LivePeerTest";
import Layout from "./Components/Layout/Index";
import Renderer from "./Components/Renderer/Index";
import LiveStream from "./Components/Livestream";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/" element={<Sidebar/>}/>
        <Route path="/testing" element={<LivePeerTest/>}/>
        <Route path="/layoutTest" element= {<Renderer/>}/>
        <Route  path="/live" element={<LiveStream/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
