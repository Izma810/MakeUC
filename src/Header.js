import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <a href="#logo">RETAPE</a>
      </div>
      <nav className="header-list">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#artists">Artists</a>
        <a href="#albums">Albums</a>
      </nav>
    </div>
  );
}

export default Header;
