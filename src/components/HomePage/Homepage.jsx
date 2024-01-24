import { Col, Container, Row } from "react-bootstrap";
import HomeCreatePost from "./HomeSearch";
import HomePosts from "./HomePosts";

const HomePage = () => {
	return (
		<>
			<Container>
				<Row>
					<Col></Col>
					<Col xs={12} md={8}>
						<HomeCreatePost />
						<HomePosts />
					</Col>
					<Col></Col>
				</Row>
			</Container>
		</>
	);
};

export default HomePage;
