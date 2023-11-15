import "./App.css";
import NavBar from "./components/NavBar";
import TopBar from "./components/TopBar";
import Home from "./Pages/Home";
import Character from "./Pages/Character";
import Dice from "./Pages/Dice";
import Journal from "./Pages/Journal";
import Profile from "./Pages/Profile";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const API_Url = "http://localhost:8080" || import.meta.env.VITE_SERVER_URL;

function App() {
  return (
    <BrowserRouter>
      <TopBar />

      <Routes>
        <Route path="/" element={<Home API_Url={API_Url} />} />
        <Route path="/character" element={<Character API_Url={API_Url} />} />
        <Route path="/dice" element={<Dice API_Url={API_Url} />} />
        <Route path="/journal" element={<Journal API_Url={API_Url} />} />
        <Route path="/profile" element={<Profile API_Url={API_Url} />} />
      </Routes>

      <NavBar />
    </BrowserRouter>
  );
}

export default App;
