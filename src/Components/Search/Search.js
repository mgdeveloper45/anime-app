import { useHistory } from "react-router-dom";
import { Container, Input, Select, Form } from "../../Styles/Styles";
import { BsSearch } from "react-icons/bs";
const Search = ({ onSearchSubmit, onChange, search }) => {
	const history = useHistory();
	return (
		<div>
			<Form
				onSubmit={(e) => {
					e.preventDefault();
					if (search.text !== "" && search.type === "title") {
						onSearchSubmit();
					} else if (search.text !== "" && search.type === "category") {
						history.push("/category");
					}
				}}
			>
				<Container bgColor="white" pad="0 10px" radius="10px">
					<Input
						name="text"
						placeholder="search"
						type="text"
						onChange={onChange}
					/>
					<BsSearch style={{color:"gray"}}/>
				</Container>
				<Select name="type" onChange={onChange} >
					<option value="" selected disabled >
						select
					</option>
					<option value="title">Title</option>
					<option value="category">Category</option>
				</Select>
			</Form>
		</div>
	);
};

export default Search;
