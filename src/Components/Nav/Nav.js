import React from "react";
import { Link } from "react-router-dom";
import { NavContainer, NavItems, NavTitle } from "./NavStyles";

const Nav = ({ children }) => {
	return (
		<NavContainer>
			<NavItems>
				<Link to="/" style={{ textDecoration: "none" }}>
					<NavTitle size="xx-large" margin="0" pad="0 150px 0 0" color="black">
						Anime
					</NavTitle>
				</Link>
				{children}
			</NavItems>
		</NavContainer>
	);
};

export default Nav;
