import "./App.css";
import NavBar from "./components/NavBar";
import TopBar from "./components/TopBar";
import Home from "./Pages/Home";
import Character from "./Pages/Character";
import Dice from "./Pages/Dice";
import Journal from "./Pages/Journal";
import Profile from "./Pages/Profile";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <TopBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character" element={<Character />} />
        <Route path="/dice" element={<Dice />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      <NavBar />
    </BrowserRouter>
  );
}

export default App;