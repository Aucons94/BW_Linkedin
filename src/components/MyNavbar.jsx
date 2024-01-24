import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Col, Form, InputGroup, Offcanvas, Row } from "react-bootstrap";
import {
	faBriefcase,
	faHome,
	faSearch,
	faUserFriends,
	faBell,
	faCommentDots,
	faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setNavbarInfo } from "../redux/actions";
import ButtonLink from "./profilePage/utility/ButtonLink";
import { end } from "@popperjs/core";
import { token } from "../token";

function MyNavbar({ children }) {
	const InfoProfilo = useSelector((state) => state.profilo.info);
	console.log("InfoProfilo:", InfoProfilo);
	const dispatch = useDispatch();

	const getMyInfo = async () => {
		try {
			let response = await fetch(
				"https://striveschool-api.herokuapp.com/api/profile/me",
				{
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: token,
					},
				}
			);
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

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Navbar
				className="p-0 myNavbar flex-nowrap"
				bg="light"
				variant="light">
				<Container>
					<Link to={"/"}>
						<Navbar.Brand>
							<FontAwesomeIcon
								icon={faLinkedin}
								style={{ color: "#0A66C2" }}
								size="2xl"
							/>
						</Navbar.Brand>
					</Link>
					<InputGroup className="searchBar1">
						<InputGroup.Text>
							<FontAwesomeIcon icon={faSearch} />
						</InputGroup.Text>
						<Form.Control
							type="text"
							placeholder="Cerca"
							className="mr-sm-2 "
						/>
					</InputGroup>
					<InputGroup className="searchBar2">
						{showSearchBar ? (
							<>
								<InputGroup.Text>
									<FontAwesomeIcon
										icon={faSearch}
										onClick={handleSearchIconClick}
									/>
								</InputGroup.Text>
								<Form.Control
									type="text"
									placeholder="Cerca"
									className="mr-sm-2"
								/>
							</>
						) : (
							<div className="text-center">
								<FontAwesomeIcon
									icon={faSearch}
									onClick={handleSearchButtonClick}
									className="riposizionamento"
								/>
								<p className="m-0 cerca">Cerca</p>
							</div>
						)}
					</InputGroup>
					<Nav className="me-auto">
						<Nav.Link
							href="#home"
							className="text-center px-3 customNavLink">
							<FontAwesomeIcon icon={faHome} />
							<p className="m-0">Home</p>
						</Nav.Link>
						<Nav.Link
							href="/"
							className="text-center px-3 customNavLink">
							<FontAwesomeIcon icon={faUserFriends} />
							<p className="m-0">Rete</p>
						</Nav.Link>
						<Nav.Link
							href="/"
							className="text-center px-3 customNavLink">
							<FontAwesomeIcon icon={faBriefcase} />
							<p className="m-0">Lavoro</p>
						</Nav.Link>
						<Nav.Link
							href="/"
							className="text-center px-3 customNavLink terzaIconaVia">
							<FontAwesomeIcon icon={faCommentDots} />
							<p className="m-0">Messaggistica</p>
						</Nav.Link>
						<Nav.Link
							href="/"
							className="text-center px-3 customNavLink secondaIconaVia">
							<FontAwesomeIcon icon={faBell} />
							<p className="m-0">Notifiche</p>
						</Nav.Link>
						<div>
							<NavDropdown
								title="Tu"
								id="basic-nav-dropdown"
								align={end}
								className="primaIconaVia">
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
												{InfoProfilo.name}{" "}
												<span> </span>{" "}
												{InfoProfilo.surname}
											</h6>
											<p>{InfoProfilo.bio}placeholder</p>
										</Col>
									</Row>

									<div className="text-center">
										<ButtonLink variant="outline-primary">
											Visualizza il tuo profilo
										</ButtonLink>
									</div>
								</div>
								<NavDropdown.Divider />
								<NavDropdown.Item href="/">
									<h6>Account</h6>
								</NavDropdown.Item>
								<NavDropdown.Item href="/">
									Prova Premium per 0 EUR
								</NavDropdown.Item>
								<NavDropdown.Item href="/">
									Impostazioni e privacy
								</NavDropdown.Item>
								<NavDropdown.Item href="/">
									Guida
								</NavDropdown.Item>
								<NavDropdown.Item href="/">
									Lingua
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="/">
									<h6>Gestisci</h6>
								</NavDropdown.Item>
								<NavDropdown.Item href="/">
									Post e attività
								</NavDropdown.Item>
								<NavDropdown.Item href="/">
									Account per la pubblicazione di offerte
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="/">
									Esci
								</NavDropdown.Item>
							</NavDropdown>
						</div>
						<Nav.Link
							href="/"
							className="text-center p-0 dropScompare"
							onClick={handleShow}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								fill="gray"
								className="bi bi-grid-3x3-gap-fill riposizionamento"
								viewBox="0 0 16 16">
								<path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z" />
							</svg>
							<p className="m-0 perleaziende">
								Per le aziende{" "}
								<FontAwesomeIcon icon={faCaretDown} />
							</p>
						</Nav.Link>
						<div className="premium dropScompare">
							<Link className="d-flex flex-column align-items-center">
								Prova Premium <p className="m-0">per 0 EUR</p>
							</Link>
						</div>
						<NavDropdown
							title="..."
							id="basic-nav-dropdown"
							align={end}
							className="dropAppare">
							<div className="d-flex">
								<Nav.Link
									href="/"
									className="text-center px-3 customNavLink terzaIconaIn">
									<FontAwesomeIcon icon={faCommentDots} />
									<p className="m-0">Messaggistica</p>
								</Nav.Link>
								<Nav.Link
									href="/"
									className="text-center px-3 customNavLink secondaIconaIn">
									<FontAwesomeIcon icon={faBell} />
									<p className="m-0">Notifiche</p>
								</Nav.Link>
								<NavDropdown
									title="Tu"
									id="basic-nav-dropdown"
									align={end}
									className="primaIconaIn">
									<div>
										<Row className="mb-2">
											<Col xs={3}>
												{InfoProfilo && (
													<Link to="/profile/me">
														<img
															style={{
																width: "50px",
																height: "50px",
																marginLeft:
																	"20px",
																borderRadius:
																	"50%",
															}}
															src={
																InfoProfilo.image
															}
															alt=""
														/>
													</Link>
												)}
											</Col>
											<Col xs={9}>
												<h6>
													{InfoProfilo.name}{" "}
													<span> </span>{" "}
													{InfoProfilo.surname}
												</h6>
												<p>
													{InfoProfilo.bio}placeholder
												</p>
											</Col>
										</Row>

										<div className="text-center">
											<ButtonLink variant="outline-primary">
												Visualizza il tuo profilo
											</ButtonLink>
										</div>
									</div>
									<NavDropdown.Divider />
									<NavDropdown.Item href="/">
										<h6>Account</h6>
									</NavDropdown.Item>
									<NavDropdown.Item href="/">
										Prova Premium per 0 EUR
									</NavDropdown.Item>
									<NavDropdown.Item href="/">
										Impostazioni e privacy
									</NavDropdown.Item>
									<NavDropdown.Item href="/">
										Guida
									</NavDropdown.Item>
									<NavDropdown.Item href="/">
										Lingua
									</NavDropdown.Item>
									<NavDropdown.Divider />
									<NavDropdown.Item href="/">
										<h6>Gestisci</h6>
									</NavDropdown.Item>
									<NavDropdown.Item href="/">
										Post e attività
									</NavDropdown.Item>
									<NavDropdown.Item href="/">
										Account per la pubblicazione di offerte
									</NavDropdown.Item>
									<NavDropdown.Divider />
									<NavDropdown.Item href="/">
										Esci
									</NavDropdown.Item>
								</NavDropdown>
								<NavDropdown.Item
									href="/"
									className="pe-0"
									onClick={handleShow}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										fill="gray"
										className="bi bi-grid-3x3-gap-fill mt-1"
										viewBox="0 0 16 16">
										<path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z" />
									</svg>
								</NavDropdown.Item>
								<NavDropdown.Item href="/">
									<div className="premium2">
										<Link className="d-flex flex-column align-items-center">
											Prova Premium{" "}
											<p className="m-0">per 0 EUR</p>
										</Link>
									</div>
								</NavDropdown.Item>
							</div>
						</NavDropdown>
					</Nav>
				</Container>
			</Navbar>
			<Offcanvas show={show} onHide={handleClose}>
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>Offcanvas</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					Some text as placeholder. In real life you can have the
					elements you have chosen. Like, text, images, lists, etc.
				</Offcanvas.Body>
			</Offcanvas>
			{children}
		</>
	);
}

export default MyNavbar;
