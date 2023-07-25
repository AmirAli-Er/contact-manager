import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';
import SearchNavbar from './SearchNavbar';
import { useContext } from 'react';
import ContactContext from '../context/ContactContext';
const NavbarHome = ()=>{
    const {setIsShowingBookmark} = useContext(ContactContext)
    return(
        <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">اپلیکیشن مدیریت مخاطبین</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link><Link to="/" style={{ textDecoration:'none' }}>خانه</Link></Nav.Link>
            
          </Nav>
          <SearchNavbar/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}
export default NavbarHome