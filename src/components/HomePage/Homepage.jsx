import { Col, Container, Row } from "react-bootstrap";
import HomeSearch from "./HomeSearchbar";
import HomePosts from "./HomePosts";

const HomePage = () => {
	return (
		<>
			<Container>
				<Row>
					<Col></Col>
					<Col xs={12} md={8}>
						<HomeSearch />
						<HomePosts />
					</Col>
					<Col></Col>
				</Row>
			</Container>
		</>
	);
};

export default HomePage;
