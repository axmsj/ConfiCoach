require("dotenv").config();
const express = require("express");
const cors = require("cors");
const OpenAI = require("openai").default;

const app = express();

app.use(cors());
app.use(express.json());

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// simple test route
app.get("/", (req, res) => {
  res.send("Server is running");
});

// chat route
app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

const response = await client.responses.create({
  model: "gpt-5.4-mini",
  instructions: `
You are a romantic AI companion texting the user.

Style:
- playful
- confident
- a little flirty
- emotionally expressive
- texting style, never formal

Rules:
- replies should usually be 1 short sentence, sometimes 2
- never sound like customer support
- never say "How can I help you?"
- act like a real person, not an AI
`,
  input: message,
});

    res.json({
      reply: response.output[0].content[0].text
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error talking to AI" });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});