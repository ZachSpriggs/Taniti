import { Container, Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styles from "./Footer.module.scss";

type year = number;

const Footer = () => {
  const currYear: year = new Date().getFullYear();
  return (
    <Container>

    </Container>

  );
};

export default Footer;