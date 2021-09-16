export const allAnime = async () => {
    const data = await fetch("https://kitsu.io/api/edge/anime");
    const res = await data.json();
    console.log(res.data);
}
export const searchAnime = async (searchTerm) => {
	const data = await fetch(
		`https://kitsu.io/api/edge/anime?filter[text]=${searchTerm}&page[limit]=1`
	);
    const res = await data.json();
    return res.data;
};

export const category = async () => {
	const data = await fetch("https://kitsu.io/api/edge/categories");
	const res = await data.json();
	console.log(res.data);
};