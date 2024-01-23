import { BrowserRouter } from "react-router-dom";
import "./assets/dist/css/style.min.css";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/profilePage/MyFooter";
import CentralSection from "./components/profilePage/CentralSection";
import SidebarProfileRight from "./components/profilePage/SidebarProfileRight";
import { Container } from "react-bootstrap";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Container style={{ maxWidth: "1200px" }}>
					<MyNavbar />
					<CentralSection />
				</Container>
				<MyFooter />
			</BrowserRouter>
		</div>
	);
}

export default App;
