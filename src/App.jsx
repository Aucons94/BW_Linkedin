import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/dist/css/style.min.css";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/profilePage/MyFooter";
import Profile from "./components/profilePage/Profile";
import HomePage from "./components/HomePage/Homepage";

function App() {
	return (
		<div>
			<BrowserRouter>
				<MyNavbar>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/profile/me" element={<Profile />} />
					</Routes>
				</MyNavbar>
			</BrowserRouter>
		</div>
	);
}

export default App;
