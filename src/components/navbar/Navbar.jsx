import { useState, useEffect } from "react";
import "./navbar.css";

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
        <img className="navLogo" src="/icons/netflix-logo.png" alt="Logo" />
      </div>
      <div className="userWrap">
        <img className="userLogo" src="/icons/setIcon.png" alt="Logo" />
        <img className="userLogo" src="/icons/user.png" alt="Logo" />
      </div>
    </nav>
  );
}

export default Navbar;
