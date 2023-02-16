import {BrowserRouter, Route, Routes} from "react-router-dom";
import DetailsPage from "./pages/DetailsPage";
import HomePage from "./pages/HomePage";
import Toggle from "./components/headers/Toggle";
import Nav from "./components/headers/Nav";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

function App() {
	return (
		<BrowserRouter>
			<Toggle />
			<Nav />
			<Routes>
				<Route
					path="/"
					element={<HomePage />}
				/>
				<Route
					path="/about"
					element={<AboutPage />}
				/>
				<Route
					path="/contact"
					element={<ContactPage />}
				/>
				<Route
					path="/details/:id"
					element={<DetailsPage />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
