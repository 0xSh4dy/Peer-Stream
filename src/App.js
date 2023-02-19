import "./App.css";
import Home from "./Components/Home/";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/";
import Dashboard from "./Components/Dashboard/";
import SideBar from "./Components/SideBar/";
import LiveStream from "./Components/Live";
import { createContext, useState } from "react";
import SideBar from "./Components/SideBar/";
import LiveStream from "./Components/Live";
import { createContext, useState } from "react";

export const AccountContext = createContext();

function App() {
  const [account, setAccount] = useState(null);
  const [searchKeywords,setSearchKeywords] = useState("");
  const [startVideoSearch,setStartVideoSearch] = useState(false);
  return (
    <AccountContext.Provider value={{ account, setAccount, searchKeywords, setSearchKeywords,startVideoSearch,setStartVideoSearch }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/live" element={<LiveStream />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </AccountContext.Provider>
  );
}

export default App;
