import { useHistory } from "react-router-dom";

const Search = ({ onSearchSubmit, onChange, search }) => {
	const history = useHistory();
	return (
		<div>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					if (search.text !== "" && search.type === "title") {
						onSearchSubmit();
					} else if (search.text !== "" && search.type === "category") {
						history.push("/category");
					}
				}}
			>
				<input
					name="text"
					placeholder="search"
					type="text"
					onChange={onChange}
				/>
				<select
					name="type"
					onChange={onChange}
				>
					<option value="" selected disabled hidden>
						Choose here
					</option>
					<option value="title">Title</option>
					<option value="category">Category</option>
				</select>
			</form>
		</div>
	);
};

export default Search;
