import '../css/Header.css';
function Header({width, setWidth, height, setHeight}) {

  return (
    <div id="Header">
      <label>
        Width: 
      <input type="number" value={width} onChange={(e) => {e.preventDefault(); if(true){setWidth(e.target.value)}}}/>
      </label>
      <label>
        Height:
      <input type="number" value={height} onChange={(e) => {e.preventDefault(); if(true){setHeight(e.target.value)}}}/>
      </label>
        <h1>The Lost Royal</h1>
    </div>
  );
}

export default Header;