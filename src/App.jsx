import { useState } from "react";

import "./App.css";
import React from "react";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import ToolsSection from "./pages/ToolsSection";
import Resources from "./pages/Resources";
import Hero from "./pages/Hero";
import Webtools from "./pages/Webtools"
import Home from "./pages/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import WhatsApp from "./pages/WhatsApp";
import Indistartups from "./pages/Indistartups";
import ReactTailwindInst from "./pages/ReactTailwindInst";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>

      

  
  <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/indistartups" element={<Indistartups />} />
        <Route path="/reacttailwindinst" element={<ReactTailwindInst />}></Route>
        
      </Routes>
  

      
     
    </>
    
  );
}

export default App;
