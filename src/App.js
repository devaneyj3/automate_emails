import React, { useState } from "react";

import EmailForm from "./components/EmailForm";
import "./App.css";

function App() {
	const [numJobs, setNumJobs] = useState(1);

	return (
		<div className="App">
			<h1>Welcome to Outreach Automation</h1>
			<p>
				Send email templates to company contacts by substituting in different
				values
			</p>
			<label>Outreaches to send? </label>
			<input
				type="number"
				name="numJobs"
				min="1"
				max="100"
				onChange={(e) => setNumJobs(e.target.value)}
				value={numJobs}
			/>
			<section className="email">
				{numJobs > 0 &&
					Array(parseInt(numJobs))
						.fill(0)
						.map((j, i) => {
							return (
								<div className="email_container" key={i}>
									<EmailForm />
								</div>
							);
						})}
			</section>
		</div>
	);
}

export default App;
