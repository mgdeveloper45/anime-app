export const allAnime = async () => {
    const data = await fetch("https://kitsu.io/api/edge/anime");
    const res = await data.json();
    // console.log(res.data);
}
export const searchAnime = async (searchTerm) => {
	const data = await fetch(
		`https://kitsu.io/api/edge/anime?filter[text]=${searchTerm}&page[limit]=1`
	);
    const res = await data.json();
    return res.data[0].attributes;
};

export const category = async (searchTerm) => {
	const data = await fetch(
		`https://kitsu.io/api/edge/anime?filter[categories]=${searchTerm}&page[limit]=10`
	);
    const res = await data.json();
    return res.data;
    // console.log(res);
	// console.log(res.data.map((itemCategory)=>(itemCategory.attributes.slug)));
};