import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Card, Col, Form, InputGroup, NavLink, Offcanvas, Row } from "react-bootstrap";
import {
  faBriefcase,
  faHome,
  faSearch,
  faUserFriends,
  faBell,
  faCommentDots,
  faCaretDown,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setNavbarInfo } from "../redux/actions";
import ButtonLink from "./profilePage/utility/ButtonLink";
import { end } from "@popperjs/core";
import { token } from "../token";
import learningIMG from "../media/learning.png";

function MyNavbar({ children }) {
  const InfoProfilo = useSelector((state) => state.profilo.info);
  const dispatch = useDispatch();

  const getMyInfo = async () => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
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

  const [showSearchBar, setShowSearchBar] = useState(false);

  const handleSearchButtonClick = () => {
    setShowSearchBar(!showSearchBar);
  };
  const handleSearchIconClick = () => {
    setShowSearchBar(false);
  };

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    document.body.classList.remove("canvasOpen");
  };
  const handleShow = (event) => {
    event.preventDefault();
    setShow(true);
    document.body.classList.add("canvasOpen");
  };

  return (
    <>
      <Navbar className="p-0 myNavbar flex-nowrap border-bottom border-dark" bg="light" variant="light">
        <Container>
          <Link to={"/"}>
            <Navbar.Brand>
              <FontAwesomeIcon icon={faLinkedin} style={{ color: "#0A66C2" }} size="2xl" />
            </Navbar.Brand>
          </Link>
          <InputGroup className="searchBar1">
            <InputGroup.Text>
              <FontAwesomeIcon icon={faSearch} />
            </InputGroup.Text>
            <Form.Control type="text" placeholder="Cerca" className="mr-sm-2 " />
          </InputGroup>
          <InputGroup className="searchBar2">
            {showSearchBar ? (
              <>
                <InputGroup.Text>
                  <FontAwesomeIcon icon={faSearch} onClick={handleSearchIconClick} />
                </InputGroup.Text>
                <Form.Control type="text" placeholder="Cerca" className="mr-sm-2" />
              </>
            ) : (
              <Nav className="me-auto">
                <Nav.Link className="text-center px-3 customNavLink">
                  <FontAwesomeIcon icon={faSearch} onClick={handleSearchButtonClick} />
                  <p className="m-0 cerca">Cerca</p>
                </Nav.Link>
                <Nav.Link href="#home" className="text-center px-3 customNavLink">
                  <FontAwesomeIcon icon={faHome} />
                  <p className="m-0">Home</p>
                </Nav.Link>
                <Nav.Link href="/" className="text-center px-3 customNavLink">
                  <FontAwesomeIcon icon={faUserFriends} />
                  <p className="m-0">Rete</p>
                </Nav.Link>
                <Nav.Link href="/" className="text-center px-3 customNavLink">
                  <FontAwesomeIcon icon={faBriefcase} />
                  <p className="m-0">Lavoro</p>
                </Nav.Link>
                <Nav.Link href="/" className="text-center px-3 customNavLink terzaIconaVia">
                  <FontAwesomeIcon icon={faCommentDots} />
                  <p className="m-0">Messaggistica</p>
                </Nav.Link>
                <Nav.Link href="/" className="text-center px-3 customNavLink secondaIconaVia">
                  <FontAwesomeIcon icon={faBell} />
                  <p className="m-0">Notifiche</p>
                </Nav.Link>
                <div className="d-flex flex-column px-3 ">
                  {
                    <img
                      src={InfoProfilo.image}
                      alt=""
                      style={{ width: "25px", height: "25px", borderRadius: "50%", marginTop: "3px" }}
                    />
                  }
                  <NavDropdown title="Tu" id="basic-nav-dropdown" align={end} className="primaIconaVia">
                    <div>
                      <Row className="mb-2">
                        <Col xs={3}>
                          {InfoProfilo && (
                            <Link to="/profile/me">
                              <img
                                style={{
                                  width: "50px",
                                  height: "50px",
                                  marginLeft: "20px",
                                  borderRadius: "50%",
                                }}
                                src={InfoProfilo.image}
                                alt=""
                              />
                            </Link>
                          )}
                        </Col>
                        <Col xs={9}>
                          <h6>
                            {InfoProfilo.name} <span> </span> {InfoProfilo.surname}
                          </h6>
                          <p>{InfoProfilo.bio}placeholder</p>
                        </Col>
                      </Row>

                      <div className="text-center">
                        <ButtonLink to="/profile/me" variant="outline-primary">
                          Visualizza il tuo profilo
                        </ButtonLink>
                      </div>
                    </div>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/">
                      <h6>Account</h6>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/">Prova Premium per 0 EUR</NavDropdown.Item>
                    <NavDropdown.Item href="/">Impostazioni e privacy</NavDropdown.Item>
                    <NavDropdown.Item href="/">Guida</NavDropdown.Item>
                    <NavDropdown.Item href="/">Lingua</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/">
                      <h6>Gestisci</h6>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/">Post e attività</NavDropdown.Item>
                    <NavDropdown.Item href="/">Account per la pubblicazione di offerte</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/">Esci</NavDropdown.Item>
                  </NavDropdown>
                </div>
                <Nav.Link href="/" className="text-center p-0 dropScompare" onClick={handleShow}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="gray"
                    className="bi bi-grid-3x3-gap-fill riposizionamento"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z" />
                  </svg>
                  <p className="m-0 perleaziende">
                    Per le aziende <FontAwesomeIcon icon={faCaretDown} />
                  </p>
                </Nav.Link>
                <div className="premium dropScompare">
                  <Link className="d-flex flex-column align-items-center">
                    Prova Premium <p className="m-0">per 0 EUR</p>
                  </Link>
                </div>
                <NavDropdown title="..." id="basic-nav-dropdown" align={end} className="dropAppare">
                  <div className="d-flex">
                    <Nav.Link href="/" className="text-center px-3 customNavLink terzaIconaIn">
                      <FontAwesomeIcon icon={faCommentDots} />
                      <p className="m-0">Messaggistica</p>
                    </Nav.Link>
                    <Nav.Link href="/" className="text-center px-3 customNavLink secondaIconaIn">
                      <FontAwesomeIcon icon={faBell} />
                      <p className="m-0">Notifiche</p>
                    </Nav.Link>
                    <NavDropdown title="Tu" id="basic-nav-dropdown" align={end} className="primaIconaIn">
                      <div>
                        <Row className="mb-2">
                          <Col xs={3}>
                            {InfoProfilo && (
                              <Link to="/profile/me">
                                <img
                                  style={{
                                    width: "50px",
                                    height: "50px",
                                    marginLeft: "20px",
                                    borderRadius: "50%",
                                  }}
                                  src={InfoProfilo.image}
                                  alt=""
                                />
                              </Link>
                            )}
                          </Col>
                          <Col xs={9}>
                            <h6>
                              {InfoProfilo.name} <span> </span> {InfoProfilo.surname}
                            </h6>
                            <p>{InfoProfilo.bio}placeholder</p>
                          </Col>
                        </Row>

                        <div className="text-center">
                          <ButtonLink variant="outline-primary">Visualizza il tuo profilo</ButtonLink>
                        </div>
                      </div>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="/">
                        <h6>Account</h6>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/">Prova Premium per 0 EUR</NavDropdown.Item>
                      <NavDropdown.Item href="/">Impostazioni e privacy</NavDropdown.Item>
                      <NavDropdown.Item href="/">Guida</NavDropdown.Item>
                      <NavDropdown.Item href="/">Lingua</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="/">
                        <h6>Gestisci</h6>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/">Post e attività</NavDropdown.Item>
                      <NavDropdown.Item href="/">Account per la pubblicazione di offerte</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="/">Esci</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown.Item href="/" className="pe-0" onClick={handleShow}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="gray"
                        className="bi bi-grid-3x3-gap-fill mt-1"
                        viewBox="0 0 16 16"
                      >
                        <path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z" />
                      </svg>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/">
                      <div className="premium2">
                        <Link className="d-flex flex-column align-items-center">
                          Prova Premium <p className="m-0">per 0 EUR</p>
                        </Link>
                      </div>
                    </NavDropdown.Item>
                  </div>
                </NavDropdown>
              </Nav>
            )}
          </InputGroup>
          <Nav className="me-auto navBarlarga">
            <Nav.Link href="#home" className="text-center px-3 customNavLink">
              <FontAwesomeIcon icon={faHome} />
              <p className="m-0">Home</p>
            </Nav.Link>
            <Nav.Link href="/" className="text-center px-3 customNavLink">
              <FontAwesomeIcon icon={faUserFriends} />
              <p className="m-0">Rete</p>
            </Nav.Link>
            <Nav.Link href="/" className="text-center px-3 customNavLink">
              <FontAwesomeIcon icon={faBriefcase} />
              <p className="m-0">Lavoro</p>
            </Nav.Link>
            <Nav.Link href="/" className="text-center px-3 customNavLink terzaIconaVia">
              <FontAwesomeIcon icon={faCommentDots} />
              <p className="m-0">Messaggistica</p>
            </Nav.Link>
            <Nav.Link href="/" className="text-center px-3 customNavLink secondaIconaVia">
              <FontAwesomeIcon icon={faBell} />
              <p className="m-0">Notifiche</p>
            </Nav.Link>
            <div className="d-flex flex-column px-3 ">
              {
                <img
                  src={InfoProfilo.image}
                  alt=""
                  style={{ width: "25px", height: "25px", borderRadius: "50%", marginTop: "3px" }}
                />
              }
              <NavDropdown title="Tu" id="basic-nav-dropdown" align={end} className="primaIconaVia">
                <div>
                  <Row className="mb-2">
                    <Col xs={3}>
                      {InfoProfilo && (
                        <Link to="/profile/me">
                          <img
                            style={{
                              width: "50px",
                              height: "50px",
                              marginLeft: "20px",
                              borderRadius: "50%",
                            }}
                            src={InfoProfilo.image}
                            alt=""
                          />
                        </Link>
                      )}
                    </Col>
                    <Col xs={9}>
                      <h6>
                        {InfoProfilo.name} <span> </span> {InfoProfilo.surname}
                      </h6>
                      <p>{InfoProfilo.bio}placeholder</p>
                    </Col>
                  </Row>

                  <div className="text-center">
                    <ButtonLink to="/profile/me" variant="outline-primary">
                      Visualizza il tuo profilo
                    </ButtonLink>
                  </div>
                </div>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/">
                  <h6>Account</h6>
                </NavDropdown.Item>
                <NavDropdown.Item href="/">Prova Premium per 0 EUR</NavDropdown.Item>
                <NavDropdown.Item href="/">Impostazioni e privacy</NavDropdown.Item>
                <NavDropdown.Item href="/">Guida</NavDropdown.Item>
                <NavDropdown.Item href="/">Lingua</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/">
                  <h6>Gestisci</h6>
                </NavDropdown.Item>
                <NavDropdown.Item href="/">Post e attività</NavDropdown.Item>
                <NavDropdown.Item href="/">Account per la pubblicazione di offerte</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/">Esci</NavDropdown.Item>
              </NavDropdown>
            </div>
            <Nav.Link href="/" className="text-center p-0 dropScompare" onClick={handleShow}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="gray"
                className="bi bi-grid-3x3-gap-fill riposizionamento"
                viewBox="0 0 16 16"
              >
                <path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z" />
              </svg>
              <p className="m-0 perleaziende">
                Per le aziende <FontAwesomeIcon icon={faCaretDown} />
              </p>
            </Nav.Link>
            <div className="premium dropScompare">
              <Link className="d-flex flex-column align-items-center">
                Prova Premium <p className="m-0">per 0 EUR</p>
              </Link>
            </div>
            <NavDropdown title="..." id="basic-nav-dropdown" align={end} className="dropAppare">
              <div className="d-flex">
                <Nav.Link href="/" className="text-center px-3 customNavLink terzaIconaIn">
                  <FontAwesomeIcon icon={faCommentDots} />
                  <p className="m-0">Messaggistica</p>
                </Nav.Link>
                <Nav.Link href="/" className="text-center px-3 customNavLink secondaIconaIn">
                  <FontAwesomeIcon icon={faBell} />
                  <p className="m-0">Notifiche</p>
                </Nav.Link>
                <NavDropdown title="Tu" id="basic-nav-dropdown" align={end} className="primaIconaIn">
                  <div>
                    <Row className="mb-2">
                      <Col xs={3}>
                        {InfoProfilo && (
                          <Link to="/profile/me">
                            <img
                              style={{
                                width: "50px",
                                height: "50px",
                                marginLeft: "20px",
                                borderRadius: "50%",
                              }}
                              src={InfoProfilo.image}
                              alt=""
                            />
                          </Link>
                        )}
                      </Col>
                      <Col xs={9}>
                        <h6>
                          {InfoProfilo.name} <span> </span> {InfoProfilo.surname}
                        </h6>
                        <p>{InfoProfilo.bio}placeholder</p>
                      </Col>
                    </Row>

                    <div className="text-center">
                      <ButtonLink variant="outline-primary">Visualizza il tuo profilo</ButtonLink>
                    </div>
                  </div>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/">
                    <h6>Account</h6>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/">Prova Premium per 0 EUR</NavDropdown.Item>
                  <NavDropdown.Item href="/">Impostazioni e privacy</NavDropdown.Item>
                  <NavDropdown.Item href="/">Guida</NavDropdown.Item>
                  <NavDropdown.Item href="/">Lingua</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/">
                    <h6>Gestisci</h6>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/">Post e attività</NavDropdown.Item>
                  <NavDropdown.Item href="/">Account per la pubblicazione di offerte</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/">Esci</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown.Item href="/" className="pe-0" onClick={handleShow}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="gray"
                    className="bi bi-grid-3x3-gap-fill mt-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z" />
                  </svg>
                </NavDropdown.Item>
                <NavDropdown.Item href="/">
                  <div className="premium2">
                    <Link className="d-flex flex-column align-items-center">
                      Prova Premium <p className="m-0">per 0 EUR</p>
                    </Link>
                  </div>
                </NavDropdown.Item>
              </div>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
      <Offcanvas show={show} onHide={handleClose} placement="end" className="customCanvas">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Per le Aziende</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Container fluid className="bordoGrigio rounded-top-3">
            <h6>Scopri altri prodotti LinkedIn</h6>
          </Container>
          <Container fluid className="bordoGrigio pt-3 rounded-bottom-3">
            <Row>
              <Col xs={3}>
                <Card className="rounded-0 border-0 ">
                  <Card.Img variant="top" src={learningIMG} className="cardImage rounded-3" />
                  <Card.Body className="px-0 text-center pt-1">
                    <Card.Title className="fs-7 fw-light">
                      <Link className="sottolineato">Learning</Link>
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={3}>
                <Card className="rounded-0 border-0 ">
                  <Card.Img variant="top" src={learningIMG} className="cardImage rounded-3" />
                  <Card.Body className="px-0 text-center pt-1">
                    <Card.Title className="fs-7 fw-light">
                      <Link className="sottolineato">Talent Insights</Link>
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={3}>
                <Card className="rounded-0 border-0 ">
                  <Card.Img variant="top" src={learningIMG} className="cardImage rounded-3" />
                  <Card.Body className="px-0 text-center pt-1">
                    <Card.Title className="fs-7 fw-light">
                      <Link className="sottolineato">Pubblica un'offerta di lavoro</Link>
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={3}>
                <Card className="rounded-0 border-0 ">
                  <Card.Img variant="top" src={learningIMG} className="cardImage rounded-3" />
                  <Card.Body className="px-0 text-center pt-1">
                    <Card.Title className="fs-7 fw-light">
                      <Link className="sottolineato">Pubblicizza</Link>
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={3}>
                <Card className="rounded-0 border-0 ">
                  <Card.Img variant="top" src={learningIMG} className="cardImage rounded-3" />
                  <Card.Body className="px-0 text-center pt-1">
                    <Card.Title className="fs-7 fw-light">
                      <Link className="sottolineato">Trova Lead</Link>
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={3}>
                <Card className="rounded-0 border-0 ">
                  <Card.Img variant="top" src={learningIMG} className="cardImage rounded-3" />
                  <Card.Body className="px-0 text-center pt-1">
                    <Card.Title className="fs-7 fw-light">
                      <Link className="sottolineato">Gruppi</Link>
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={3}>
                <Card className="rounded-0 border-0 ">
                  <Card.Img variant="top" src={learningIMG} className="cardImage rounded-3" />
                  <Card.Body className="px-0 text-center pt-1">
                    <Card.Title className="fs-7 fw-light">
                      <Link className="sottolineato">Marketplace dei servizi</Link>
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
          <Container fluid className="bordoGrigio rounded-top-3">
            <h6>Scopri altri Prodotti per il Business</h6>
          </Container>
          <Container fluid className="bordoGrigio p-3">
            <Link>
              <p className=" fs-8 fw-light canvasBusiness">
                <span className="fs-7 fw-medium"> Assumi su LinkedIn</span> <br /> Trova, attrai e assumi
              </p>
            </Link>
            <Link>
              <p className=" fs-8 fw-light canvasBusiness">
                <span className="fs-7 fw-medium"> Vendi con LinkedIn</span> <br /> Sblocca nuove opportunità di vendita
              </p>
            </Link>
            <Link>
              <p className=" fs-8 fw-light canvasBusiness">
                <span className="fs-7 fw-medium"> Offerta di lavoro gratuita</span> <br /> Ottieni rapidamente candidati
                qualificati
              </p>
            </Link>
            <Link>
              <p className=" fs-8 fw-light canvasBusiness">
                <span className="fs-7 fw-medium"> Fai pubblicità su LinkedIn </span> <br /> Acquisisci clienti e fai
                crescere la tua azienda
              </p>
            </Link>
            <Link>
              <p className=" fs-8 fw-light canvasBusiness">
                <span className="fs-7 fw-medium"> Impara con LinkedIn</span> <br /> Corsi per formare i tuoi dipendenti
              </p>
            </Link>
            <Link>
              <p className=" fs-8 fw-light canvasBusiness">
                <span className="fs-7 fw-medium"> Centro amministrazione</span> <br /> Gestisci i dettagli di
                fatturazione e account
              </p>
            </Link>
          </Container>
          <Container fluid className="bordoGrigio p-3 rounded-bottom-3">
            <p className="fs-7 fw-medium canvasBusiness">
              Crea una pagina aziendale <FontAwesomeIcon className="fs-6 align-middle ps-1" icon={faPlus} />
            </p>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
      {children}
    </>
  );
}

export default MyNavbar;
