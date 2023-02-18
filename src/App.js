import "./App.css";
import Home from "./Components/Home/Index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Login/> }/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
