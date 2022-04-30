import React, { useState } from "react";
import {
	Navbar,
	NavItem,
	Nav,
	NavbarToggler,
	Collapse,
	NavLink,
} from "reactstrap";

export default function Navigation() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Navbar color="light" expand="md" light>
			<NavbarToggler onClick={() => setIsOpen(!isOpen)} />
			<Collapse navbar isOpen={isOpen}>
				<Nav className="me-auto" navbar>
					<NavItem>
						<NavLink href="/">Home</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="/about">About</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="/templates">Templates</NavLink>
					</NavItem>
				</Nav>
			</Collapse>
		</Navbar>
	);
}
