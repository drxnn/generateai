// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [prompt, setPrompt] = useState("");
  const [backendResponse, setBackendResponse] = useState("");

  const handleGeneration = (userPrompt) => {
    console.log(userPrompt);
    fetch("http://localhost:8000/api/test/")
      .then((response) => response.json())
      .then((data) => setBackendResponse(data))
      .catch((err) => console.log(err));

    console.log(backendResponse);
  };

  return (
    <section className="w-full h-fit flex flex-col border-2 p-6">
      <div>
        {" "}
        <h1>
          DRIN<span className="text-blue-400">AI</span>
        </h1>
      </div>
      <div className="flex flex-col gap-8">
        <h2 className="font-semibold text-2xl">
          {" "}
          Write your prompt to generate an ai image, provide as much detail as
          possible{" "}
        </h2>
        <label htmlFor="story">:</label>
        <span></span>
        <textarea
          className="border-2 py-6 px-3"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          id="story"
          name="story"
          rows={3}
          cols={33}
          placeholder="Write prompt here..."
        ></textarea>
        <button onClick={() => handleGeneration(prompt)}>Generate</button>
      </div>
      <div className="w-full flex flex-col justify-center items-center h-fit">
        <div className="mt-20 border-2 border-black w-[500px] h-[500px] "></div>
      </div>
    </section>
  );
}

export default App;
