import { Routes, Route } from "react-router-dom";
import Board from "../js/Board";
import { useState } from "react";

import "../css/App.css";
import Header from "./Header";

function App() {
  const [radius, setRadius] = useState(3);
  const [pos, setPos] = useState({x: 0, y: 0})

  return (
    <div className="App">
      <Header radius={radius} setRadius={setRadius}/>
      <div id="Content">
        <Routes>
          <Route index element={<Board radius={radius} centerCord={pos}/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;