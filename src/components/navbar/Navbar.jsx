import { useState, useEffect } from "react";
import "./navbar.css";
import Logo from "../../icons/netflix-logo.png";
import setIcon from "../../icons/setIcon.png";
import userLogo from "../../icons/user.png";

function Navbar() {
  const [navcolor, setNavcolor] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setNavcolor(true);
      } else setNavcolor(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <nav className={`navbarContainer ${navcolor && "nav-color"}`}>
      <div className="logoWrap">
        <img className="navLogo" src={Logo} alt="Logo" />
      </div>
      <div className="userWrap">
        <img className="userLogo" src={setIcon} alt="Logo" />
        <img className="userLogo" src={userLogo} alt="Logo" />
      </div>
    </nav>
  );
}

export default Navbar;
