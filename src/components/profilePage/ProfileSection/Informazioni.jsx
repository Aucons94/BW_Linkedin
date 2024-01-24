import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ButtonLink from "../utility/ButtonLink";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowRight,
	faChartBar,
	faEye,
	faPencil,
	faSatelliteDish,
	faSearch,
	faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import { Col, Container, Row } from "react-bootstrap";

const Informazioni = () => {
	return (
		<Card className="position-relative mt-4  ">
			<Card.Body className="p-4 border-bottom">
				<div className="d-flex justify-content-between">
					<h3 className="m-0 mb-md-3">Informazioni</h3>
					<ButtonLink>
						<FontAwesomeIcon
							className="text-secondary"
							icon={faPencil}
						/>
					</ButtonLink>
				</div>
				<p>
					Obabo Obama, con una carriera consolidata come full stack
					web developer, ha guidato progetti di successo, dimostrando
					competenze robuste in ogni fase dello sviluppo. La sua
					esperienza include la progettazione di interfacce utente
					intuitive, l'implementazione di soluzioni backend efficienti
					e l'integrazione di tecnologie all'avanguardia.
					Collaboratore prezioso, ha lavorato con team
					multidisciplinari, partecipando attivamente alla risoluzione
					di sfide complesse. Con una solida comprensione delle best
					practice e una fervente dedizione, Obabo eccelle nel creare
					esperienze web straordinarie e funzionalità avanzate.
				</p>
			</Card.Body>
		</Card>
	);
};

export default Informazioni;
