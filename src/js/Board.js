import { useEffect, useState } from "react";
import "../css/Board.css";
import {
  BlackBottomTile,
  BlackTopTile,
  WhiteBottomTile,
  WhiteTopTile,
} from "../helpers/SVGHolder";

function between(x, min, max) {
  return x >= min && x <= max;
}

function Board({ radius, centerCord, setCenterCord, range, setRange, maxRange, emptyTiles, setEmptyTiles }) {
  const [tiles, setTiles] = useState([]);
  const [boardSize, setBoardSize] = useState(0);
  const [boardRadius, setBoardRadius] = useState(0);

  useEffect(() => {
    let tempTiles = [];
    let tempEmptyTiles = emptyTiles;
    let tileIndex = 0;
    let rowIndex = 0;
    for (
      let i = centerCord.y - boardRadius;
      i <= centerCord.y + boardRadius;
      i++
    ) {
      /*Tiles need to be moved up slightly more for each row farther down it is*/
      //5 Radius - (-4.2 * rowIndex)
      let adjustPercent = -4.2 * rowIndex + "%";
      rowIndex++;
      for (
        let j = centerCord.x - boardRadius;
        j <= centerCord.x + boardRadius;
        j++
      ) {
        let color = (i ^ j) % 2 === 0 ? "white" : "black";
        
        /*if (
          (!between(i, range.minY, range.maxY) ||
            !between(j, range.minX, range.maxX))
        ) {
          if(Math.random() < 0.05)
            tempEmptyTiles.push(i + " " + j);
        }*/

        let extraTags = "";
        if(centerCord.x === j && centerCord.y === i){
          extraTags += " center"
        }

        if ((!between(j, maxRange.minX, maxRange.maxX) || !between(i, maxRange.minY, maxRange.maxY)) || tempEmptyTiles.includes(i + " " + j)) {
          tempTiles.push(
            <div
              key={"tile" + tileIndex}
              id={i + " " + j}
              className={"checkerTile empty"+extraTags}
              style={{ top: adjustPercent }}
            ></div>
          );
        } else {
          tempTiles.push(
            <div
              key={"tile" + tileIndex}
              id={i + " " + j}
              className={"checkerTile " + color+ extraTags}
              style={{ top: adjustPercent }}
            >
              {color === "white" ? <WhiteTopTile tilePos={i + " " + j}/> : <BlackTopTile tilePos={i + " " + j}/>}
              {color === "white" ? <WhiteBottomTile /> : <BlackBottomTile />}
            </div>
          );
        }

        tileIndex += 1;
      }
    }
    setTiles(tempTiles);
    setEmptyTiles(tempEmptyTiles);
  }, [boardRadius, centerCord]);

  useEffect(() => {
    //Set board size based on pixels
    let tempSize =
      (visualViewport.width < visualViewport.height
        ? visualViewport.width
        : visualViewport.height) * 0.85;
    setBoardSize(tempSize);
    //tempSize/2/tileSize
    setBoardRadius(radius);

    let foundStylesheet = document.getElementById("dynamicStylesheet");
    let boardDiameter = radius * 2 + 1;
    let tileMargin = (radius - 3) * 3;
    var styles =
      ":root{--board-size: " +
      boardDiameter * 50 +
      "px;--tile-margin: " +
      tileMargin +
      "px;}";
    if (foundStylesheet === null) {
      var styleSheet = document.createElement("style");
      styleSheet.innerText = styles;
      styleSheet.id = "dynamicStylesheet";
      document.head.appendChild(styleSheet);
    } else {
      foundStylesheet.innerText = styles;
    }
  }, [radius]);

  return <div id="Checkerboard" onClick={(e) => {e.preventDefault(); if(e.target.id.includes("tilePos") && e.target.id !== "tilePos "+centerCord.x + " " + centerCord.y){setCenterCord({x: parseInt(e.target.id.split(" ")[2]), y: parseInt(e.target.id.split(" ")[1])})}}}>{tiles}</div>;
}

export default Board;
