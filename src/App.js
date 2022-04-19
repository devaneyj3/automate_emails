import React, { useState } from "react";

import EmailForm from "./components/EmailForm";
import "./App.css";

import emailjs from "@emailjs/browser";

function App() {
	// const sendInfo = (e) => {
	// 	emailjs.send(
	// 		"service_hvxwgj9",
	// 		"template_job",
	// 		{
	// 			job,
	// 			name,
	// 			company,
	// 			to,
	// 		},
	// 		"b6qX3WNsdVhOUeLiC"
	// 	);
	// };
	return (
		<div className="App">
			<EmailForm />
		</div>
	);
}

export default App;
