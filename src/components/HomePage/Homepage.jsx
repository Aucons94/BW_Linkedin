import { Col, Container, Row } from "react-bootstrap";
import HomeCreatePost from "./HomeSearch";
import HomePosts from "./HomePosts";
import HomeSidebarLeft from "./HomeSidebarLeft";

const HomePage = () => {
	return (
		<>
			<Container>
				<Row>
					<Col xs={12} md={3}>
						<HomeSidebarLeft />
					</Col>
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
