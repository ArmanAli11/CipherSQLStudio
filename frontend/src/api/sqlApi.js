const API_URL = "http://localhost:5050/api/execute";

export async function executeQuery(query) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  if (!response.ok) {
    throw new Error("Query failed");
  }

  return response.json();
}
