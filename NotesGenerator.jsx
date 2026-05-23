import { useState } from "react";

function NotesGenerator({ onBack }) {
  const [topic, setTopic] = useState("");
  const [notes, setNotes] = useState("");

  const generateNotes = async () => {
    const res = await fetch("http://localhost:5000/api/notes/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ topic }),
    });

    const data = await res.json();
    setNotes(data.notes);
  };

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={onBack}>⬅ Back</button>

      <h2>📄 AI Notes Generator</h2>

      <input
        placeholder="Enter topic..."
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />

      <button onClick={generateNotes}>Generate</button>

      <pre style={{ whiteSpace: "pre-wrap", marginTop: "20px" }}>
        {notes}
      </pre>
    </div>
  );
}

export default NotesGenerator;