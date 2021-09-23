import CategoryPage from "./Components/CategoryPage/CategoryPage";
import Home from "./Components/Home/Home";
import Nav from "./Components/Nav/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "./Styles/Styles";
import { useEffect, useState } from "react";
import Modal from "./Components/Modal/Modal";
import { searchAnime } from "./utils/utils";
import Search from "./Components/Search/Search";

function App(props) {
	const [search, setSearch] = useState({});
	const [singleAnime, setSingleAnime] = useState({});
	const [showModal, setShowModal] = useState(false);
	const [homeCategory, setHomeCategory] = useState("");

	const onSearchSubmit = async () => {
		const data = await searchAnime(search.text);
		setSingleAnime(data);
		setShowModal(true);
		setSearch({});
	};

	const onChange = (e) => {
		setSearch({ ...search, [e.target.name]: e.target.value });
	};

	return (
		<Router>
			<Nav>
				<Search
					search={search}
					onChange={onChange}
					onSearchSubmit={onSearchSubmit}
				/>
			</Nav>
			{showModal && (
				<Modal singleAnime={singleAnime} setShowModal={setShowModal} />
			)}
			<Container bgColor="black" pad="0 20px">
				<Switch>
					<Route exact path="/">
						<Home setHomeCategory={setHomeCategory} />
					</Route>
					<Route path="/category">
						<CategoryPage searchValue={search.text || homeCategory} />
					</Route>
				</Switch>
			</Container>
		</Router>
	);
}

export default App;
