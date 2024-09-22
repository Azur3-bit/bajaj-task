import React, { useState } from "react";
import JSONInput from "./components/JSONInput"; // Correct path
import ResponseDisplay from "./components/ResponseDisplay"; // Correct path
import "./App.css";

const App = () => {
  const [response, setResponse] = useState(null);

  const handleSubmit = async (data) => {
    try {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/bfhl`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      setResponse(result);
    } catch (error) {
      console.error("Error:", error);
      setResponse({ error: "Failed to fetch data from the API." });
    }
  };

  return (
    <div className="App">
      <h1>ABCD123</h1>
      <JSONInput onSubmit={handleSubmit} />
      <ResponseDisplay response={response} />
    </div>
  );
};

export default App;
