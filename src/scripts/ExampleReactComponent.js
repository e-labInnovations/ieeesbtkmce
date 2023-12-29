import React, { useState } from "react";

function ExampleReactComponent() {
  const [clickCount, setClickCount] = useState(0);

  return (
    <div
      className="rounded-md bg-gradient-to-r from-blue-500 to-indigo-600 p-4 text-white"
      onClick={() => setClickCount((prev) => prev + 1)}
    >
      <h1 className="text-xl">Hello from React!</h1>
      <p className="text-sm">
        You have clicked on this component{" "}
        <span className="font-bold text-yellow-200">{clickCount}</span> times.
      </p>
    </div>
  );
}

export default ExampleReactComponent;
