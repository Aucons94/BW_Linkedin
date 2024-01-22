import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Preview = () => {
	return (
		<Container className="mt-2">
			<Card>
				<Card.Img
					variant="top"
					src="https://media.licdn.com/dms/image/D4D16AQF1hv5Mwirbpg/profile-displaybackgroundimage-shrink_350_1400/0/1699741394523?e=1711584000&v=beta&t=WxSV99YRwIo7xPHEgaPCpcnkoTfYVpAjnhAyjM15cF4"
				/>
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Text>
						Some quick example text to build on the card title and
						make up the bulk of the card's content.
					</Card.Text>
					<Button variant="primary">Disponibile per</Button>
					<Button variant="outline-primary mx-2">
						Aggiungi sezione del profilo
					</Button>
					<Button variant="outline-secondary">Altro</Button>
				</Card.Body>
			</Card>
		</Container>
	);
};

export default Preview;
