import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SetupPage from "./SetupPage";
import ChatPage from "./ChatPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SetupPage />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
    </Router>
  );
}

export default App;