 # ConfiCoach

  ConfiCoach is your personal AI that can help you build **CONFI**dence. Practice real
  conversations, sharpen your social skills, and show up ready.

  ---

  ## Preview

  <img width="600" height="979" alt="Screenshot 2026-03-29 at 12 59 21 AM" src="https://github.com/user-attachments/assets/eb9dfd0a-0054-40b9-832d-2d94f2ac8141" />
  <img width="600 height="979" alt="Screenshot 2026-03-29 at 1 02 09 AM" src="https://github.com/user-attachments/assets/877b6fa2-4883-428b-ace4-b6ef932c9697" />
  <img width="600" height="981" alt="Screenshot 2026-03-29 at 1 04 40 AM" src="https://github.com/user-attachments/assets/145a9f85-1129-403c-b77c-6fbe542ee4e3" />
  <img width="600" height="981" alt="Screenshot 2026-03-29 at 1 09 19 AM" src="https://github.com/user-attachments/assets/9e26fb03-a87b-4dbc-973a-1bd3b17c3892" />

  ---

  ## Features

  ### Romance Mode
  Practice social and dating conversations with an AI that stays fully in character.

  - **Tones:** Flirty, Bold, Chill, Hard to Get
  - **Scenarios:** First Date, First Approach, Texting
  - The AI responds based on the quality of your messages — smooth and confident gets
  better energy back

  ### Interview Mode
  Simulate real interviews with an AI interviewer that adapts to the difficulty you
  choose.

  - **Tones:** Friendly, Encouraging, Serious, Strict
  - **Scenarios:** Technical Interview, Behavioral Interview
  - Technical interviews focus on problem solving and system design
  - Behavioral interviews use the STAR framework

  ---

  ## Tech Stack

  - **Frontend:** React, React Router, Framer Motion
  - **Backend:** Node.js, Express
  - **AI:** OpenAI API

  ---

  ## Getting Started

  ### Prerequisites
  - Node.js installed
  - An OpenAI API key

  ### Installation

  1. Clone the repository
     git clone https://github.com/your-username/ConfiCoach.git
     cd ConfiCoach
  2. Install backend dependencies
     npm install
  3. Install frontend dependencies
     cd client
     npm install
     cd ..
  4. Create a `.env` file in the root directory
     OPENAI_API_KEY=your_api_key_here

  ### Running the App

  Start the backend:
  npm start
  In a separate terminal, start the frontend:
  cd client
  npm start

  ---

  ## Routes

  | Route | Description |
  |---|---|
  | `/` | Home page |
  | `/models` | Choose a mode (Romance or Interview) |
  | `/romance-setup` | Configure your romance session |
  | `/interview-setup` | Configure your interview session |
  | `/chat` | Active chat session |
