import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink, useNavigate } from "react-router-dom";
import './MainNavbar.scss'
import Logo from "./Logo";

function MainNavbar() {
  const nav =useNavigate()

  return (
    <>
      {["md"].map((expand) => (
        <Navbar key={expand} expand={expand} className="navbar-bgc">
          <Container fluid className="">
            <Navbar.Brand
              onClick={() => {
                nav("/");
              }}
            >
              <Logo />
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              className="text-light bg-light"
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton className="">
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <Logo />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="navbar-bgc">
                <Nav className="justify-content-end  ps-5 gap-4">
                  <NavLink className={"link"} to="/movies">
                    Movies
                  </NavLink>
                  <NavLink className={"link"} to="/tv">
                    TV
                  </NavLink>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default MainNavbar;
