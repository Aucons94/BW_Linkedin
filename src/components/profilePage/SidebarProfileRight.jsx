import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPencil, faPlus, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import pic1 from "../../media/Immagine1.png";
import pic2 from "../../media/Immagine2.png";
import pic3 from "../../media/Immagine3.png";
import { useDispatch, useSelector } from "react-redux";
import { setProfili } from "../../redux/actions";

const SidebarProfileRight = () => {
	/* const [profile, setProfile] = useState([]); */

	const profiles = useSelector((state) => state.multiProfili.profili);

	const dispatch = useDispatch();

	const getProfili = async () => {
		try {
			let response = await fetch("https://striveschool-api.herokuapp.com/api/profile/", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization:
						"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlNjI4MDYwMGJlMTAwMTgzYTg2YjUiLCJpYXQiOjE3MDU5MjczMTgsImV4cCI6MTcwNzEzNjkxOH0.pDglMvdYjnNomxK6G4zXcsal92m3qQmF2T7fIUx_lzA",
				},
			});
			let data = await response.json();
			dispatch(setProfili(data));
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getProfili();
	}, []);

	console.log("profile", profiles);

	return (
		<Container className="mt-4 d-none d-md-block">
			<Row className="align-items-end flex-column">
				<Col xs={12} className="bg-white rounded-3 border border-tertiary px-3">
					<div className="d-flex justify-content-between mt-3">
						<div>
							<span className="fw-bold">Lingua del profilo</span>
							<p className="fw-light mt-1 mb-0">Italiano</p>
						</div>
						<FontAwesomeIcon icon={faPencil} style={{ color: "#404040", cursor: "pointer" }} />
					</div>
					<hr className="my-3" />
					<div className="d-flex justify-content-between">
						<div>
							<span className="fw-bold">Public profile & URL</span>
							<p className="fw-light mt-1">inserire url profilo</p>
						</div>
						<FontAwesomeIcon icon={faPencil} style={{ color: "#404040", cursor: "pointer" }} />
					</div>
				</Col>
				<Col xs={12} className="bg-white rounded-3 border border-tertiary mt-3 px-0">
					<div className="mt-3 px-3">
						<span className="fw-bold">Altri profili consultati</span>
					</div>
					{profiles
						.filter((params, index) => index < 5)
						.map((profilo) => (
							<div className="d-flex px-4 border-bottom" key={profilo._id}>
								<div className="me-2 mt-3">
									<img
										src={profilo.image}
										alt=""
										className="rounded-5"
										width={50}
										height={50}
										style={{ cursor: "pointer" }}></img>
								</div>
								<div className="mt-3">
									<div>
										<span style={{ cursor: "pointer" }} className="nomeProfilo">
											{profilo.name} {profilo.surname}
										</span>
										{profilo.name.length + profilo.surname.length > 13 && <br />}
										<span className="fw-light"> ∙ 3°+</span>
									</div>
									<div>
										<span style={{ cursor: "pointer" }}>{profilo.title}</span>
									</div>
									<div>
										<Button variant="outline-secondary" className="buttonHover my-3">
											<FontAwesomeIcon icon={faPlus} className="me-1" />
											Segui
										</Button>
									</div>
								</div>
							</div>
						))}
					{/* <div className="d-flex mb-3 px-4">
						<div className="me-2">
							<img src="https://picsum.photos/40" alt="" className="rounded-5"></img>
						</div>
						<div>
							<div>
								<span>Nome Cognome</span>
								<span> ∙ 3°+</span>
							</div>
							<div>
								<span>Descrizione lavoro</span>
							</div>
							<div>
								<Button variant="outline-secondary" className=" buttonHover mt-2">
									<FontAwesomeIcon icon={faUserPlus} size="xs" className="me-1" />
									Collegati
								</Button>
							</div>
						</div>
					</div> */}
					<div>
						<a
							href="/"
							className="text-secondary border-top text-decoration-none d-flex justify-content-center mostraTutto py-2">
							Mostra tutto
						</a>
					</div>
				</Col>
				<Col xs={12} className="bg-white rounded-3 border border-tertiary mt-3 px-0">
					<div className="my-3 px-3">
						<span className="fw-bold">Persone che potresti conoscere</span>
						<p className="fw-light lh-1">Dal tuo settore</p>
					</div>
					{profiles
						.filter((params, index) => index < 5)
						.map((profilo) => (
							<div className="d-flex px-4 border-bottom" key={profilo._id}>
								<div className="me-2 mt-3">
									<img
										src={profilo.image}
										alt=""
										className="rounded-5"
										width={50}
										height={50}
										style={{ cursor: "pointer" }}></img>
								</div>
								<div className="mt-3">
									<div>
										<span style={{ cursor: "pointer" }} className="nomeProfilo">
											{profilo.name} {profilo.surname}
										</span>
									</div>
									<div>
										<span style={{ cursor: "pointer" }}>{profilo.title}</span>
									</div>
									<div>
										<Button variant="outline-secondary" className="buttonHover my-3">
											<FontAwesomeIcon icon={faUserPlus} size="xs" className="me-1" />
											Collegati
										</Button>
									</div>
								</div>
							</div>
						))}

					{/* <div className="d-flex mb-3">
						<div className="me-2">
							<img src="https://picsum.photos/40" alt="" className="rounded-5"></img>
						</div>
						<div>
							<div>
								<span>Nome Cognome</span>
								<span> ∙ 3°+</span>
							</div>
							<div>
								<span>Descrizione lavoro</span>
							</div>
							<div>
								<Button variant="outline-secondary" className="buttonHover mt-2">
									<FontAwesomeIcon icon={faUserPlus} size="xs" className="me-1" />
									Collegati
								</Button>
							</div>
						</div>
					</div> */}
					<div>
						<a
							href="/"
							className="text-secondary border-top text-decoration-none d-flex justify-content-center mostraTutto py-2">
							Mostra tutto
						</a>
					</div>
				</Col>
				<Col xs={12} className="bg-white rounded-3 border border-tertiary mt-3 px-0">
					<div className="px-3 mt-3">
						<FontAwesomeIcon icon={faLinkedin} style={{ color: "#0A66C2" }} className="me-2" />
						<span>LEARNING</span>
					</div>
					<p className="px-3 mt-2">Aggiungi nuove competenze con questi corsi, gratuiti per 24 ore</p>
					<div className="d-flex px-3 mb-2">
						<div className="me-2 position-relative">
							<img src={pic1} width={100} height={60} alt="" style={{ cursor: "pointer" }} />
						</div>
						<div>
							<p className="fw-bold mb-0 videoTitle">Condurre con le storie</p>
							<span>
								<small className="fw-light">1.256 visualizzazioni</small>
							</span>
						</div>
					</div>
					<div className="d-flex px-3 mb-2">
						<div className="me-2 position-relative">
							<img src={pic2} width={100} height={60} alt="" style={{ cursor: "pointer" }} />
						</div>
						<div>
							<p className="fw-bold mb-0 videoTitle">Suggerimenti per scrivere email aziendali</p>
							<span>
								<small className="fw-light">1.964 visualizzazioni</small>
							</span>
						</div>
					</div>
					<div className="d-flex px-3 mb-2">
						<div className="me-2 position-relative">
							<img src={pic3} width={100} height={60} alt="" style={{ cursor: "pointer" }} />
						</div>
						<div>
							<p className="fw-bold mb-0 videoTitle">Formazione essenziale su PowerPoint</p>
							<span>
								<small className="fw-light">2.212 visualizzazioni</small>
							</span>
						</div>
					</div>
					<div>
						<a
							href="/"
							className="text-secondary border-top text-decoration-none d-flex justify-content-center mostraTutto py-2">
							Visualizza i miei suggerimenti
						</a>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default SidebarProfileRight;
