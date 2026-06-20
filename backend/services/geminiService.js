const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY
);

async function analyzeCompany(company) {
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
  });

  const prompt = `
You are a professional investment analyst.

Analyze ${company}.

Provide:

1. Company Overview
2. Investment Score (0-100)
3. Recommendation (INVEST or PASS)
4. Top 3 Strengths
5. Top 3 Risks
6. Investment Thesis

Return ONLY valid JSON:

{
  "company": "",
  "overview": "",
  "score": 0,
  "recommendation": "",
  "strengths": [],
  "risks": [],
  "thesis": ""
}
`;

  const result = await model.generateContent(prompt);

  const text = result.response.text();

const cleaned = text
  .replace(/```json/g, "")
  .replace(/```/g, "")
  .trim();

return JSON.parse(cleaned);
}

module.exports = analyzeCompany;