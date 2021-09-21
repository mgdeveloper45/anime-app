import React, { useEffect, useState } from "react";

const Search = ({ onSearchSubmit, setSearchType, setSearchTerm, onChange }) => {
	return (
		<div>
			<form onSubmit={onSearchSubmit}>
				<input name="text" type="text" onChange={onChange} />
				<select name="type" onChange={onChange}>
					<option value="">Search By</option>
					<option value="title">Title</option>
					<option value="category">Category</option>
				</select>
			</form>
		</div>
	);
};

export default Search;
