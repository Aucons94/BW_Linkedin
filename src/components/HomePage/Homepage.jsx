import { Col, Container, Row } from "react-bootstrap";
import HomeCreatePost from "./HomeCreatePost";
import HomePosts from "./HomePosts";
import HomeSidebarLeft from "./HomeSidebarLeft";
import HomeSidebarRight from "./HomeSidebarRight";
import JobsFooter from "../JobsPage/JobsFooter";

const HomePage = () => {
	return (
		<>
			<Container>
				<Row>
					<Col xs={12} md={3}>
						<HomeSidebarLeft />
					</Col>
					<Col xs={12} md={6}>
						<HomeCreatePost />
						<HomePosts />
					</Col>
					<Col xs={12} md={3}>
						<HomeSidebarRight />
						<JobsFooter />
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default HomePage;
