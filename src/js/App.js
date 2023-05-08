import { Routes, Route, Outlet } from "react-router-dom";
import Board from "../js/Board";
import { useState } from "react";

import "../css/App.css";
import Header from "./Header";

function App() {
  const [width, setWidth] = useState(6);
  const [height, setHeight] = useState(3);

  return (
    <div className="App">
      <Header width={width} setWidth={setWidth} height={height} setHeight={setHeight}/>
      <div id="Content">
        <Routes>
          <Route index element={<Board width={width} height={height}/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;