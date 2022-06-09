import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { StickyNav } from "react-js-stickynav";
import "react-js-stickynav/dist/index.css";
import Logo from "../img/telefonica-tech-logo.png";

const Header = () => (
  // <Container fluid>
  <StickyNav length="40">
    <Navbar
      collapseOnSelect
      expand="lg"
      className="top-nav nav scrollNav barra animate__animated animate__fadeIn animate__delay-0s px-5"
    >
      <Nav.Link as={Link} to="/">
        <Navbar.Brand>
          <Link to="/">
            <img src={Logo} className="nav-logo" />
          </Link>
        </Navbar.Brand>
      </Nav.Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto justify-content-end">
          <Nav.Link className="underline-link" as={Link} to="/table">
            Table
          </Nav.Link>
          <Nav.Link className="underline-link" as={Link} to="/charts">
            Charts
          </Nav.Link>
          <Nav.Link className="underline-link" as={Link} to="/analyze">
            Analyze player
          </Nav.Link>
          <Nav.Link className="underline-link" as={Link} to="/login">
            Login
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </StickyNav>
);

export default Header;
