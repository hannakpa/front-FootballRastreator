import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsTwitter, BsFacebook } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import Adidas from "../img/sponsors/adidas.jpg";
import Dipu from "../img/sponsors/DIBA-logo.jpg";
import FreePik from "../img/sponsors/freepik.png";
import Damm from "../img/sponsors/Logo-Damm.png";
import TalentPoint from "../img/sponsors/talentPoint.png";
import Werfen from "../img/sponsors/werfen.jpg";

const Footer = () => (
  // <Container fluid>
  <footer className="footer">
    {/* row 1 */}
    <Row>
      {/* Columna de patrocinadores */}
      <Col md="8">
        <Row>
          <p className="title-sponsors">Patrocinado por</p>
          <div className="logos-box">
            <img src={Adidas} />
            <img src={Dipu} />
            <img src={FreePik} />
            <img src={Damm} />
            <img src={TalentPoint} />
            <img src={Werfen} />
          </div>
        </Row>
      </Col>
      {/* Columna derecha con links */}
      <Col md="4">
        <Link to="/">
          <GrInstagram />
        </Link>
        <Link to="/">
          <BsTwitter />
        </Link>
        <Link to="/">
          <BsFacebook />
        </Link>
      </Col>
    </Row>
    {/* row 2 */}
    <Row className="bottom-row-footer ">
      <Col>
        <p className="underline-link">Política de cookies</p>
      </Col>
      <Col>
        <p className="underline-link">Aviso legal</p>
      </Col>
      <Col>
        <p className="underline-link">Accesibilidad</p>
      </Col>
      <Col>
        <p className="underline-link">Copyright©2022</p>
      </Col>
    </Row>
  </footer>
);

export default Footer;
