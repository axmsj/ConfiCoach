import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function InterviewSetupPage() {
  const navigate = useNavigate();

  const [tone, setTone] = useState("Serious");
  const [coachName, setCoachName] = useState("ConfiCoach");
  const [userName, setUserName] = useState("");

  const handleContinue = () => {
    const config = {
      experience: "Interview",
      tone,
      scenario: "Job Interview",
      coachName: coachName.trim() || "ConfiCoach",
      userName: userName.trim() || "User",
    };

    localStorage.setItem("confiCoachConfig", JSON.stringify(config));
    localStorage.removeItem("confiCoachMessages");
    navigate("/chat");
  };

  return (
    <motion.div
      className="setup-page interview-setup-theme"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <div className="setup-card">
        <button className="back-button top-back-button" onClick={() => navigate("/")}>
          ← Back
        </button>

        <h1>Interview Setup</h1>
        <p className="setup-subtext">
          Set up your interview coach before you start chatting.
        </p>

        <div className="form-group">
          <label>
            <span className="label-icon">💼</span>
            Personality / Tone
          </label>
          <select value={tone} onChange={(e) => setTone(e.target.value)}>
            <option value="Serious">Serious</option>
          </select>
        </div>

        <div className="form-group">
          <label>
            <span className="label-icon">🤖</span>
            Name your coach
          </label>
          <input
            type="text"
            placeholder="Enter a coach name..."
            value={coachName}
            onChange={(e) => setCoachName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>
            <span className="label-icon">👤</span>
            What should your coach call you?
          </label>
          <input
            type="text"
            placeholder="Enter your name..."
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <button className="continue-button" onClick={handleContinue}>
          Continue to Chat
        </button>
      </div>
    </motion.div>
  );
}

export default InterviewSetupPage;