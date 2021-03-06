export const allTrending = async () => {
	const data = await fetch(
		"https://kitsu.io/api/edge/anime?trending&page[limit]=15"
	);
	const res = await data.json();
	const trailer = [];
	res.data.map((item) => {
		let video = item.attributes.youtubeVideoId;
		if (video) {
			trailer.push(item);
		}
	});
	console.log("From trending");
	return trailer;
};

export const searchAnime = async (searchTerm) => {
	const data = await fetch(
		`https://kitsu.io/api/edge/anime?filter[text]=${searchTerm}&page[limit]=1`
	);
	const res = await data.json();
	console.log("From Anime");
	return res.data[0].attributes;
};

export const category = async (searchTerm) => {
	const data = await fetch(
		`https://kitsu.io/api/edge/anime?filter[categories]=${searchTerm}&page[limit]=10`
	);
	const res = await data.json();
	return res.data;
};

export const categoriesPage = async (searchTerm) => {
	const data = await fetch(
		`https://kitsu.io/api/edge/anime?filter[categories]=${searchTerm}&page[limit]=20`
	);
	const res = await data.json();
	console.log("From categories page");
	return res.data;
};
