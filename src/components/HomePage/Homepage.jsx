import { Col, Container, Row } from "react-bootstrap";
import HomeSearch from "./HomeSearchbar";

const HomePage = () => {
	return (
		<>
			<Container>
				<Row>
					<Col></Col>
					<Col>
						<HomeSearch />
					</Col>
					<Col></Col>
				</Row>
			</Container>
		</>
	);
};

export default HomePage;
