import { Col, Container, Row } from "react-bootstrap";
import Preview from "./centralSection/Preview";
import SidebarProfileRight from "./SidebarProfileRight";
import Analisi from "./centralSection/Analisi";
import Risorse from "./centralSection/Risorse";
import Informazioni from "./centralSection/Informazioni";
import Esperienze from "./centralSection/Esperienze";

const CentralSection = () => {
	return (
		<Container className="d-flex align-items-start gap-2">
			<Row>
				<Col xs={12} md={7} lg={8} xl={9}>
					<Preview />
					<Analisi />
					<Risorse />
					<Informazioni />
					<Esperienze />
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
