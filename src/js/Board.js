import "../css/Board.css";
import {
  BlackBottomTile,
  BlackTopTile,
  WhiteBottomTile,
  WhiteTopTile,
} from "../helpers/SVGHolder";

function Board() {
  const height = 2;
  const width = 6;
  const tiles = [];
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      let index = i * width + j + i;
      let color = index % 2 === 0 ? "white" : "black";
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
    }
  }
  return <div id="Checkerboard">{tiles}</div>;
}

export default Board;