import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function ChatPage() {
  const navigate = useNavigate();

const [config, setConfig] = useState({
  experience: "Romance",
  tone: "Flirty",
  scenario: "First Date",
  coachName: "ConfiCoach",
  userName: "User",
});

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);

useEffect(() => {
  const savedConfig = localStorage.getItem("confiCoachConfig");
  const savedMessages = localStorage.getItem("confiCoachMessages");

  let parsedConfig = {
    experience: "Romance",
    tone: "Flirty",
    scenario: "First Date",
    coachName: "ConfiCoach",
    userName: "User",
  };

  if (savedConfig) {
    parsedConfig = JSON.parse(savedConfig);
    setConfig(parsedConfig);
  }

  if (savedMessages) {
    setMessages(JSON.parse(savedMessages));
  } else {
  let firstMessage = "";

  if (parsedConfig.experience === "Romance") {
    if (parsedConfig.scenario === "Texting") {
      firstMessage = `hey ${parsedConfig.userName}… it’s ${parsedConfig.coachName}. what are you opening with?`;
    } else if (parsedConfig.scenario === "First Approach") {
      firstMessage = `${parsedConfig.coachName} looks at you* alright ${parsedConfig.userName}… what are you saying to me?`;
    } else {
      firstMessage = `${parsedConfig.coachName} smiles* so ${parsedConfig.userName}… you’re on a date with me, what are you saying?`;
    }
  } else {
    firstMessage = `Hey ${parsedConfig.userName}, I’m ${parsedConfig.coachName}. We’re doing ${parsedConfig.scenario.toLowerCase()} mode.`;
  }

  setMessages([
    {
      role: "assistant",
      content: firstMessage,
    },
  ]);
}
}, []);

  useEffect(() => {
    localStorage.setItem("confiCoachMessages", JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleBack = () => {
    navigate("/");
  };

  const handleNewChat = () => {
    const freshMessages = [
      {
        role: "assistant",
        content: `Hey ${config.userName}, I’m ${config.coachName}. We’re doing ${config.scenario.toLowerCase()} mode with a ${config.tone.toLowerCase()} tone. Tell me what you want help with.`,
      },
    ];

    setMessages(freshMessages);
    localStorage.setItem("confiCoachMessages", JSON.stringify(freshMessages));
  };

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || loading) return;

    const userMessage = {
      role: "user",
      content: trimmed,
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:3000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: trimmed,
          history: updatedMessages,
          config,
        }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.reply || "No response received.",
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Something went wrong talking to the server.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };
const themeClass =
  config.experience === "Romance" ? "theme-flirty" : "theme-serious";
  
  return (
<motion.div
  className={`app ${themeClass}`}
  initial={{ opacity: 0, y: 16 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3 }}
>
      <div className="chat-shell">
        <div className="chat-header">
          <button className="back-button" onClick={handleBack}>
            ← Back
          </button>

          <div className="avatar">
            {config.coachName.charAt(0).toUpperCase()}
          </div>

          <div className="header-info">
            <h1>{config.coachName}</h1>
            <p>
              {config.tone} • {config.scenario}
            </p>
          </div>

          <button className="new-chat-button" onClick={handleNewChat}>
            New Chat
          </button>
        </div>

        <div className="chat-body">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message-row ${
                msg.role === "user" ? "user-row" : "assistant-row"
              }`}
            >
              <div
                className={`message-bubble ${
                  msg.role === "user" ? "user-bubble" : "assistant-bubble"
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}

          {loading && (
            <div className="message-row assistant-row">
              <div className="message-bubble assistant-bubble typing">
                Typing...
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        <div className="chat-input-area">
          <textarea
            className="chat-input"
            placeholder={`Message ${config.coachName}...`}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            rows={1}
          />
          <button className="send-button" onClick={sendMessage} disabled={loading}>
            Send
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default ChatPage;