import { useState } from "react";
import axios from "axios";

function App() {
  const [company, setCompany] = useState("");
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState(null);

  const handleAnalyze = async () => {
    try {
      setLoading(true);

      const response = await axios.post(
        "https://ai-investment-agent-knjb.onrender.com/api/analyze",
        {
          company,
        }
      );

      setReport(response.data.data);
    } catch (error) {
      console.log(error);
      alert("Analysis Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">
          AI Investment Research Agent
        </h1>

        {/* Search */}
        <div className="flex gap-4 mb-8">
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Enter Company Name"
            className="flex-1 p-3 rounded-lg bg-slate-800 border border-slate-700"
          />

          <button
            onClick={handleAnalyze}
            className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg"
          >
            {loading ? "Analyzing..." : "Analyze"}
          </button>
        </div>

        {/* Company Name */}

          {report && (
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 mb-6">
              <h2 className="text-3xl font-bold">
                {report.company}
              </h2>
            </div>
          )}


        {/* Score & Recommendation */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
            <h2 className="text-gray-400 mb-2">Investment Score</h2>

            <p className="text-5xl font-bold text-green-500">
              {report?.score || 0}
            </p>

            <div className="w-full bg-slate-700 rounded-full h-3 mt-4">
              <div
                className="bg-green-500 h-3 rounded-full"
                style={{
                  width: `${report?.score || 0}%`,
                }}
              ></div>
            </div>

            <p>/100</p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
            <h2 className="text-gray-400 mb-2">Recommendation</h2>

            <p className="text-4xl font-bold text-green-500">
              {report?.recommendation || "N/A"}
            </p>
          </div>
        </div>

        {/* Overview */}
        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            Company Overview
          </h2>

          <p className="text-gray-300">
            {report?.overview ||
              "Analyze a company to see its overview."}
          </p>
        </div>

        {/* Strengths */}
        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            Strengths
          </h2>

          <ul className="space-y-2">
            {report?.strengths?.map((item, index) => (
              <li key={index}>✅ {item}</li>
            ))}
          </ul>
        </div>

        {/* Risks */}
        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            Risks
          </h2>

          <ul className="space-y-2">
            {report?.risks?.map((item, index) => (
              <li key={index}>⚠ {item}</li>
            ))}
          </ul>
        </div>

        {/* Thesis */}
        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
          <h2 className="text-2xl font-semibold mb-4">
            Investment Thesis
          </h2>

          <p className="text-gray-300">
            {report?.thesis ||
              "Analyze a company to see the investment thesis."}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;