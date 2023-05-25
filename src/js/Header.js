import '../css/Header.css';
function Header({position}) {

  return (
    <div id="Header">
      <label>
        X: {position.x}  Y: {position.y}
      </label>
        <h1>The Lost Royal</h1>
    </div>
  );
}

export default Header;