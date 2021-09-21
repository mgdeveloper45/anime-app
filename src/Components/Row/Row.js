import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import { Container, Title } from "../../Styles/Styles";
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
		<Container width="80%" display="flex" direction="column" wrap="wrap">
			<Title color="white" size="xx-large" margin="0" pad="20px 0">
				{title}
			</Title>
			<Container display="flex" jstCnt="space-around">
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
			</Container>
			{trailer && <YouTube videoId={trailer} opts={opts} />}
		</Container>
	);
};

export default Row;
