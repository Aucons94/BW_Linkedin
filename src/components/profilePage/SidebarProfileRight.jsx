import { icon } from "@fortawesome/fontawesome-svg-core";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPencil, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Col, Container, Row } from "react-bootstrap";

const SidebarProfileRight = () => {
	return (
		<Container className="mt-4 d-none d-md-block">
			<Row className="align-items-end flex-column">
				{/* alleggerire colore bordo */}
				<Col
					xs={12}
					className="bg-white rounded-3 border border-tertiary px-3">
					<div className="d-flex justify-content-between mt-3">
						<div>
							<span className="fw-bold">Lingua del profilo</span>
							<p className="fw-light mt-1 mb-0">Italiano</p>
						</div>
						<FontAwesomeIcon
							icon={faPencil}
							style={{ color: "#404040" }}
						/>
					</div>
					<hr className="my-3" />
					<div className="d-flex justify-content-between">
						<div>
							<span className="fw-bold">
								Public profile & URL
							</span>
							<p className="fw-light mt-1">
								inserire url profilo
							</p>
						</div>
						<FontAwesomeIcon
							icon={faPencil}
							style={{ color: "#404040" }}
						/>
					</div>
				</Col>
				<Col
					xs={12}
					className="bg-white rounded-3 border border-tertiary mt-3 px-0">
					<div className="my-3 px-4">
						<span className="fw-bold">
							Altri profili consultati
						</span>
					</div>
					<div className="d-flex px-4">
						<div className="me-2">
							<img
								src="https://picsum.photos/40"
								alt=""
								className="rounded-5"></img>
						</div>
						<div>
							<div>
								<span>Nome Cognome</span>
								<span>∙ 3°+</span>
							</div>
							<div>
								<span>Descrizione lavoro</span>
							</div>
							<div>
								<Button
									variant="secondary"
									className="bg-white text-secondary mt-2">
									<FontAwesomeIcon
										icon={faUserPlus}
										size="xs"
										className="me-1"
									/>
									Segui
								</Button>
							</div>
						</div>
					</div>
					<div className="hr px-4"></div>
					<hr className="px-4"></hr>
					<div className="d-flex mb-3 px-4">
						<div className="me-2">
							<img
								src="https://picsum.photos/40"
								alt=""
								className="rounded-5"></img>
						</div>
						<div>
							<div>
								<span>Nome Cognome</span>
								<span>∙ 3°+</span>
							</div>
							<div>
								<span>Descrizione lavoro</span>
							</div>
							<div>
								<Button
									variant="secondary"
									className="bg-white text-secondary mt-2">
									<FontAwesomeIcon
										icon={faUserPlus}
										size="xs"
										className="me-1"
									/>
									Segui
								</Button>
							</div>
						</div>
					</div>
					<div>
						<a
							href="/"
							className="text-secondary border-top text-decoration-none d-flex justify-content-center py-2">
							Mostra tutto
						</a>
					</div>
				</Col>
				<Col
					xs={12}
					className="bg-white rounded-3 border border-tertiary mt-3 px-4">
					<div className="my-3">
						<span className="fw-bold">
							Persone che potresti conoscere
						</span>
						<p className="fw-light lh-1">Dal tuo settore</p>
					</div>
					<div className="d-flex">
						<div className="me-2">
							<img
								src="https://picsum.photos/40"
								alt=""
								className="rounded-5"></img>
						</div>
						<div>
							<div>
								<span>Nome Cognome</span>
								<span>∙ 3°+</span>
							</div>
							<div>
								<span>Descrizione lavoro</span>
							</div>
							<div>
								<Button
									variant="secondary"
									className="bg-white text-secondary mt-2">
									<FontAwesomeIcon
										icon={faUserPlus}
										size="xs"
										className="me-1"
									/>
									Segui
								</Button>
							</div>
						</div>
					</div>
					<hr className="my-3" />
					<div className="d-flex mb-3">
						<div className="me-2">
							<img
								src="https://picsum.photos/40"
								alt=""
								className="rounded-5"></img>
						</div>
						<div>
							<div>
								<span>Nome Cognome</span>
								<span>∙ 3°+</span>
							</div>
							<div>
								<span>Descrizione lavoro</span>
							</div>
							<div>
								<Button
									variant="secondary"
									className="bg-white text-secondary mt-2">
									<FontAwesomeIcon
										icon={faUserPlus}
										size="xs"
										className="me-1"
									/>
									Segui
								</Button>
							</div>
						</div>
					</div>
					<div>
						<a
							href="/"
							className="text-secondary border-top text-decoration-none d-flex justify-content-center py-2">
							Mostra tutto
						</a>
					</div>
				</Col>
				<Col
					xs={12}
					className="bg-white rounded-3 border border-tertiary mt-3 px-0">
					<div className="px-3 mt-3">
						<FontAwesomeIcon
							icon={faLinkedin}
							style={{ color: "#0A66C2" }}
							className="me-2"
						/>
						<span>LEARNING</span>
					</div>
					<p className="px-3">
						Aggiungi nuove competenze con questi corsi, gratuiti per
						24 ore
					</p>
					<div className="d-flex px-3">
						<div className="me-2 position-relative">
							<img src="https://picsum.photos/100/60" alt="" />
							<FontAwesomeIcon
								icon="fa-duotone fa-circle-play"
								style={{
									"--fa-primary-color": "#ffffff",
									"--fa-secondary-color": "#000000",
								}}
								className="position-absolute top-0 left-0"
							/>
						</div>
						<div>
							<p className="fw-bold mb-0">
								Formazione essenziale su Javascript
							</p>
							<span>
								<small className="fw-light">
									1.397 visualizzazioni
								</small>
							</span>
						</div>
					</div>
					<div>
						<a
							href="/"
							className="text-secondary border-top text-decoration-none d-flex justify-content-center py-2">
							Visualizza i miei suggerimenti
						</a>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default SidebarProfileRight;
