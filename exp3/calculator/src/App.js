import React, { useState } from "react";

// Basic buttons for a standard calculator
const buttons = [
  ["C", "←", "/", "*"],
  ["7", "8", "9", "-"],
  ["4", "5", "6", "+"],
  ["1", "2", "3", "="],
  ["0", ".", "", ""]
];

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (btn) => {
    switch (btn) {
      case "C":
        setInput("");
        setResult("");
        break;
      case "←":
        setInput(input.slice(0, -1));
        break;
      case "=":
        try {
          setResult(eval(input).toString());
        } catch {
          setResult("Error");
        }
        break;
      default:
        if (btn) setInput(input + btn);
        break;
    }
  };

  return (
    <div style={{ maxWidth: 320, margin: "40px auto", border: "1px solid #ccc", borderRadius: "12px", padding: "30px", background: "#f2f2f2" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Calculator</h1>
      <input
        type="text"
        value={input}
        readOnly
        style={{ width: "100%", fontSize: "24px", marginBottom: "8px", padding: "10px", borderRadius: "6px", border: "1px solid #aaa", textAlign: "right" }}
      />
      <input
        type="text"
        value={result}
        readOnly
        style={{ width: "100%", fontSize: "22px", marginBottom: "16px", background: "#e7f9ee", padding: "10px", borderRadius: "6px", border: "1px solid #aaa", textAlign: "right" }}
      />
      {buttons.map((row, i) => (
        <div key={i} style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px", marginBottom: "10px" }}>
          {row.map((btn, j) => (
            <button
              key={j}
              onClick={() => handleClick(btn)}
              style={{
                height: "40px",
                fontSize: "18px",
                background: btn === "=" ? "#a5d6a7" : btn === "C" ? "#ef5350" : "#bdbdbd",
                color: "#222",
                borderRadius: "8px",
                border: "none",
                cursor: btn ? "pointer" : "default",
                visibility: btn ? "visible" : "hidden"
              }}
            >
              {btn}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;