// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { useState } from "react";
import "./App.css";

function App() {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState("");

  const handleGeneration = async (userPrompt: string) => {
    console.log(userPrompt);

    const response = await fetch("http://localhost:8000/api/test/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });
    const data = await response.json();
    console.log(data.image_url);
  };

  return (
    <section className="w-full h-fit flex flex-col  p-6 rounded-lg justify-center items-center border-2 ">
      <div>
        {" "}
        <h1>
          DRIN<span className="text-blue-400">AI</span>
        </h1>
      </div>
      <div className="flex flex-col gap-8">
        <h2 className="font-semibold text-2xl">
          {" "}
          Write a prompt to generate an image with the Drin avatar
        </h2>
        <div className="flex flex-col gap-2">
          <label htmlFor="story" className="font-semibold text-lg">
            Enter your prompt:
          </label>
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
        </div>
        <button onClick={() => handleGeneration(prompt)} className="">
          Generate
        </button>
      </div>
      <div className="w-full flex flex-col justify-center items-center h-fit">
        <div className="mt-20 border-2 border-black w-[512px] h-[512px] ">
          <img src="" alt="" className="w-[512px] h-[512px]" />
        </div>
      </div>
    </section>
  );
}

export default App;
