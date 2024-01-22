import { BrowserRouter } from "react-router-dom";
import "./assets/dist/css/style.min.css";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/profilePage/MyFooter";
import CentralSection from "./components/profilePage/CentralSection";

function App() {
	return (
		<div>
			<BrowserRouter>
				<MyNavbar />
				<CentralSection />
				<MyFooter />
			</BrowserRouter>
		</div>
	);
}

export default App;
