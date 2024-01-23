import { Col, Container, Row } from "react-bootstrap";
import Preview from "./centralSection/Preview";
import SidebarProfileRight from "./SidebarProfileRight";

const CentralSection = () => {
	return (
		<Container className="d-flex align-items-start gap-2">
			<Row>
				<Col xs={12} md={7} lg={8} xl={9}>
					<Preview />
					{/* vari componenti */}
					{/* vari componenti */}
					{/* vari componenti */}
					{/* vari componenti */}
					{/* vari componenti */}
					{/* vari componenti */}
					{/* vari componenti */}
					{/* vari componenti */}
				</Col>
				<Col md={5} lg={4} xl={3}>
					<SidebarProfileRight />
				</Col>
			</Row>
		</Container>
	);
};
export default CentralSection;
