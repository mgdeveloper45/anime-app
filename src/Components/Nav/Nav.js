import React from "react";
import { Link } from "react-router-dom";
import Search from "../Search/Search";

const Nav = () => {
	return (
		<div style={{ backgroundColor: "lightgray" }}>
			<Link to="/">
				<h1>Anime</h1>
			</Link>
			<Search />
		</div>
	);
};

export default Nav;
