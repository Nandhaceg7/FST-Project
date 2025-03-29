
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import './App.css'
import Navbar  from './Navbar/Navbar'
import Login from './Login/Login'
import CreateAccount  from "./CreateAccount/CreateAccount";

function App() {
  return (
    <Router>
      <Navbar /> 
     
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Create" element={<CreateAccount />} />
       {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
