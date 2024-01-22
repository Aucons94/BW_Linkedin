import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Col, Form, InputGroup, NavLink, Row } from "react-bootstrap";
import { faBriefcase, faHome, faSearch, faUserFriends, faBell, faCommentDots } from "@fortawesome/free-solid-svg-icons";

function MyNavbar() {
  return (
    <Navbar expand="lg" className="bg-white p-0">
      <Container>
        <Navbar.Brand href="https://as2.ftcdn.net/v2/jpg/03/96/56/19/1000_F_396561934_t1OwjMZHrVY211bHA5uUEAix0F1SyLci.jpg">
          <FontAwesomeIcon icon={faLinkedin} style={{ color: "#0A66C2" }} size="2xl" />
        </Navbar.Brand>
        <InputGroup>
          <InputGroup.Text>
            <FontAwesomeIcon icon={faSearch} />
          </InputGroup.Text>
          <Form.Control type="text" placeholder="Cerca" className=" mr-sm-2" />
        </InputGroup>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="text-center">
              <FontAwesomeIcon icon={faHome} />
              Home
            </Nav.Link>
            <Nav.Link href="#rete" className="text-center">
              <FontAwesomeIcon icon={faUserFriends} />
              Rete
            </Nav.Link>
            <Nav.Link href="#lavoro" className="text-center">
              <FontAwesomeIcon icon={faBriefcase} />
              Lavoro
            </Nav.Link>
            <Nav.Link href="#messaggistica" className="text-center">
              <FontAwesomeIcon icon={faCommentDots} />
              Messaggistica
            </Nav.Link>
            <Nav.Link href="#link" className="text-center">
              <FontAwesomeIcon icon={faBell} />
              Notifiche
            </Nav.Link>
            <NavDropdown title="Tu" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                <div>
                  <Row>
                    <Col xs={4}>
                      <img src="" alt="" />
                    </Col>
                    <Col xs={8}></Col>
                  </Row>
                  <NavLink id="visualizzaprofilo">
                    <span className="p-1">Visualizza il tuo profilo</span>
                  </NavLink>
                </div>
              </NavDropdown.Item>
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
