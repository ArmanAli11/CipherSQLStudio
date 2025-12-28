const express = require("express");
const router = express.Router();
const pool = require("../db/postgres");

router.post("/", async (req, res) => {
  console.log("🔥 /api/execute HIT");
  console.log("BODY:", req.body);

  const { query } = req.body;
  // 🔒 Allow only SELECT queries
const forbiddenKeywords = [
  "insert",
  "update",
  "delete",
  "drop",
  "alter",
  "truncate",
  "create"
];

const lowerQuery = query.toLowerCase();

for (let keyword of forbiddenKeywords) {
  if (lowerQuery.includes(keyword)) {
    return res.status(403).json({
      error: "Only SELECT queries are allowed"
    });
  }
}


  if (!query) {
    console.log("❌ No query received");
    return res.status(400).json({ error: "SQL query is required" });
  }

  try {
    const result = await pool.query(query);
    console.log("✅ Query executed");

    res.json({
      columns: result.fields.map(f => f.name),
      rows: result.rows,
      rowCount: result.rowCount,
    });
  } catch (err) {
    console.log("❌ SQL ERROR:", err.message);
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
