import { useHistory } from "react-router-dom";
import { Container, Input, Select, Form } from "../../Styles/Styles";
import { BsSearch } from "react-icons/bs";
import {
	NavInput,
	FormContainer,
	InputContainer,
	NavSelect,
} from "../Nav/NavStyles";
const Search = ({ onSearchSubmit, onChange, search }) => {
	const history = useHistory();
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				if (search.text !== "" && search.type === "category") {
					history.push("/category");
				} else if (search.text !== "") {
					onSearchSubmit();
				} else alert("please enter text");
				document.querySelector("#searchBar").value = "";
				document.querySelector("#selectOption").value = "";
			}}
		>
			<FormContainer>
				<InputContainer>
					<NavInput
						id="searchBar"
						name="text"
						placeholder="search"
						type="text"
						onChange={onChange}
					/>
					<BsSearch style={{ color: "gray" }} />
				</InputContainer>
				<div>
					<NavSelect id="selectOption" name="type" onChange={onChange}>
						<option value="" selected disabled>
							select
						</option>
						<option value="title">Title</option>
						<option value="category">Category</option>
					</NavSelect>
				</div>
			</FormContainer>
		</form>
	);
};

export default Search;
