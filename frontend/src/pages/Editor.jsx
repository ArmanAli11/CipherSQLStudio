import { useState } from "react";
import { executeQuery } from "../api/sqlApi";
import EditorMonaco from "@monaco-editor/react";

function Editor() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showHint, setShowHint] = useState(false);

  async function runQuery() {
    setLoading(true);
    setError(null);

    try {
      const data = await executeQuery(query);
      setResult(data);
    } catch (err) {
      setError("Failed to execute query");
      setResult(null);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="editor">
      <h2>SQL Editor</h2>

      {/* ✅ PROBLEM PANEL */}
      <div className="editor__panel">
        <div className="editor__panel-title">Problem</div>
        <p>
          Write a SQL query to fetch all users from the users table.
        </p>
      </div>

      {/* ✅ SAMPLE DATA */}
      <div className="editor__panel">
        <div className="editor__panel-title">Sample Data</div>
        <p><strong>Table:</strong> users</p>

        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Arman</td>
              <td>arman@gmail.com</td>
            </tr>
            <tr>
              <td>2</td>
              <td>John</td>
              <td>john@gmail.com</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ✅ HINT */}
      <div className="editor__panel">
        <button onClick={() => setShowHint(!showHint)}>
          {showHint ? "Hide Hint" : "Get Hint"}
        </button>

        {showHint && (
          <div className="editor__hint">
            <strong>Hint:</strong>
            <p>
              Think about which SQL keyword retrieves rows from a table.
            </p>
          </div>
        )}
      </div>

      {/* ✅ MONACO SQL EDITOR */}
      <div className="editor__panel">
        <EditorMonaco
          height="200px"
          defaultLanguage="sql"
          value={query}
          onChange={(value) => setQuery(value || "")}
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            wordWrap: "on",
            scrollBeyondLastLine: false,
          }}
        />

        <button onClick={runQuery} disabled={loading}>
          {loading ? "Running..." : "Run Query"}
        </button>
      </div>

      {/* ✅ ERROR */}
      {error && <p className="error">{error}</p>}

      {/* ✅ RESULT */}
      {result && (
        <div className="editor__panel">
          <div className="editor__panel-title">Result</div>

          <table>
            <thead>
              <tr>
                {result.columns.map((col) => (
                  <th key={col}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {result.rows.map((row, index) => (
                <tr key={index}>
                  {result.columns.map((col) => (
                    <td key={col}>{row[col]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          <p>Rows returned: {result.rowCount}</p>
        </div>
      )}
    </div>
  );
}

export default Editor;
