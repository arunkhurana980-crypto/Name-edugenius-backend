const express = require("express");
const router = express.Router();

router.post("/ask", async (req, res) => {
  try {
    const { question } = req.body;

    if (!question) {
      return res.json({ answer: "Question missing" });
    }

    const q = question.toLowerCase();

    let subject = "General";
    let answer = "";

    // 🧠 SUBJECT DETECTION
    if (q.includes("force") || q.includes("newton") || q.includes("motion")) {
      subject = "Physics";
      answer = "Force = mass × acceleration. Newton laws explain motion of objects.";
    } 
    else if (q.includes("reaction") || q.includes("chemical") || q.includes("atom")) {
      subject = "Chemistry";
      answer = "Chemical reactions involve transformation of substances into new products.";
    } 
    else if (q.includes("math") || q.includes("equation") || q.includes("solve")) {
      subject = "Math";
      answer = "Math problems are solved step by step using formulas and logic.";
    } 
    else {
      answer = "I can help you in Physics, Chemistry, Math. Please ask a clear question.";
    }

    res.json({ subject, answer });

  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;