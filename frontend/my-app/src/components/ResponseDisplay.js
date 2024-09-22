import React from "react";

const ResponseDisplay = ({ response }) => {
  return (
    <div>
      <h2>Response:</h2>
      <pre>{JSON.stringify(response, null, 2)}</pre>
    </div>
  );
};

export default ResponseDisplay;
