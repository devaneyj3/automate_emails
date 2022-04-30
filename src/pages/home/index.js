import React, { useState } from "react";

import EmailForm from "../../components/EmailForm";
import "./App.css";

export default function Home() {
	const [numJobs, setNumJobs] = useState(1);
	return (
		<div>
			{" "}
			<div className="App">
				<h1>Welcome to Auto Email</h1>
				<p>
					Send email templates to company contacts by substituting in different
					values in templates.
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
		</div>
	);
}
