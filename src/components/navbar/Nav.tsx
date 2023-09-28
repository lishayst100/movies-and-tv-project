import { useRef } from "react";
import Logo from "./Logo";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import './MainNavbar.scss'
import { LINKS } from "./Links";

const Navbar: React.FC = () => {
  const navRef = useRef<HTMLDivElement>(null);

  const showNavbar = () => {
    if (navRef.current) {
      navRef.current.classList.toggle("responsive_nav");
    }
  };

  return (
    <header className="navbar-logo">
      <Logo />

      <nav className="links" ref={navRef}>
        {LINKS.map((v) => (
          <NavLink className={"link"} key={v.link} to={v.link} onClick={showNavbar}>
            {v.label}
          </NavLink>
        ))}
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
        <Logo />
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Navbar;
