const express = require("express");
const router = express.Router();

const analyzeCompany = require("../services/geminiService");

router.post("/", async (req, res) => {
  try {
    const { company } = req.body;

    const result = await analyzeCompany(company);

    res.json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.log(error.response?.data);
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
    
  }
});

module.exports = router;