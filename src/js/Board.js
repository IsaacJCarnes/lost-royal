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
    let boardDiameter = (boardRadius*2+1);
    for (let i = 0; i < boardDiameter; i++) {
      let adjustPercent = -4 * i + "%";
      for (let j = 0; j < boardDiameter; j++) {
        let index = i * boardDiameter + j;
        let color = index % 2 === 0 ? "white" : "black";
        tempTiles.push(
          <div
            key={"tile" + index}
            id={"tile" + index}
            className={"checkerTile " + color}
            style={{ top: adjustPercent }}
          >
            {index % 2 === 0 ? <WhiteTopTile /> : <BlackTopTile />}
            {index % 2 === 0 ? <WhiteBottomTile /> : <BlackBottomTile />}
          </div>
        );
      }
    }
    setTiles(tempTiles);
  }, [boardRadius]);

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
