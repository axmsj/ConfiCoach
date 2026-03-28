import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SetupPage() {
  const navigate = useNavigate();

  const [tone, setTone] = useState("Flirty");
  const [scenario, setScenario] = useState("First Date");
  const [coachName, setCoachName] = useState("ConfiCoach");
  const [userName, setUserName] = useState("");

  const handleContinue = () => {
    const config = {
      tone,
      scenario,
      coachName: coachName.trim() || "ConfiCoach",
      userName: userName.trim() || "User",
    };

    localStorage.setItem("confiCoachConfig", JSON.stringify(config));
    navigate("/chat");
  };

  return (
    <div className="setup-page">
      <div className="setup-card">
        <h1>Set Up Your ConfiCoach</h1>
        <p className="setup-subtext">
          Choose how your coach should act before you start chatting.
        </p>

        <div className="form-group">
          <label>Personality / Tone</label>
          <select value={tone} onChange={(e) => setTone(e.target.value)}>
            <option value="Flirty">Flirty</option>
            <option value="Serious">Serious</option>
          </select>
        </div>

        <div className="form-group">
          <label>Scenario</label>
          <select value={scenario} onChange={(e) => setScenario(e.target.value)}>
            <option value="First Date">First Date</option>
            <option value="Job Interview">Job Interview</option>
          </select>
        </div>

        <div className="form-group">
          <label>Name your ConfiCoach</label>
          <input
            type="text"
            placeholder="Enter a name..."
            value={coachName}
            onChange={(e) => setCoachName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>What should your coach call you?</label>
          <input
            type="text"
            placeholder="Enter your name..."
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <button className="continue-button" onClick={handleContinue}>
          Continue
        </button>
      </div>
    </div>
  );
}

export default SetupPage;