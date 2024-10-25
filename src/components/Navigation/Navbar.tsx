import Container from 'react-bootstrap/Container';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './Navbar.scss';

const MainNav = () => {
  return (
    <Navbar expand="lg border-bottom">
      <Container className="align-items-center">
        <Navbar.Brand>
          <NavLink to="/" className="navbar-brand">
            <h4 className="taniti-logo">Taniti</h4>
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="text-center">
          <Nav className="me-auto align-items-center">
            <NavLink to="/" className={({ isActive }) => (isActive ? "nav-active": "")}>
              Home
            </NavLink>
            <NavLink to="/dining" className={({ isActive }) => (isActive ? "nav-active": "")}>
              Dining
            </NavLink>
            <NavLink to="/entertainment" className={({ isActive }) => (isActive ? "nav-active": "")}>
              Entertainment
            </NavLink>
            <NavLink to="/lodging" className={({ isActive }) => (isActive ? "nav-active": "")}>
              Lodging
            </NavLink>
            <NavLink to="/transportation" className={({ isActive }) => (isActive ? "nav-active": "")}>
              Transportation
            </NavLink>
            <NavLink to="/faq" className={({ isActive }) => (isActive ? "nav-active": "")}>
              FAQ
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "nav-active": "")}>
              Contact Us 
            </NavLink>
          </Nav>
          <Button 
          variant="btn btn-primary"
          className="mb-3"
          href="https:/www.tripadvisor.com"
          target="_blank"
          rel="noreferrer noopener"
          >
            Book Now
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNav;