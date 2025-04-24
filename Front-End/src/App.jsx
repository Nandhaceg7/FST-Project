import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import About from "./About/About"

import UserHome from "./userComponents/Home/Home";
import WorkerHome from "./workerComponents/Home/Home";

import RegisterWorkers from './registration/RegisterWorkers';
import RegisterUsers from "./registration/RegisterUsers";

import UserLogin from "./login/UserLogin"
import WorkerLogin from "./login/WorkerLogin";

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/createWorker" element={<RegisterWorkers/>}/>
        <Route path="/createUser" element={<RegisterUsers/>}/>
        <Route path="/userHome" element={<UserHome/>}/>
        <Route path="/workerHome" element={<WorkerHome/>}/>
      </Routes>
      
      <About />
    </Router>
  );
}

// Function to handle login buttons and show respective login form
function Login() {
  const [showLoginForm, setShowLoginForm] = useState(null);

  const handleUserLoginClick = () => {
    setShowLoginForm("user");
  };

  const handleWorkerLoginClick = () => {
    setShowLoginForm("worker");
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <button onClick={handleUserLoginClick}>User Login</button>
      <button onClick={handleWorkerLoginClick}>Worker Login</button>

      {showLoginForm === "user" && <UserLogin />}
      {showLoginForm === "worker" && <WorkerLogin />}
    </div>
  );
}

export default App;
