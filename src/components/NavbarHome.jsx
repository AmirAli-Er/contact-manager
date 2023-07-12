import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
const NavbarHome = ()=>{
    return(
        <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">مخاطب</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink to='/' style={({isActive})=>isActive?{color:'#D345', textDecoration:'none'}:null}>خانه</NavLink>
            <NavDropdown title="ارتباط با ما" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">ایمیل</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                تلگرام
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                صفحه ارتباط
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex ">
            <Form.Control
              type="search"
              placeholder="جست و جوی مخاطبین"
              className="me-2 display-1"
              aria-label="Search"
            />
            <Button className='btn-font' variant="outline-success">بجو</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}
export default NavbarHome