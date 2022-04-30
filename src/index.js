import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
	<>
		<BrowserRouter>
			<App tab="home" />
		</BrowserRouter>
	</>
);
