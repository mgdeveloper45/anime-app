import React from "react";
import { Container } from "../../Styles/Styles";
import Row from "../Row/Row";

const Home = ({ setHomeCategory }) => {
	const titles = [
		"Trending",
		"Action",
		"Comedy",
		"Josei",
		"Psychological",
		"Isekai",
		"Supernatural",
		"Drama",
		"Cyberpunk",
	];
	return (
		<Container display="flex" direction="column" alItm="center">
			{titles.map((title, index) => (
				<Row key={index} title={title} setHomeCategory={setHomeCategory} />
			))}
		</Container>
	);
};

export default Home;
