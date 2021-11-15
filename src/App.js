import './App.css';

import {
	Route,
	HashRouter,
	Routes
} from "react-router-dom";

import About from "./routes/about/about";
import Articles from "./routes/articles/articles";
import NavBar from "./elements/navbar/NavBar";
import Footer from "./elements/footer/Footer";
import CardArticle from "./elements/cardArticle/CardArticle";
import {useState} from "react";

function App() {
	const [drawerOpen, setDrawerOpen] = useState(false);

	function toggleDrawer() {
		setDrawerOpen(!drawerOpen);
	}

	function closeDrawer(e) {
		if (drawerOpen) {
			setDrawerOpen(false);
		}
	}

	return (
		<HashRouter className="app">
			<NavBar toggleDrawer={toggleDrawer} closeDrawer={closeDrawer}/>
			<div className="pageContent" onClick={closeDrawer}>
				<Routes>
					<Route path="/about" element={<About />}/>
					<Route path="*" element={<Articles drawerOpen={drawerOpen} />}>
						<Route path=":filter" element={<CardArticle/>}/>
					</Route>
				</Routes>
			</div>
			<Footer />
		</HashRouter>
	);
}

export default App;
