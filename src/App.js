import CategoryPage from "./Components/CategoryPage/CategoryPage";
import Home from "./Components/Home/Home";
import Nav from "./Components/Nav/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "./Styles/Styles";
import { useEffect, useState } from "react";
import Modal from "./Components/Modal/Modal";
import { searchAnime, categoriesPage } from "./utils/utils";
function App(props) {
	const [searchTerm, setSearchTerm] = useState("");
	const [searchType, setSearchType] = useState("");
	
	const [singleAnime, setSingleAnime] = useState({});
	const [showModal, setShowModal] = useState(false);
	const [category, setCategory] = useState([])

	const onSearchSubmit = async (searchTerm) => {
		if (searchTerm !== "" && searchType === "title") {
			setSearchTerm(searchTerm);
			const data = await searchAnime(searchTerm);
			setSingleAnime(data);
			setShowModal(true);
			
		} else if (searchTerm !== "" && searchType === "category") {
			setSearchTerm(searchTerm);
			const data = await categoriesPage(searchTerm);
			setCategory(data);
		}
	};

	return (
		<Router>
			<Nav
				onSearchSubmit={onSearchSubmit}
				setSearchType={setSearchType}
				setSearchTerm={setSearchTerm}
			>
				{props.children}
			</Nav>
			{showModal && (
				<Modal singleAnime={singleAnime} setShowModal={setShowModal} />
			)}
			<Container bgColor="black" pad="0 20px" width="100%">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route
						path="/category"
						component={() => <CategoryPage category={category} onSearchSubmit={onSearchSubmit} />}
					/>
				</Switch>
			</Container>
		</Router>
	);
}

export default App;
