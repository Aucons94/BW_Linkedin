import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Col, Form, InputGroup, Row } from "react-bootstrap";
import {
  faBriefcase,
  faHome,
  faSearch,
  faUserFriends,
  faBell,
  faCommentDots,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setNavbarInfo } from "../redux/actions";
import ButtonLink from "./profilePage/utility/ButtonLink";
import { end } from "@popperjs/core";

function MyNavbar() {
  const { InfoProfilo } = useSelector((state) => state.info);
  console.log("InfoProfilo:", InfoProfilo);
  const dispatch = useDispatch();

  const getMyInfo = async () => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlNjI4MDYwMGJlMTAwMTgzYTg2YjUiLCJpYXQiOjE3MDU5MjczMTgsImV4cCI6MTcwNzEzNjkxOH0.pDglMvdYjnNomxK6G4zXcsal92m3qQmF2T7fIUx_lzA",
        },
      });
      let data = await response.json();
      console.log(data);
      dispatch(setNavbarInfo(data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMyInfo();
  }, []);

  return (
    <Navbar expand="lg" className="p-0 myNavbar" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="">
          <FontAwesomeIcon icon={faLinkedin} style={{ color: "#0A66C2" }} size="2xl" />
        </Navbar.Brand>
        <InputGroup>
          <InputGroup.Text>
            <FontAwesomeIcon icon={faSearch} />
          </InputGroup.Text>
          <Form.Control type="text" placeholder="Cerca" className="mr-sm-2" />
        </InputGroup>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="text-center py-0 px-3">
              <FontAwesomeIcon icon={faHome} />
              <p className="m-0">Home</p>
            </Nav.Link>
            <Nav.Link href="#rete" className="text-center py-0 px-3">
              <FontAwesomeIcon icon={faUserFriends} />
              <p className="m-0">Rete</p>
            </Nav.Link>
            <Nav.Link href="#lavoro" className="text-center py-0 px-3">
              <FontAwesomeIcon icon={faBriefcase} />
              <p className="m-0">Lavoro</p>
            </Nav.Link>
            <Nav.Link href="#messaggistica" className="text-center py-0 px-3">
              <FontAwesomeIcon icon={faCommentDots} />
              <p className="m-0">Messaggistica</p>
            </Nav.Link>
            <Nav.Link href="#link" className="text-center py-0 px-3">
              <FontAwesomeIcon icon={faBell} />
              <p className="m-0">Notifiche</p>
            </Nav.Link>
            <NavDropdown title="Tu" id="basic-nav-dropdown" align={end}>
              <div>
                <Row>
                  <Col xs={4}>
                    {InfoProfilo && (
                      <Link to="/profile/me">
                        <img
                          style={{
                            width: "25px",
                            height: "25px",
                          }}
                          src={InfoProfilo.image}
                          alt="kitten"
                        />
                      </Link>
                    )}
                  </Col>
                  <Col xs={8}></Col>
                </Row>

                <div className="text-center">
                  <ButtonLink variant="outline-primary">Visualizza il tuo profilo</ButtonLink>
                </div>
              </div>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">
                <h6>Account</h6>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Prova Premium per 0 EUR</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Impostazioni e privacy</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Guida</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">Lingua</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.7">
                <h6>Gestisci</h6>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.8">Post e attività</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.9">Account per la pubblicazione di offerte</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/4.0">Esci</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#lavoro" className="text-center py-0 px-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="gray"
                className="bi bi-grid-3x3-gap-fill"
                viewBox="0 0 16 16"
              >
                <path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z" />
              </svg>
              <p className="m-0" style={{ width: "100px" }}>
                Per le aziende <FontAwesomeIcon icon={faCaretDown} />
              </p>
            </Nav.Link>
            <div className="premium">
              <Link>Prova Premium per 0 EUR</Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
