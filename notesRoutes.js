const express = require("express");
const router = express.Router();

router.post("/generate", async (req, res) => {
  try {
    const { topic } = req.body;

    if (!topic) {
      return res.json({ notes: "Topic missing" });
    }

    const notes = `
📚 ${topic.toUpperCase()}

🧠 Concept:
${topic} ek important topic hai jo exams me aata hai.

📌 Key Points:
1. Basic understanding
2. Formula / definition
3. Application

📊 Example:
Real life me ${topic} ka use hota hai.

💡 Revision Tip:
Daily revise karo aur short notes banao.
`;

    res.json({ notes });

  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;