
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import './App.css'
import Navbar  from './Navbar/Navbar'
import Login from './Login/Login'
import CreateAccount  from "./CreateAccount/CreateAccount";
import About from "./About/About";
import Search from "./Search/Search";
import View from "./View/View"
import Workspce from "./Workspace/Workspace"
import Add from './AddWorkers/Addworker';



function App() {
  return (
    <Router>
      <Navbar /> 
     
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Create" element={<CreateAccount />} />
        <Route path="/Check" element={<Search /> } />
        <Route path="/View" element={<View /> } />
        <Route path="/Add" element={<Add /> } />
        <Route path="/Workspace" element={<Workspce /> } />
     1 </Routes>
      
      <About />
    </Router>
    
  );
}

export default App;
