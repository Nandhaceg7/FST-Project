
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import './App.css'
import Navbar  from './Navbar/Navbar'
import Login from './Login/Login'
import CreateAccount  from "./CreateAccount/CreateAccount";
import About from "./About/About";
import Search from "./Search/Search";

function App() {
  return (
    <Router>
      <Navbar /> 
     
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Create" element={<CreateAccount />} />
       <Route path="/Check" element={<Search /> } />
        
      </Routes>
      
      <About />
    </Router>
    
  );
}

export default App;
