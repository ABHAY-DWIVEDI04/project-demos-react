import React, { useState } from "react";
import "../ToggleBackgroundColorstyles.css";

const ToggleBackgroundColor = () => {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [textColor, setTextColor] = useState("#1b1b1b");
  const [buttonStyle, setButtonStyle] = useState("white");

  const handleClick = () => {
    setBackgroundColor(backgroundColor === "white" ? "#1b1b1b" : "white");
    setTextColor(textColor === "#1b1b1b" ? "#ffa31a" : "#1b1b1b");
    setButtonStyle(buttonStyle === "white" ? "#1b1b1b" : "white");
  };

  return (
    <div style={{ backgroundColor, color: textColor, height: "100vh" }}>
      <button
        onClick={handleClick}
        style={{
          backgroundColor: buttonStyle, // ✅ Correct
          color: textColor,
          border: `2px solid ${textColor}`,
        }}
      >
        {backgroundColor === "#1b1b1b" ? "White Mode" : "Dark Mode"}
      </button>

      <section className="content">
        <h1>
          Welcome To A <br />
          Real World...
        </h1>
      </section>
    </div>
  );
};

export default ToggleBackgroundColor;
