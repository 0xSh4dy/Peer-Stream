import "./App.css";
import Home from "./Components/Home/Index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/" element={<Sidebar/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
