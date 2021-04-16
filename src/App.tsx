import React, { useState } from "react";
import "./App.css";

const App: React.FC = () => {
  const title: string = "Troll App";
  const [trollX, setTrollX] = useState<number>(0);
  const [trollY, setTrollY] = useState<number>(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    setTrollX((prev) => prev + e.movementX);
    setTrollY((prev) => prev + e.movementY);
  };

  return (
    <div className="App">
      <h1>{title}</h1>
      <div className="container">
        <div
          className="troll-container"
          onMouseMove={(e: React.MouseEvent) => handleMouseMove(e)}
          style={{ top: trollY, left: trollX }}
        >
          <div className="button">Click Me</div>
        </div>
      </div>
    </div>
  );
};

export default App;
