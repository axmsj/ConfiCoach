import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function RomanceSetupPage() {
  const navigate = useNavigate();

  const [tone, setTone] = useState("Flirty");
  const [scenario, setScenario] = useState("First Date");
  const [coachName, setCoachName] = useState("ConfiCoach");
  const [userName, setUserName] = useState("");

  const handleContinue = () => {
    const config = {
      experience: "Romance",
      tone,
      scenario,
      coachName: coachName.trim() || "ConfiCoach",
      userName: userName.trim() || "User",
    };

    localStorage.setItem("confiCoachConfig", JSON.stringify(config));
    localStorage.removeItem("confiCoachMessages");
    navigate("/chat");
  };

  return (
    <motion.div
      className="setup-page romance-setup-theme"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <div className="setup-card">
        <button className="back-button top-back-button" onClick={() => navigate("/")}>
          ← Back
        </button>

        <h1>Romance Setup</h1>
        <p className="setup-subtext">
          Build your romance coach and pick your vibe.
        </p>

        <div className="form-group">
  <label>
    <span className="label-icon">💖</span>
    Tone
  </label>
  <div className="option-grid">
    {["Flirty", "Bold", "Chill", "Hard to Get"].map((option) => (
      <button
        key={option}
        type="button"
        className={`option-card ${tone === option ? "selected" : ""}`}
        onClick={() => setTone(option)}
      >
        {option}
      </button>
    ))}
  </div>
</div>

        <div className="form-group">
  <label>
    <span className="label-icon">✨</span>
    Scenario
  </label>
  <select value={scenario} onChange={(e) => setScenario(e.target.value)}>
    <option value="First Date">First Date</option>
    <option value="First Approach">First Approach</option>
    <option value="Texting">Texting</option>
  </select>
</div>

        <div className="form-group">
          <label>
            <span className="label-icon">🤖</span>
            Name your Partner
          </label>
          <input
            type="text"
            placeholder="Enter a Partner name..."
            value={coachName}
            onChange={(e) => setCoachName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>
            <span className="label-icon">👤</span>
            What should your Partner call you?
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

export default RomanceSetupPage;