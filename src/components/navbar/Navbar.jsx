import "./navbar.css";
import Logo from "./netflix-logo.png";
import userLogo from "./user.png";

function Navbar() {
  return (
    <nav className="navbarContainer">
      <div className="logoWrap">
        <img className="navLogo" src={Logo} alt="Logo" />
      </div>
      <div className="linkWrap">
        <ul className="navlinks">
          <li className="navlink">Home</li>
          <li className="navlink">Movies</li>
          <li className="navlink">Tv shows</li>
        </ul>
      </div>
      <div className="userWrap">
        <img className="userLogo" src={userLogo} alt="Logo" />
      </div>
    </nav>
  );
}

export default Navbar;
