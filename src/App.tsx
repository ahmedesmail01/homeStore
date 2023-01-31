import React from "react";
//import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import NavigationBar from "./components/NavigationBar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

//

function App() {
	return (
		<>
			<ShoppingCartProvider>
				<NavigationBar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/store" element={<Store />} />
					<Route path="/about" element={<About />} />
				</Routes>
				<p className="text-center my-5">
					Made with Love By{" "}
					<a href="https://github.com/ahmedesmail01" target="_blank" rel="noreferrer">
						Ahmed Esmail
					</a>
				</p>
			</ShoppingCartProvider>
		</>
	);
}

export default App;
