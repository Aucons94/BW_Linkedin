import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Form, InputGroup } from "react-bootstrap";

function MyNavbar() {
  return (
    <Navbar expand="lg" className="bg-white p-0">
      <Container>
        <Navbar.Brand href="https://as2.ftcdn.net/v2/jpg/03/96/56/19/1000_F_396561934_t1OwjMZHrVY211bHA5uUEAix0F1SyLci.jpg">
          <FontAwesomeIcon icon={faLinkedin} style={{ color: "#0A66C2" }} size="2xl" />
        </Navbar.Brand>
        <InputGroup>
          <InputGroup.Text>
            <i class="bi bi-search text-primary"></i>
          </InputGroup.Text>
          <Form.Control type="text" placeholder="Cerca" className=" mr-sm-2" />
        </InputGroup>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
