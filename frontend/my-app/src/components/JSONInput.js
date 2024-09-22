import React, { useState } from "react";

const JSONInput = ({ onSubmit }) => {
  const [jsonInput, setJsonInput] = useState('');

  const handleSubmit = () => {
    try {
      const parsedInput = JSON.parse(jsonInput);
      onSubmit(parsedInput);
    } catch (error) {
      alert("Invalid JSON format");
    }
  };

  return (
    <div>
      <textarea
        value={jsonInput}
        onChange={(e) => setJsonInput(e.target.value)}
        placeholder='Enter JSON here'
        rows="10"
        cols="50"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default JSONInput;
