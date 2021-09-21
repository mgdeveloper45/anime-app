import React, { useEffect, useRef, useState } from "react";
import YouTube from "react-youtube";
import { searchAnime } from "../../utils/utils";

const Search = ({ onSearchSubmit, setSearchType, setSearchTerm }) => {
	const [search, setSearch] = useState({ searchTerm: "", Type: "" });
	// useEffect(() => {
	//     (async() => {
	//         const data = await searchAnime(searchTerm);
	//         setSingleAnime(data);
	//         // console.log(data);
	//     })();
	// }, [searchTerm]);

	const handleChange = (e) => {
		setSearch({ ...search, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setSearchType(search.Type);
		// setSearchTerm(search.searchTerm);
		onSearchSubmit(search.searchTerm);
		// setSearch({ searchTerm: "", Type: "" });
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					name="searchTerm"
					type="text"
					value={search.searchTerm}
					onChange={handleChange}
				/>
				<select name="Type" onChange={handleChange}>
					<option value="">Search By</option>
					<option value="title">Title</option>
					<option value="category">Category</option>
				</select>
			</form>
		</div>
	);
};

export default Search;
