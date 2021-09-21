import CategoryPage from "./Components/CategoryPage/CategoryPage";
import Home from "./Components/Home/Home";
import Nav from "./Components/Nav/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "./Styles/Styles";
import { useEffect, useState } from "react";
import Modal from "./Components/Modal/Modal";
import { searchAnime } from "./utils/utils";

function App(props) {
	const [search, setSearch] = useState({});
	const [singleAnime, setSingleAnime] = useState({});
	const [showModal, setShowModal] = useState(false);

	const onSearchSubmit = async (e) => {
		e.preventDefault();
		if (search.text !== "" && search.type === "title") {
			const data = await searchAnime(search.text);
			setSingleAnime(data);
			setShowModal(true);
		} else if (search.text !== "" && search.type === "category") {
		}
	};

	const onChange = (e) => {
		setSearch({ ...search, [e.target.name]: e.target.value });
	};

	return (
		<Router>
			<Nav
				onChange={onChange}
				onSearchSubmit={onSearchSubmit}
				// setSearchType={setSearchType}
				// setSearchTerm={setSearchTerm}
			>
				{props.children}
			</Nav>
			{showModal && (
				<Modal singleAnime={singleAnime} setShowModal={setShowModal} />
			)}
			<Container bgColor="black" pad="0 20px" width="100%">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/category" component={() => <CategoryPage />} />
				</Switch>
			</Container>
		</Router>
	);
}

export default App;
