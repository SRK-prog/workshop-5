import "./navbar.css";
import Logo from "./icons/netflix-logo.png";
import setIcon from "./icons/setIcon.png";
import userLogo from "./icons/user.png";

function Navbar() {
  return (
    <nav className="navbarContainer">
      <div className="logoWrap">
        <img className="navLogo" src={Logo} alt="Logo" />
      </div>
      <div className="linkWrap ">
        <ul className="navlinks display_none">
          <li className="navlink">Home</li>
          <li className="navlink">Movies</li>
          <li className="navlink">Tv shows</li>
        </ul>
      </div>
      <div className="userWrap">
        <img className="userLogo" src={setIcon} alt="Logo" />
        <img className="userLogo" src={userLogo} alt="Logo" />
      </div>
    </nav>
  );
}

export default Navbar;
