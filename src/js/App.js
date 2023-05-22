import { Routes, Route } from "react-router-dom";
import Board from "../js/Board";
import { useState } from "react";

import "../css/App.css";
import Header from "./Header";

function App() {
  const [radius, setRadius] = useState(5);
  const [pos, setPos] = useState({x: 0, y: 0})
  const [maxRange, setMaxRange] = useState({minX: -25, maxX: 25, minY: -10, maxY: 10})
  const [knownRange, setKnownRange] = useState({minX: -4, maxX: 4, minY: -4, maxY: 4})
  const [emptyTiles, setEmptyTiles] = useState([]);

  return (
    <div className="App">
      <Header radius={radius} setRadius={setRadius}/>
      <div id="Content">
        <Routes>
          <Route index element={<Board radius={radius} centerCord={pos} setCenterCord={setPos} range={knownRange} setRange={setKnownRange} maxRange={maxRange} emptyTiles={emptyTiles} setEmptyTiles={setEmptyTiles}/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;