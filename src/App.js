import CategoryPage from "./Components/CategoryPage/CategoryPage";
import Home from "./Components/Home/Home";
import Nav from "./Components/Nav/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
	return (
		<Router>
			<Nav />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/category" component={CategoryPage} />
			</Switch>
		</Router>
	);
}

export default App;
