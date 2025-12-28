const express = require("express");
const fetch = require("node-fetch");

const router = express.Router();

router.post("/hint", async (req, res) => {
  const { question } = req.body;

  if (!question) {
    return res.status(400).json({ error: "Question is required" });
  }

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text:
                    "You are a SQL tutor. Give ONLY a conceptual hint. " +
                    "Do NOT provide SQL queries or full solutions.\n\nQuestion: " +
                    question,
                },
              ],
            },
          ],
        }),
      }
    );

    const data = await response.json();

    const hint =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Think about which SQL keyword is used to retrieve data from a table.";

    res.json({ hint });
  } catch (error) {
    console.error("GEMINI HTTP ERROR:", error);
    res.status(500).json({ error: "Failed to generate hint" });
  }
});

module.exports = router;
