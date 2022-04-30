import * as React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Templates from "./pages/templates";
import Layout from "./components/layout";

function App() {
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="templates" element={<Templates />} />
			</Routes>
		</Layout>
	);
}

export default App;
