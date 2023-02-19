import "./App.css";
import Home from "./Components/Home/";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/";
import Dashboard from "./Components/Dashboard/";
<<<<<<< HEAD
import SideBar from "./Components/SideBar/";
import LiveStream from "./Components/Live";
=======
import { createContext, useState } from "react";
>>>>>>> 9fed3a1c6f4cc5f18550fb023808398b2c6a0d6d

export const AccountContext = createContext();

function App() {
  const [account, setAccount] = useState(null);

  return (
<<<<<<< HEAD
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
=======
    <AccountContext.Provider value={{ account, setAccount }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </AccountContext.Provider>
>>>>>>> 9fed3a1c6f4cc5f18550fb023808398b2c6a0d6d
  );
}

export default App;
