import "./App.css";
import Home from "./Components/Home/";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/";
import Dashboard from "./Components/Dashboard/";
import LiveStream from "./Components/Live";
import { createContext, useState } from "react";
// import LiveStream from "./Components/Livestream";
import LivePeerTest from "./Components/ApiTest/LivePeerTest";
import SideBar from "./Components/SideBar/";
import LiveStream from "./Components/Live";

export const AccountContext = createContext();

function App() {
  const [account, setAccount] = useState(null);

  return (
    <AccountContext.Provider value={{ account, setAccount }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/live" element={<LiveStream />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/live" element={<LiveStream />} />
          <Route path="/lpt" element={<LivePeerTest/>} />
        </Routes>
      </BrowserRouter>
    </AccountContext.Provider>
  );
}

export default App;
