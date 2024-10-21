import Container from 'react-bootstrap/Container';
import { Nav, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const MainNav = () => {
  return (
    <Navbar expand="lg border-bottom">
      <Container className="align-items-start">
        <NavbarBrand>
          <NavLink to="/" className="navbar-brand">
            <h4 className="taniti-logo">Taniti</h4>
          </NavLink>
        </NavbarBrand>
        <NavbarToggle aria-controls="basic-navbar-nav" />
        <NavbarCollapse id="basic-navbar-nav" className="text-center">
          <Nav className="me-auto align-items-center">
            <NavLink to="/" className={({ isActive }) => (isActive ? "nav-isActive": "")}>
              Home
            </NavLink>
            <NavLink to="/dining" className={({ isActive }) => (isActive ? "nav-isActive": "")}>
              Dining
            </NavLink>
            <NavLink to="/entertainment" className={({ isActive }) => (isActive ? "nav-isActive": "")}>
              Entertainment
            </NavLink>
            <NavLink to="/lodging" className={({ isActive }) => (isActive ? "nav-isActive": "")}>
              Lodging
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "nav-isActive": "")}>
              About
            </NavLink>
          </Nav>
          <Button 
          variant="outline-success"
          className="mb-3"
          href="https:/www.tripadvisor.com"
          target="_blank"
          rel="noreferrer noopener"
          >
            Book Now
          </Button>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
};

export default MainNav;