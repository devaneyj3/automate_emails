import React from "react";

import { TEMPLATES } from "../../constants";

export default function Templates() {
	return (
		<div>
			<h2>Click on the template to see the structure of the email.</h2>
			{TEMPLATES.map((template) => {
				return (
					<h3 key={template}>
						{template} <span>^</span>
					</h3>
				);
			})}
		</div>
	);
}
