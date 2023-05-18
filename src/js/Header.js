import '../css/Header.css';
function Header({radius, setRadius}) {

  return (
    <div id="Header">
      <label>
        Tile Radius: {radius}
      </label>
      <div id="btnArea"><button id="upBtn" onClick={(e) => {e.preventDefault(); setRadius(radius-1)}}>▼</button><button id="downBtn" onClick={(e) => {e.preventDefault(); setRadius(radius+1)}}>▲</button></div>
        <h1>The Lost Royal</h1>
    </div>
  );
}

export default Header;