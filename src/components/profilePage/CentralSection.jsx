import { Container } from "react-bootstrap";
import Preview from "./centralSection/Preview";
import SidebarProfileRight from "./SidebarProfileRight";

const CentralSection = () => {
	return (
		<Container
			className="d-flex align-items-start gap-2"
			style={{ maxWidth: "800px" }}>
			<Preview />
			{/* sezione con img profilo, nome, domicilio etc */}
			<SidebarProfileRight />
		</Container>
	);
};
export default CentralSection;
