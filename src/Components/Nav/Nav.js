import React from "react";
import { Link } from "react-router-dom";
import { Container, Title } from "../../Styles/Styles";
import Search from "../Search/Search";

const Nav = ({ onSearchSubmit, onChange }) => {
	return (
		<Container bgColor="lightgray" display="flex" alItm="center">
			<Link to="/">
				<Title size="xx-large" margin="0">
					Anime
				</Title>
			</Link>

			<Search onChange={onChange} onSearchSubmit={onSearchSubmit} />
		</Container>
	);
};

export default Nav;
