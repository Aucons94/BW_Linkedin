import { BrowserRouter } from "react-router-dom";
import "./assets/dist/css/style.min.css";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/profilePage/MyFooter";
import Profile from "./components/profilePage/Profile";

function App() {
	return (
		<div>
			<BrowserRouter>
				<MyNavbar>
					{" "}
					<Profile />{" "}
				</MyNavbar>

				<MyFooter />
			</BrowserRouter>
		</div>
	);
}

export default App;
