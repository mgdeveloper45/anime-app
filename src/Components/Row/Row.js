import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import {allTrending, category } from "../../utils/utils";

const Row = ({ title }) => {
	const [rowImages, setRowImages] = useState([]);
	const [trailer, setTrailer] = useState("");
	const [show, setShow] = useState(false);
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
			<h1>{title}</h1>
			<div style={{ display: "flex" }}>
				{rowImages?.map((image, index) => (
					<div key={index}>
						<img
							src={image.attributes.posterImage?.tiny}
							alt=""
							onClick={() => {
								setShow(!show);
								setTrailer(image.attributes?.youtubeVideoId);
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
