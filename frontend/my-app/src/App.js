const handleSubmit = async data => {
  setJsonData(data);
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/bfhl`,  // This should point to your backend
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );
    const result = await response.json();
    setResponse(result);
  } catch (error) {
    console.error("Error:", error);
    setResponse({ error: "Failed to fetch data from the API." });
  }
};
