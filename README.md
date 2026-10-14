An AI-powered interview platform that generates customized questions, evaluates user responses, and provides targeted performance feedback.GenAI
An interview preparation platform powered by generative AI that creates tailored interview scenarios, evaluates user responses, and delivers structured feedback.

Overview
This project helps candidates prepare for technical and behavioral interviews. It leverages large language models to assess a user target role, generate realistic interview questions, and evaluate candidate performance with targeted scoring and actionable insights.

Features
Role-based question generation: Generates targeted interview questions tailored to specific job profiles and technical domains.

AI response evaluation: Analyzes candidate answers for depth, clarity, and technical accuracy.

Performance feedback: Delivers detailed assessments highlighting strengths and areas for improvement.

Secure user authentication: Protects candidate profiles and session history using JWT authentication.

Tech Stack
Frontend
React

React Router

Axios

Vite

Backend
Node.js

Express.js

Google Gemini API

MongoDB with Mongoose

JSON Web Tokens

Getting Started
Prerequisites
Node.js installed locally

MongoDB Atlas account or local MongoDB instance

Google Gemini API key

Installation
Clone the repository:

Bash
git clone https://github.com/Mohd-Dilshan/GenAI.git
cd GenAI
Configure backend environment:

Bash
cd Backend
npm install
Create a .env file in the Backend directory:

Code snippet
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
GEMINI_API_KEY=your_gemini_api_key
Start the backend server:

Bash
node server.js
Configure frontend environment:

Bash
cd ../Frontend
npm install
npm run dev
The client application will start on http://localhost:5173 and communicate with the backend on http://localhost:3000.

Author
Mohd Dilshan

GitHub: @Mohd-Dilshan
