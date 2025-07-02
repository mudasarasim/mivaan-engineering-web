import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import MivaanGeneral from "./pages/MivaanGeneral";
import MivaanContracting from "./pages/MivaanContracting";


function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/contact" element={<Contact />} />
           <Route path="/projects" element={<Projects />} />
           <Route path="/mivaan-general" element={<MivaanGeneral />} />
           <Route path="/mivaan-contracting" element={<MivaanContracting />} />         
           
        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
