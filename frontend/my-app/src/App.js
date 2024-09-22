
// // import React, { useState } from 'react';
// // import axios from 'axios';

// // function App() {
// //     const [jsonInput, setJsonInput] = useState('{"data": ["M", "1", "334", "4", "B", "Z", "a"], "file_b64": "BASE_64_STRING"}');
// //     const [responseData, setResponseData] = useState(null);
// //     const [error, setError] = useState('');

// //     const handleSubmit = async () => {
// //         try { 
// //             const parsedInput = JSON.parse(jsonInput);  
 
// //             if (!parsedInput.data || !Array.isArray(parsedInput.data)) {
// //                 throw new Error('Data must be an array.');
// //             }
// //             if (typeof parsedInput.file_b64 !== 'string') {
// //                 throw new Error('File_b64 must be a string.');
// //             }

// //             const response = await axios.post('https://bajaj-task-smoky-rho.vercel.app/bfhl', parsedInput);
// //             setResponseData(response.data);
// //             setError('');  
// //         } catch (err) {
// //             console.error('Error making API call:', err);
// //             setError('Invalid JSON input: ' + err.message);  
// //         }
// //     };

// //     return (
// //         <div>
// //             <h1>Your Roll Number</h1>
// //             <textarea 
// //                 value={jsonInput} 
// //                 onChange={(e) => setJsonInput(e.target.value)} 
// //                 placeholder='Enter JSON here' 
// //                 rows="10"
// //                 cols="50"
// //             />
// //             <button onClick={handleSubmit}>Submit</button>
// //             {error && <p style={{ color: 'red' }}>{error}</p>}
// //             {responseData && (
// //                 <div>
// //                     <h2>Response:</h2>
// //                     <pre>{JSON.stringify(responseData, null, 2)}</pre>
// //                 </div>
// //             )}
// //         </div>
// //     );
// // }

// // export default App;

// // src/components/App.js
// import React, { useState } from "react";
// import JSONInput from "./JSONInput";
// import ResponseDisplay from "./ResponseDisplay";
// import "./App.css";

// const App = () => {
//   const [jsonData, setJsonData] = useState(null);
//   const [response, setResponse] = useState(null);
//   const [selectedCategories, setSelectedCategories] = useState([]);

//   const handleSubmit = async data => {
//     setJsonData(data);
//     try {
//       const response = await fetch(
//         "https://bajaj-task-smoky-rho.vercel.app/bfhl",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(data),
//         }
//       );
//       const result = await response.json();
//       setResponse(result);
//     } catch (error) {
//       console.error("Error:", error);
//       setResponse({ error: "Failed to fetch data from the API." });
//     }
//   };

//   return (
//     <div className="App">
//       <h1>ABCD123</h1>
//       <JSONInput onSubmit={handleSubmit} />
//       <ResponseDisplay
//         response={response}
//         selectedCategories={selectedCategories}
//         setSelectedCategories={setSelectedCategories}
//       />
//     </div>
//   );
// };

// export default App;



const handleSubmit = async data => {
  setJsonData(data);
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/bfhl`,  // Updated to use the environment variable
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

