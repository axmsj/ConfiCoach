import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import HomeSelectPage from "./HomeSelectPage";
import RomanceSetupPage from "./RomanceSetupPage";
import InterviewSetupPage from "./InterviewSetupPage";
import ChatPage from "./ChatPage";
import Navbar from "./Navbar";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ paddingTop: "60px" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/models" element={<HomeSelectPage />} />
          <Route path="/romance-setup" element={<RomanceSetupPage />} />
          <Route path="/interview-setup" element={<InterviewSetupPage />} />
          <Route path="/chat" element={<ChatPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;