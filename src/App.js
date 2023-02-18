import "./App.css";
import Home from "./Components/Home/";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LivePeerTest from "./Components/LivePeerTest";
import Login from "./Components/Login/";
import Dashboard from "./Components/Dashboard/";
import { createContext, useState } from "react";
import ApiTest from "./Components/ApiTest";

export const AddressContext = createContext();

function App() {
  const [address, setAddress] = useState(null);

  return (
    <AddressContext.Provider value={{ address, setAddress }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/testing" element={<LivePeerTest />} />
          <Route path="/apiTest" element={<ApiTest />} />

        </Routes>
      </BrowserRouter>
    </AddressContext.Provider>
  );
}

export default App;
