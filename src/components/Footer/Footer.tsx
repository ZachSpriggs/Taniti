import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from "./Footer.module.scss";

type year = number;

const Footer = () => {
  const currYear: year = new Date().getFullYear();
  return (
    <Container fluid className={`pt-3 px-3 pb-3 ${styles.footerBg}`}>
      <Container>
        <Row className="align-items-start">
          <Col xs={12} md={3} className="d-flex flex-column">
            <div className="d-flex flex-column">
              <p className="fw-bold mb-1">Explore Taniti</p>
              <NavLink to="/dining">Dining</NavLink>
              <NavLink to="/entertainment">Entertainment</NavLink>
              <NavLink to="/lodging">Lodging</NavLink>
              <NavLink to="/transportation">Transportation</NavLink>
            </div>
          </Col>
          <Col xs={12} md={3} className="d-flex flex-column">
            <p className="fw-bold mb-1">Additional Links</p>
            <NavLink to="/faq">FAQ</NavLink>
            <NavLink to="/contact" className="mb-3">
              Contact Us
            </NavLink>
          </Col>
          <Col xs={12} md={4} className="d-flex flex-column">
            <strong>
              &copy; {currYear} - Taniti | Welcome to Paradise
              <hr/>
            </strong>
            <strong>
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ZachSpriggs/">
                Zach Spriggs
                {' | '} 
                <small>Typescript, React, SCSS, Bootstrap</small>
              </a>
              <p><small>All images were downloaded from Unsplash for free</small></p>
            </strong>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Footer;