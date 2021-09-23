import React from "react";
import { Link } from "react-router-dom";
import { Container, Title } from "../../Styles/Styles";


const Nav = ({ children }) => {
	return (
		<Container
			bgColor="lightgray"
			display="flex"
			alItm="center"
			// alCnt="center"
			jstCnt="center"
			height="10vh"
		>
			<Link to="/" style={{textDecoration: "none"}}>
				<Title size="xx-large" margin="0" pad="0 150px 0 0" color="black">
					Anime
				</Title>
			</Link>
			{children}
		</Container>
	);
};

export default Nav;
