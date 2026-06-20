# 🚀 AI Investment Research Agent

An AI-powered investment research platform that generates professional company analysis reports using Large Language Models (LLMs).

The application allows users to enter any company name and instantly receive:

- 📊 Investment Score
- ✅ Investment Recommendation
- 🏢 Company Overview
- 💪 Key Strengths
- ⚠️ Potential Risks
- 📝 AI-Generated Investment Thesis

---

## 🌐 Live Demo

🔗 https://ai-investment-agent-one.vercel.app

---

## 📸 Application Screenshots

### Home Page

![Home](./screenshots/img1.png)

### AI Generated Analysis

![Analysis](./screenshots/img2.png)

### Investment Report

![Report](./screenshots/img3.png)

---

## ✨ Features

### 🤖 AI-Powered Company Analysis
Uses a Large Language Model to generate detailed investment insights for any company.

### 📈 Investment Score Generation
Assigns a score between 0 and 100 based on business outlook, market position, growth potential, and risks.

### 💡 Smart Recommendation Engine
Provides a simple investment recommendation:

- INVEST
- PASS

### 💪 Strength Analysis
Identifies the strongest competitive advantages and growth drivers.

### ⚠️ Risk Assessment
Highlights major business, operational, market, and regulatory risks.

### 📝 Investment Thesis
Generates a concise investment rationale summarizing the overall investment outlook.

### ⚡ Real-Time Response
Fetches AI-generated insights dynamically through API integration.

---

## 🏗️ System Architecture

```text
User
  │
  ▼
React Frontend (Vercel)
  │
  ▼
Axios API Request
  │
  ▼
Node.js + Express Backend (Render)
  │
  ▼
AI Model (OpenRouter / LLM)
  │
  ▼
JSON Response
  │
  ▼
Investment Dashboard
```

---

## 🛠️ Tech Stack

### Frontend

- React.js
- Tailwind CSS
- Axios
- Vite

### Backend

- Node.js
- Express.js

### AI Integration

- OpenRouter AI
- Large Language Models (LLMs)

### Deployment

- Vercel (Frontend)
- Render (Backend)

### Development Tools

- Git
- GitHub
- VS Code
- Postman

---

## 📂 Project Structure

```text
AI-Investment-Agent
│
├── frontend
│   ├── src
│   ├── public
│   └── package.json
│
├── backend
│   ├── routes
│   ├── services
│   ├── server.js
│   └── package.json
│
├── screenshots
│   ├── img1.png
│   ├── img2.png
│   └── img3.png
│
└── README.md
```

---

## ⚙️ Installation & Setup

### Clone Repository

```bash
git clone https://github.com/VikashSingh81/AI-Investment-Agent.git
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### Backend Setup

```bash
cd backend
npm install
node server.js
```

---

## 🔐 Environment Variables

Create a `.env` file inside the backend folder.

```env
Geminin_API_KEY=YOUR_API_KEY
```

---

## 🧪 Sample Test Companies

Try analyzing:

- Tesla
- NVIDIA
- Microsoft
- Apple
- Amazon
- Reliance Industries
- TCS
- Infosys

---

## 🎯 Key Learning Outcomes

This project demonstrates:

- REST API Development
- Frontend–Backend Integration
- AI API Integration
- JSON Data Processing
- Prompt Engineering
- Full Stack Application Deployment
- Real-World Product Development

---

## 🚀 Future Enhancements

- Stock Market Data Integration
- Financial Statement Analysis
- Historical Trend Visualization
- Portfolio Recommendation Engine
- PDF Report Export
- LangChain / LangGraph Integration
- Multi-Agent Investment Research Workflow

---

## 👨‍💻 Author

### Vikash Kumar Singh

B.Tech Computer Science Engineering

GitHub:
https://github.com/VikashSingh81

---

## ⭐ Project Status

✅ Completed

✅ Fully Deployed

✅ Production Ready

✅ AI Integrated

✅ Assignment Submission Ready
