import React from "react";
import Navigation from "../nav";
import "./layout.css";

export default function Layout({ children }) {
	return (
		<>
			<Navigation />
			<div className="layout">{children}</div>
		</>
	);
}
