import Home from "./Components/Home/Home";
import Nav from "./Components/Nav/Nav";
import { allAnime,category} from "./utils/utils";

function App() {
  category("action");
  allAnime();
	return (
    <div>
      <Nav />
      <Home/>
		</div>
	);
}

export default App;
