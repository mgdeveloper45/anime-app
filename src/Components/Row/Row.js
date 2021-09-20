import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import { Title } from "../../Styles/Styles";
import { allTrending, category } from "../../utils/utils";

const Row = ({ title }) => {
	const [rowImages, setRowImages] = useState([]);
	const [trailer, setTrailer] = useState("");
	useEffect(() => {
		if (title === "Trending") {
			(async () => {
				const data = await allTrending(title);
				setRowImages(data);
			})();
		} else {
			(async () => {
				const data = await category(title);
				setRowImages(data);
			})();
		}
	}, []);

	const opts = {
		height: "390",
		width: "100%",
		playerVars: {
			autoplay: 1,
		},
	};

	return (
		<div>
			<Title color="white" size="xx-large">
				{title}
			</Title>
			<div style={{ display: "flex" }}>
				{rowImages?.map((image, index) => (
					<div key={index}>
						<img
							src={image.attributes.posterImage?.tiny}
							alt=""
							onClick={() => {
								trailer
									? setTrailer("")
									: setTrailer(image.attributes?.youtubeVideoId);
							}}
						/>
					</div>
				))}
			</div>
			{trailer && <YouTube videoId={trailer} opts={opts} />}
		</div>
	);
};

export default Row;
