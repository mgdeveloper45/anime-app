import Search from "./Components/Search";
import { allAnime, category } from "./utils/utils";

function App() {
  // category();
  allAnime();
	return (
		<div>
			<Search />
		</div>
	);
}

export default App;
