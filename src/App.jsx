import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Daftar from "./pages/Daftar";
import Homepage from "./pages/Homepage";
import Tentang from "./pages/Tentang";
import NotFound from "./pages/NotFound";
import DesainArsitektur from "./pages/DesainArsitektur";
import DesainInterior from "./pages/DesainInterior";
import Pelaksanaan from "./pages/Pelaksanaan";
import Profile from "./pages/profile";
import Edit from "./pages/editprofile";
import Contact from "./pages/contactus";
import Portofolio from "./pages/Portofolio";
import NavbarC from "./components/NavbarC";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Tentang />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/desain-arsi" element={<DesainArsitektur />} />
        <Route path="/desain-inter" element={<DesainInterior />} />
        <Route path="/pelaksanaan" element={<Pelaksanaan />} />
        <Route path="/portofolio" element={<Portofolio />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign" element={<Daftar />} />
      </Routes>
    </Router>
  );
}

export default App;
