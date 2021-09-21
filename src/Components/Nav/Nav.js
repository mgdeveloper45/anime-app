import React from "react";
import { Link } from "react-router-dom";
import { Container, Title } from "../../Styles/Styles";


const Nav = ({ children }) => {
	return (
		<Container bgColor="lightgray" display="flex" alItm="center">
			<Link to="/">
				<Title size="xx-large" margin="0">
					Anime
				</Title>
			</Link>
			{children}
		</Container>
	);
};

export default Nav;
