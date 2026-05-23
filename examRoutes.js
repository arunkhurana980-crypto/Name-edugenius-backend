const express = require("express");
const router = express.Router();

router.post("/test", async (req, res) => {
  try {
    const { subject } = req.body;

    if (!subject) {
      return res.json({ error: "Subject missing" });
    }

    const questions = [
      `What is basic concept of ${subject}?`,
      `Explain important formula of ${subject}.`,
      `Write one real life example of ${subject}.`,
      `Why ${subject} is important?`,
      `Short note on ${subject}.`
    ];

    res.json({ questions });

  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;