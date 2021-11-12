import './App.css';

import {
	Route,
	HashRouter,
	Routes
} from "react-router-dom";

import About from "./routes/about";
import Articles from "./routes/articles";
import NavBar from "./elements/navbar/NavBar";
import CardArticle from "./elements/cardArticle/CardArticle";
import Footer from "./elements/footer/Footer";

function App() {
	return (
		<HashRouter className="app">
			<NavBar />
			<div className="pageContent">
				<Routes>
					<Route path="/about" element={<About />}/>
					<Route path="*" element={<Articles />}>
						<Route path=":article" element={<CardArticle />} />
					</Route>
				</Routes>
			</div>
			<Footer />
		</HashRouter>
	);
}

export default App;
