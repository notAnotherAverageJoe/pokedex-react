// src/components/UserPrompt.js
import React, { useState } from "react";

const UserPrompt = ({ setName }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(inputValue);
  };

  return (
    <form onSubmit={handleSubmit} className="user-prompt">
      <label htmlFor="name">Enter your name trainer:</label>
      <input
        type="text"
        id="name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserPrompt;
