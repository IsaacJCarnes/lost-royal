import { useEffect, useState } from "react";
import "../css/Board.css";
import {
  BlackBottomTile,
  BlackTopTile,
  WhiteBottomTile,
  WhiteTopTile,
} from "../helpers/SVGHolder";

function Board({ radius, centerCord,  }) {
  const [tiles, setTiles] = useState([]);
  const [boardSize, setBoardSize] = useState(0);
  const [boardRadius, setBoardRadius] = useState(0);

  useEffect(() => {
    let tempTiles = [];
    let tileIndex = 0;
    let rowIndex = 0;
    for (let i = (centerCord.y-boardRadius); i <= (centerCord.y+boardRadius); i++) {
      /*Tiles need to be moved up slightly more for each row farther down it is*/
      let adjustPercent = -4 * rowIndex + "%";
      rowIndex++;
      for (let j = (centerCord.x-boardRadius); j <= (centerCord.x+boardRadius); j++) {
        let color = (i^j) % 2 === 0 ? "white" : "black";
        tempTiles.push(
          <div
            key={"tile" + tileIndex}
            id={i + " " + j}
            className={"checkerTile " + color}
            style={{ top: adjustPercent }}
          >
            {color === "white" ? <WhiteTopTile /> : <BlackTopTile />}
            {color === "white" ? <WhiteBottomTile /> : <BlackBottomTile />}
          </div>
        );
        tileIndex += 1;
      }
    }
    setTiles(tempTiles);
  }, [boardRadius, centerCord]);

  useEffect(() => {
    //Set board size based on pixels
    let tempSize = (visualViewport.width < visualViewport.height ? visualViewport.width : visualViewport.height) *.85;
    setBoardSize(tempSize);
    //tempSize/2/tileSize
    setBoardRadius(radius);

    let foundStylesheet = document.getElementById('dynamicStylesheet');
    let boardDiameter = (radius*2+1);
    let tileMargin = (radius - 4) * 3;
    var styles = ":root{--board-size: "+(boardDiameter*50)+"px;--tile-margin: "+tileMargin+"px;}";
    if(foundStylesheet === null){
      var styleSheet = document.createElement("style");
      styleSheet.innerText = styles;
      styleSheet.id="dynamicStylesheet";
      document.head.appendChild(styleSheet);
    } else {
      foundStylesheet.innerText = styles;
    }
  }, [radius]);

  return <div id="Checkerboard">{tiles}</div>;
}

export default Board;
