import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ButtonLink from "../utility/ButtonLink";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

const Preview = () => {
	return (
		<Container className="mt-2">
			<Card className=" position-relative">
				<Button
					className="bg-white position-absolute d-flex justify-content-center align-items-center border-0"
					style={{
						borderRadius: "50%",
						width: "32px",
						height: "32px",
						top: "20px",
						right: "20px",
					}}>
					<FontAwesomeIcon
						className="text-primary "
						icon={faPencil}
					/>
				</Button>
				<Card.Img
					variant="top"
					src="https://media.licdn.com/dms/image/D4D16AQF1hv5Mwirbpg/profile-displaybackgroundimage-shrink_350_1400/0/1699741394523?e=1711584000&v=beta&t=WxSV99YRwIo7xPHEgaPCpcnkoTfYVpAjnhAyjM15cF4"
					className="mb-4"
				/>
				<Card.Body className="pb-4">
					<img
						src="https://m.media-amazon.com/images/I/51zf0DXxT-L._AC_UF1000,1000_QL80_.jpg"
						alt="profilo"
						style={{
							width: "160px",
							height: "160px",
							borderRadius: "50%",
							marginTop: "-170px",
							marginLeft: "10px",
							// position: "absolute",
							// top: "70px",
							// left: "20px",
						}}
						className="border border-3 border-white"
					/>
					<div className="d-flex justify-content-between">
						<h3>Obabo Obama</h3>
						<ButtonLink className={"p-0"}>
							<FontAwesomeIcon
								className="text-secondary me-3 "
								icon={faPencil}
							/>
						</ButtonLink>
					</div>
					<p className="mb-1">Full stack web developer</p>
					<p className="text-secondary ">
						Roma, Lazio, Italia{" "}
						<Link className="p-0 fw-bold">
							<span>Informazioni di contatto</span>
						</Link>
					</p>
					<div className="d-flex gap-2 flex-wrap">
						<Button variant="primary">Disponibile per</Button>
						<Button variant="outline-primary">
							Aggiungi sezione del profilo
						</Button>
						<Button variant="outline-secondary">Altro</Button>
					</div>
				</Card.Body>
			</Card>
		</Container>
	);
};

export default Preview;
