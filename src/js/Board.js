import { useEffect, useState } from "react";
import "../css/Board.css";
import {
  BlackBottomTile,
  BlackTopTile,
  WhiteBottomTile,
  WhiteTopTile,
} from "../helpers/SVGHolder";

function Board({ width, height }) {
  const [tiles, setTiles] = useState([]);
  useEffect(() => {
    let foundStylesheet = document.getElementById('dynamicStylesheet');
    var styles = ":root{--num-width: "+width+";--num-height: "+height+";--board-size: 85vmin;}";
    if(foundStylesheet === null){
      var styleSheet = document.createElement("style");
      styleSheet.innerText = styles;
      styleSheet.id="dynamicStylesheet";
      document.head.appendChild(styleSheet);
    } else {
      foundStylesheet.innerText = styles;
      console.log(foundStylesheet.innerText);
    }

    let tempTiles = [];
    for (let i = 0; i < height; i++) {
      let adjustPercent = -4 * i + "%";
      for (let j = 0; j < width; j++) {
        let index = i * width + j + i;
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
  }, [width, height]);
  return <div id="Checkerboard">{tiles}</div>;
}

/*
tiles.push(
        <div
          key={"tile" + index}
          id={"tile" + index}
          className={"checkerTile " + color}
        >
          {index % 2 === 0 ? (
            <div className="topTile">
              <WhiteTopTile/>
            </div>
          ) : (
            <div className="topTile">
              <BlackTopTile/>
            </div>
          )}
          {index % 2 === 0 ? (
            <div className="bottomTile">
              <WhiteBottomTile/>
            </div>
          ) : (
            <div className="bottomTile">
              <BlackBottomTile/>
            </div>
          )}
        </div>
      );
*/

export default Board;
