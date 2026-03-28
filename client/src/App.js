import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeSelectPage from "./HomeSelectPage";
import RomanceSetupPage from "./RomanceSetupPage";
import InterviewSetupPage from "./InterviewSetupPage";
import ChatPage from "./ChatPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeSelectPage />} />
        <Route path="/romance-setup" element={<RomanceSetupPage />} />
        <Route path="/interview-setup" element={<InterviewSetupPage />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
    </Router>
  );
}

export default App;